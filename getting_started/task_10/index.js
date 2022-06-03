// function App() {
//     return (
//         <h1>Function Component</h1>
//     )
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header username='OVECJOE' />
//                 <Greeting />
//             </div>
//         )
//     }
// }

// class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <p>Welcome, {this.props.username}!</p>
//             </header>
//         );
//     }
// }

// class Greeting extends React.Component {
//     render() {
//         const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay = date.getHours()

//         if (hours < 12) {
//             timeOfDay = "morning"
//         } else if (hours >= 12 && hours < 17) {
//             timeOfDay = "afternoon"
//         } else {
//             timeOfDay = "night"
//         }
//         return (
//             <h1>Good {timeOfDay} to you, sir or madam!</h1>
//         )
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             goOut: 'Yes',
//         }
//         this.toggleGoOut = this.toggleGoOut.bind(this)
//     }

//     toggleGoOut() {
//         this.setState(prevState => {
//             return {
//                 goOut: prevState.goOut === "Yes" ? "No" : "Yes"
//             }
//         })
//     }

//     render() {
//         return (
//             <div className="state">
//                 <h1 className="state--title">Should I go out tonight?</h1>
//                 <div className="state--value" onClick={this.toggleGoOut}>
//                     <h1>{this.state.goOut}</h1>
//                 </div>
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//         }

//         this.add = this.add.bind(this)
//         this.subtract = this.subtract.bind(this)
//     }


//     add() {
//         this.setState(prevState => ({
//             count: prevState.count + 1
//         }))
//     }

//     subtract() {
//         this.setState(prevState => ({
//             count: prevState.count - 1
//         }))
//     }

//     render() {
//         return (
//             <div className="counter">
//                 <button className="counter--minus" onClick={this.subtract}>–</button>
//                 <div className="counter--count">
//                     <h1>{this.state.count}</h1>
//                 </div>
//                 <button className="counter--plus" onClick={this.add}>+</button>
//             </div>
//         )
//     }
// }

class App extends React.Component {
    state = {
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    }

    toggleFavorite = () => {
        this.setState(prevState => ({
            isFavorite: !prevState.isFavorite
        }))
    }

    render() {
        let starIcon = this.state.isFavorite ? "star-filled.png" : "star-empty.png"

        return (
            <main>
                <article className="card">
                    <img src="./user.jpeg" className="card--image" />
                    <div className="card--info">
                        <img
                            src={`./${starIcon}`}
                            className="card--favorite"
                            onClick={this.toggleFavorite}
                        />
                        <h2 className="card--name">
                            {this.state.firstName} {this.state.lastName}
                        </h2>
                        <p className="card--contact">{this.state.phone}</p>
                        <p className="card--contact">{this.state.email}</p>
                    </div>
    
                </article>
            </main>
        )
    }
}

ReactDOM.render(<App type='Class' />, document.getElementById("root"));