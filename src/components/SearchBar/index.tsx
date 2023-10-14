import './index.scss';
import Filter from '../Filters';
import { useState } from 'react';
import { api } from '../../store/axiosCore/api';

const SearchBar = () => {

    const [query, setQuery] = useState("");

    const sendQuery = async (e: any) => {
        e.preventDefault();
        try {
            const response = await api.get(`/api/branches/get-branch-by-search/${query}`);
            console.log(response)
        } catch (error) {
            console.log(error);
        }
        console.log(query);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendQuery(e);
        }
    };

    return (
        <div className="search-bar">
            <form className="search">
                <input
                    className='search-input'
                    type="text"
                    placeholder="Поиск"
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </form>
            <div>
                <Filter />
            </div>
        </div>
    );
};

export default SearchBar;
