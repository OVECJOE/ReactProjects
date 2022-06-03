function App() {
    const [starWarData, setStarWarData] = React.useState({});
    const [count, setCount] = React.useState(1);

    function handleClick(next) {
        console.log(next)
        setCount((prevCount) =>  {
            return (next ? prevCount + 1 :
            (prevCount > 1 ? prevCount - 1 : 1))})
    }

    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarData(data));
    }, [count])

    return (
        <div className="App">
            <div>
                <h2>Character's ID: <span>{count}</span></h2>
                <div className="btns">
                    <button type="button" onClick={() => handleClick(false)}>Get Previous Character</button>
                    <button type="button" onClick={() => handleClick(true)}>Get Next Character</button>
                </div>
            </div>
            <pre>{JSON.stringify(starWarData, null, 2)}</pre>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"));