import { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { toggleTheme } = context;

                return <button onClick={toggleTheme} id='theme-button'>
                    Change Theme
                </button>
            }}</ThemeContext.Consumer>
        )
    }
}

export default ThemeToggle;