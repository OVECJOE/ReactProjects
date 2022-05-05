function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
        <ul>
            <li>List 1</li>
            <li>List 2</li>
        </ul>
    </div>,
    document.getElementById("root")
);
