import { useState } from 'react';
import SearchForm from './SearchForm';
import SearchChild from './SearchChild';

const SearchParent = () => {
    const [text, setText] = useState('');
    const handleSearch = e => {
        e.preventDefault();
        setText(e.target.search.value);
    }
    return (
        <div>
            <SearchForm handleSearch={handleSearch} />
            <SearchChild text={text} />

        </div>
    );
}

export default SearchParent;