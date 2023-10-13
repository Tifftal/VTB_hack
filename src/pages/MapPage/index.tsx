import './index.scss'
import { PlaceBar } from '../../components/PlaceBar';
import { useMapPage } from './useMapPage';

function MapPage() {
  const { placeBarProps } = useMapPage();

  return (
    <div className="MainPage">
      <h1>Main</h1>
      <PlaceBar {...placeBarProps} />
    </div>
  )

}

export { MapPage };