function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    });

    console.log(formData.favColor);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className="form-item"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className="form-item"
            />
            <input
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="form-item"
            />
            <textarea
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
                className="form-item"
            />

            <div className="form-item checkbox">
                <input
                    type="checkbox"
                    id="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly"
                />
                <label htmlFor="isFriendly">Are you friendly?</label>
            </div>
            <fieldset>
                <legend>Current Employment Status</legend>
                <div>
                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part Time</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full Time</label>
                </div>
            </fieldset>
            <div className="form-item menubar">
                <label htmlFor="favColor">What is your favorite color?</label>
                <select
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="">--- Choose ---</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
            </div>
            <button>Ready to submit? Click!</button>
        </form>
    )
}

ReactDOM.render(<Form />, document.getElementById("root"));