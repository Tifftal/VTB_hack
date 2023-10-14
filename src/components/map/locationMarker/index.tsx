import React from 'react';
import { LatLng } from 'leaflet';
import { Marker, useMapEvents } from 'react-leaflet';

export type LocationMarkerProps = {
  location: LatLng | null;
  setLocation: (location: LatLng | null) => void;
};

export const LocationMarker: React.FC<LocationMarkerProps> = ({
  location,
  setLocation,
}) => {
  const map = useMapEvents({
    locationfound: (e) => {
      setLocation(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  React.useEffect(() => {
    if (!location) {
      map.locate();
    }
  }, [location, map]);

  return location === null ? null : <Marker position={location} />;
};
