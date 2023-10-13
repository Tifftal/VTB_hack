import './PlaceBar.scss';
import { P } from '../../UI/P/P';
import { WaklIcon } from '../../UI/icons';
import { bankProps } from '../../store/api/banksApi';

export interface placeBarProps {
  placeList: bankProps[];
  active: boolean;
  setActive: () => void;
}

function PlaceBar(props: placeBarProps) {
  const { placeList, active, setActive, } = props;

  return (
    <div className='place_bar'>
      <div className='place_bar-search_block'>Search</div>
      <div className='place_bar-list'>
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
      </div>
    </div>
  )
};

export { PlaceBar };
