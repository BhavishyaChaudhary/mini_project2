const medicines = [
    'Paracetamol',
    'Ibuprofen',
    'Aspirin',
    'Amoxicillin',
    'Metformin'
];

function App() {
    return (
        <div className="app-shell">
            <header className="topbar">
                <div>
                    <p className="eyebrow">Neural Cyphers T-100</p>
                    <h1>PharmGraph AI</h1>
                </div>
                <nav className="nav">
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

                    <div className="search-box">
                        <input type="text" placeholder="Search medicines..." defaultValue="" />
                        <button>Search</button>
                    </div>

                    <div className="chip-row">
                        {medicines.map((med) => (
                            <span key={med} className="chip">{med}</span>
                        ))}
                    </div>
                </section>

                <section className="panel">
                    <h3>Project purpose</h3>
                    <p>
                        This frontend shell is the first step toward a decision-support prototype that separates documented interactions from GNN-predicted risk.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default App;
