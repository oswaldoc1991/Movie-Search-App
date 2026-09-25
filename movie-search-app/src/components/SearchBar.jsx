import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // alert('Button was clicked!');
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
        <div>
            <input 
                type="text"
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            <button onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;