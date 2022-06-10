import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>Uncle BKeys Library</h1>
            <p>
                Currently, you have {books.length} book
                {books.length > 1 && 's'} in your library...
            </p>
        </div>
    );
};

export default Navbar;
