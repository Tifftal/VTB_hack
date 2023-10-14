import React, { useEffect, useState } from 'react';
import { IBranch, useGetBranchesQuery } from '../../store/api/searchApi';
import './index.scss';
import Filter from '../Filters';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { data: branches, error } = useGetBranchesQuery({ query: searchTerm });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const timerId = setTimeout(() => { }, 500);
        console.log(error);

        return () => clearTimeout(timerId);
    }, [searchTerm]);

    return (
        <div className="search-bar">
            <form className="search">
                <input
                    type="text"
                    placeholder="Поиск"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </form>
            {/* <Filter /> */}

            {branches === undefined && <p>Loading...</p>}

            {error && (
                <p>Error: {typeof error === 'string' ? error : "error"}</p>
            )}

            {branches && branches.length > 0 && (
                <div>
                    <h2>Search Results</h2>
                    <ul>
                        {branches.map((branch: IBranch) => (
                            <li key={branch.id}>
                                {branch.salePointName}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {branches && branches.length === 0 && <p>No results found.</p>}
        </div>
    );
};

export default SearchBar;
