import './PlaceBar.scss';
import { P, Search } from '../../UI';
import { WaklIcon } from '../../UI/icons';
import { placeProps } from '../../store/api/banksApi';
import { ISearchProps } from '../../UI/Seach';

export interface IPlaceBarProps {
  searchProps: ISearchProps;
  placeList: placeProps[];
}

function PlaceBar(props: IPlaceBarProps) {
  const { placeList, searchProps, } = props;

  return (
    <div className='place_bar'>
      <div className='place_bar-search_block'>
        <Search {...searchProps} />
      </div>
      {placeList.length && <div className='place_bar-list'>
        {placeList.map((place, index) =>
          <div key={index} className='place_bar-place'>
            <h2>{place.name}</h2>
            <p className='address'>{place.address}</p>
            <div className="distance">
              <WaklIcon fill="gray" />
              <P variant='sm'>{place.distance} км</P>
            </div>
            <p className='time'>{place.timeCar}</p>
          </div>)}
      </div>}
    </div>
  )
};

export { PlaceBar };
