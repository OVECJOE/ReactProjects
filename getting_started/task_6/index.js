const Jokes = [
    {
        setup: "'And by the way, you've got a lovely home!'",
        punchline: "What's the setup ?"
    },
    {
        setup: "Does anybody have a joke where the punchline would make no sense if heard alone? I'm thinking like in movies and shows where you come in on a character telling the punchline and everybody laughs hysterically.",
        punchline: "I've always wanted to hear the setup to one of those type of jokes."
    },
    {
        setup: "A football team should setup a charity that gives presents to children with Down Syndrome",
        punchline: "...and call it Touch Downs."
    },
    {
        setup: "Three people are given the death sentence...",
        punchline: [
            "They are given a choice, guillotine or rifle for their execution.",
            "The first convict states he will take the guillotine. When they setup and release, the blade gets stuck and the sheriff states 'it is not your time, you may go.'",
            "The second decides on guillotine as well, the blade gets stuck and they also let him free.",
            'The third says "Well, since the guillotine isn\'t working, I will take death by rifle."'
        ]
    },
    {
        setup: "Request: A joke involving an Indian, an Irish, an Aussie and a Brazilian",
        punchline: "This resumes the current setup at home, whenever I tell someone it sounds like I'm starting a joke... please help me finding a real joke to use."
    },
    {
        setup: "I was kidnapped by mimes once."
    }
]

function renderPunchline(punchline) {
    if (punchline instanceof Array) {
        return (
            <div>
                {punchline.map((element) => {
                        return <p>{element}</p>
                    })}
            </div>
        )
    } else if (typeof punchline === 'string') {
        return <p>{punchline}</p>
    } else {
        return <span className="big-font"> None.</span>
    }
}

function Joke(props) {
    return (
        <div className="joke-card">
            {/* Joke Setup */}
            {props.setup &&
                <h2>
                    Setup &mdash; <span className="italic">
                        {props.setup}
                    </span>
                </h2>
            }

            {/* Joke Punchline */}
            <div className="punchline">
                <strong>Punchline &mdash; </strong>
                {renderPunchline(props.punchline)}
            </div>
            <div className="votes">
                {props.votes && <p className="italic">
                    <small>{props.votes}</small>
                </p>}
            </div>
        </div>
    )
}

function App() {
    const JokeElements = Jokes.map((joke) => {
        return <Joke 
            setup={joke.setup}
            punchline={joke.punchline}
        />
    })
    return (
        <div className="jokes">
            <h1>Jokes with Setup and Punchline</h1>
            {JokeElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));