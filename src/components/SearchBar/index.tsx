import './index.scss';
import { Filter } from '../Filters';
import { FC, useState } from 'react';
import { getBranchBySearch } from '../../store/axiosCore/map';
import { useDispatch, useSelector } from '../../store/store';
import { changeIsShowAtm, saveBranches, selectIsShowAtm } from '../../store/slices/pointsSlise';
import Transport from '../TypeTransport';

export interface ISearchBarProps {



}

const SearchBar: FC<ISearchBarProps> = () => {
    const showAtm = useSelector(selectIsShowAtm);
    const [isContentVisible, setIsContentVisible] = useState(true);
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState("");

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            getBranchBySearch(e, searchText)
                .then((points) => {
                    dispatch(saveBranches(points));
                })
                .catch((error) => console.error(error));
        }
    };

    const toggleContentVisibility = () => {
        setIsContentVisible((prev) => !prev);
    };

    const handleShowAtmChange = () => {
        dispatch(changeIsShowAtm(!showAtm));
    }

    return (
        <div className="search-bar">
            <form className="search">
                <input
                    className='search-input'
                    type="text"
                    placeholder="Поиск"
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </form>
            {isContentVisible && (
                <>
                    <div>
                        <Filter setShowAtm={handleShowAtmChange} showAtm={showAtm} />
                    </div>
                </>
            )}

            <button className='drop-down' onClick={toggleContentVisibility}>
                {isContentVisible ? <img src='../icons8-стрелка-100-2.png' /> : <img src='../icons8-стрелка-100.png' />}
            </button>


        </div>
    );
};

export default SearchBar;
