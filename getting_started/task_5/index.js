function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <i className="fa-solid fa-phone"></i>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <i className="fa-solid fa-envelope"></i>
                <p>{props.email}</p>
            </div>
        </div>

    )
}

function Page() {
    return (
        <div className="contacts">
            <ContactCard 
                img="./images/cat1.jpeg"
                name="Mr Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <ContactCard 
                img="./images/cat2.jpeg"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="mr.whiskaz@catnap.meow"
            />
            <ContactCard 
                img="./images/cat3.jpeg"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
            <ContactCard 
                img="./images/cat4.jpeg"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <ContactCard 
                img="./images/cat5.jpeg"
                name="Fluffman"
                phone="(212) 555-7677"
                email="fluffman@hotmail.com"
            />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));