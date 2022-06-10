import { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const capitalize = (words) => {
        return words.split(' ').map(word => {
            return word[0].toUpperCase() + word.substring(1).toLowerCase();
        }).join(' ');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_BOOK', book: {
                title: capitalize(title), author: capitalize(author)
            }
        });
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Book Title' required
            />
            <input type='text' value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder='Book Author' required
            />
            <input type='submit' value='Add Book' />
        </form>
    );
};

export default NewBookForm;