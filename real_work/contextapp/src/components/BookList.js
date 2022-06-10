import { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;

                return (
                    <div className='book-list' style={{ color: theme.syntax, backgroundColor: theme.bg }}>
                        <ul>
                            <li style={{ backgroundColor: theme.ui }}>The Way of Kings</li>
                            <li style={{ backgroundColor: theme.ui }}>The Name of the Wind</li>
                            <li style={{ backgroundColor: theme.ui }}>The Final Empire</li>
                        </ul>
                    </div>
                );
            }}</ThemeContext.Consumer>
        );
    }
}

export default BookList;