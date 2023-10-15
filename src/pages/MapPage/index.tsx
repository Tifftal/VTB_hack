import './index.scss'
import { PlaceBar } from '../../components/PlaceBar';
import { useMapPage } from './useMapPage';
import SearchBar from '../../components/SearchBar';
import MapWindow from '../../components/map';

function MapPage() {
  const { placeBarProps } = useMapPage();

  return (
    <div className="MainPage">
      <SearchBar />
      <MapWindow/>
      <PlaceBar />

    </div>
  )

}

export { MapPage };