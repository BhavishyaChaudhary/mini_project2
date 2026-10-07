import { useMemo, useState } from 'react';

const medicineCatalog = [
  'Paracetamol',
  'Ibuprofen',
  'Aspirin',
  'Amoxicillin',
  'Metformin',
  'Warfarin',
  'Atorvastatin',
  'Omeprazole',
  'Clopidogrel'
];

function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(['Paracetamol', 'Ibuprofen']);

  const filteredMedicines = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return medicineCatalog;
    return medicineCatalog.filter((medicine) => medicine.toLowerCase().includes(normalizedQuery));
  }, [query]);

  const toggleMedicine = (medicine) => {
    setSelected((current) => {
      if (current.includes(medicine)) {
        return current.filter((item) => item !== medicine);
      }
      return [...current, medicine];
    });
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Neural Cyphers T-100</p>
          <h1>PharmGraph AI</h1>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#">Home</a>
          <a href="#">Results</a>
          <a href="#">About</a>
        </nav>
      </header>

      <main className="content">
        <section className="hero panel">
          <p className="badge">Drug–Drug Interaction Checker</p>
          <h2>Track known and potential medicine interactions.</h2>
          <p>
            Search medicines, compare selected drugs, and review documented warnings and model-based risk signals.
          </p>
        </section>

        <section className="panel search-panel">
          <div className="section-header">
            <h3>Search medicines</h3>
            <span className="count-pill">{selected.length} selected</span>
          </div>

          <div className="search-box">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search medicines..."
              aria-label="Search medicines"
            />
            <button type="button">Search</button>
          </div>

          <div className="catalog-grid">
            {filteredMedicines.map((medicine) => {
              const isSelected = selected.includes(medicine);
              return (
                <button
                  key={medicine}
                  type="button"
                  className={`catalog-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleMedicine(medicine)}
                >
                  {medicine}
                </button>
              );
            })}
          </div>

          <div className="selection-box">
            <div className="chip-row">
              {selected.length > 0 ? (
                selected.map((medicine) => (
                  <button
                    key={medicine}
                    type="button"
                    className="chip chip-button"
                    onClick={() => toggleMedicine(medicine)}
                  >
                    {medicine} ×
                  </button>
                ))
              ) : (
                <span className="muted">No medicine selected yet.</span>
              )}
            </div>

            <button type="button" className="primary-action">
              Check interactions
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
