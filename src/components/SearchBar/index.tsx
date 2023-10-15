import './index.scss';
import { Filter } from '../Filters';
import { FC, useState } from 'react';
import { getBranchBySearch } from '../../store/axiosCore/map';
import { useDispatch, useSelector } from '../../store/store';
import { changeIsShowAtm, saveBranches, selectIsShowAtm } from '../../store/slices/pointsSlise';

export interface ISearchBarProps {

}

const SearchBar: FC<ISearchBarProps> = () => {
  const showAtm = useSelector(selectIsShowAtm);
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
      <div>
        <Filter setShowAtm={handleShowAtmChange} showAtm={showAtm} />
      </div>
    </div>
  );
};

export default SearchBar;
