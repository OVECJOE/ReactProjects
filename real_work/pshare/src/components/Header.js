const Header = () => {
    return (
        <header className="App-header">
                <h3 className="title">PSHARE</h3>
            <nav className="App-nav">
                <form className='search-card'>
                    <label htmlFor="search">
                        Search for projects
                    </label>
                    <input
                        id="search"
                        placeholder="search for projects"
                        name="search_project"
                    />
                    <button>Search</button>
                </form>
                <div className='theme-box'>
                    <div className='theme-toggler'></div>
                </div>
            </nav>
        </header>
    );
};

export default Header;