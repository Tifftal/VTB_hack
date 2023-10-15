import './index.scss'
import { PlaceBar } from '../../components/PlaceBar';
import { useMapPage } from './useMapPage';
import SearchBar from '../../components/SearchBar';
import MapWindow from '../../components/map';
import { CardInfo } from '../../components/CardInfo';

function MapPage() {
  const { placeBarProps } = useMapPage();

  return (
    <div className="MainPage">
      <div className='test'>
        <SearchBar />
        <CardInfo />
      </div>
      <PlaceBar />
      <MapWindow />
    </div>
  )

}

export { MapPage };