import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// class Navbar extends Component {

//     render() {

//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isAuthenticated, toggleAuth } = authContext;
//                     const { isLightTheme, light, dark } = themeContext;
//                     const theme = isLightTheme ? light : dark;

//                     return (
//                         <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
//                             <h1>
//                                 <span>Context App</span>
//                                 <button id='login-button'
//                                     onClick={toggleAuth}
//                                     style={{ backgroundColor: theme.syntax, color: theme.ui }}
//                                 >
//                                     {isAuthenticated ? 'Logout' : 'Login'}
//                                 </button>
//                             </h1>
//                             {isAuthenticated &&
//                                 <ul>
//                                     <li>Home</li>
//                                     <li>About</li>
//                                     <li>Contact</li>
//                                 </ul>
//                             }
//                         </nav>
//                     );
//                 }}
//                 </ThemeContext.Consumer>
//             )}
//             </AuthContext.Consumer>
            
//         );
//     }
// }

const Navbar = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
            <h1>
                <span>Context App</span>
                <button id='login-button'
                    onClick={toggleAuth}
                    style={{ backgroundColor: theme.syntax, color: theme.ui }}
                >
                    {isAuthenticated ? 'Logout' : 'Login'}
                </button>
            </h1>
            {isAuthenticated &&
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            }
        </nav>
    );
};

export default Navbar;