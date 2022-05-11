function Count(props) {
    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
        </div>
    )
}

function App() {
    const [count, setCount] = React.useState(0);
    const increment = () => 
    setCount(prevCount => prevCount + 1);
    const decrement = () => 
    setCount(prevCount => prevCount - 1);

    return (
        <div className="counter">
            <button className="counter--minus" onClick={decrement}>-</button>
            <Count 
                number={count}
            />
            <button className="counter--plus" onClick={increment}>+</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));