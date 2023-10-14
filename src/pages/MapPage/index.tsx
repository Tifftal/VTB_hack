import './index.scss'
import { PlaceBar } from '../../components/PlaceBar';
import { useMapPage } from './useMapPage';
import SearchBar from '../../components/SearchBar';

function MapPage() {
  const { placeBarProps } = useMapPage();

  return (
    <div className="MainPage">
      <SearchBar />
      <PlaceBar {...placeBarProps} />
    </div>
  )

}

export { MapPage };