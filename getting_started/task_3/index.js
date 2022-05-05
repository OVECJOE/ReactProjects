function Page() {
    return (
        <>
            <nav>
                <img src="./React-logo.png" width="60px" />
            </nav>
            <main>
                <h1>Fun Facts About React</h1>
                <ol>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ol>
            </main>
        </>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))