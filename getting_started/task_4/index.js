function Header() {
    return (
        <header className="header">
            <img src="./React-logo.png" className="logo" />
            <nav>
                <ul className="nav-items">
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

function Content() {
    return (
        <div className="main">
            <div>
                <h1>Reasons I am excited about learning React</h1>
                <ol>
                    <li>It is declarative.</li>
                    <li>It makes making interactive websites more easy to achieve.</li>
                    <li>I am more likely to get a job learning React.</li>
                    <li>Learning React gives me an edge since it is a popular library.</li>
                    <li>It was created by Facebook.</li>
                    <li>This is the reason you can write HTML in JavaScript</li>
                    <li>React Native makes app development easier</li>
                    <li>The React community is amazing</li>
                    <li>React is all about Reusable Components</li>
                </ol>
            </div>
            <div>
                <h2>More About React</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est
                    voluptas distinctio facilis nobis, dolores suscipit reprehenderit alias
                    numquam illum voluptatum molestiae temporibus debitis cupiditate. Ullam
                    ipsum quaerat soluta iure cumque similique qui, illum, eum commodi repudiandae
                    placeat voluptas quos dignissimos recusandae, quas adipisci sapiente nam. Excepturi
                    voluptas dolorem dolorum sit distinctio modi dicta, deserunt beatae officia alias ipsa
                    eos incidunt, esse ratione repellat nisi magni, a quas reiciendis consequatur sequi doloremque?
                    Quis nulla minus enim molestias vero error quas a ad sit assumenda voluptatem blanditiis id eius,
                    saepe quaerat et quo dolorum ducimus earum tempore? Officia cumque asperiores amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est
                    voluptas distinctio facilis nobis, dolores suscipit reprehenderit alias
                    numquam illum voluptatum molestiae temporibus debitis cupiditate. Ullam
                    ipsum quaerat soluta iure cumque similique qui, illum, eum commodi repudiandae
                    placeat voluptas quos dignissimos recusandae, quas adipisci sapiente nam. Excepturi
                    voluptas dolorem dolorum sit distinctio modi dicta, deserunt beatae officia alias ipsa
                    eos incidunt, esse ratione repellat nisi magni, a quas reiciendis consequatur sequi doloremque?
                    Quis nulla minus enim molestias vero error quas a ad sit assumenda voluptatem blanditiis id eius,
                    saepe quaerat et quo dolorum ducimus earum tempore? Officia cumque asperiores amet.
                </p>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>
                &copy; 2022 Ohachor development. All rights reserved.
            </small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));