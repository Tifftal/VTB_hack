import { Marker } from 'react-leaflet';
import { iconMarker, bankMarker, atmMarker } from './markers';

export type MapMarkerProps = {
    position: [number, number];
    type: 'atm' | 'bank' | 'default';
    onClick?: () => void;
};

export const MapMarker: React.FC<MapMarkerProps> = ({
    position,
    onClick,
    type,
}) => {
    return (
        <Marker
            position={position}
            icon={
                type === 'atm'
                  ? atmMarker
                  : type === 'bank'
                  ? bankMarker
                  : iconMarker
              }
            eventHandlers={{
                click: onClick,
            }}
        />
    );
};
