import React from 'react';

export default function Form() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        subscribed: false
    });

    function handleChange(event) {
        const {name, type, checked, value} = event.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.confirmPassword === formData.password) {
            console.log('Successfully signed up');
            formData.subscribed && 
            alert("Thanks for signing up for our newsletter!");
        } else {
            console.log('Passwords do not match');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            <div className='checkbox'>
                <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribed"
                    checked={formData.subscribed}
                    onChange={handleChange}
                />
                <label htmlFor='subscribe'>
                    I want to join the newsletter
                </label>
            </div>
            <button>Sign up</button>
        </form>
    )
}