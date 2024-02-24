import reactLogo from './assets/gm.svg';
import viteLogo from '/vite.svg';
import Navbar  from './navbar.jsx';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './App.css';



function App() {
  return (
    <div>
      <Navbar/>
      <h1 className="text-3x1 font-semibold text-center mt-4">Google Maps Example </h1>
      <Map/>
    </div>
  );
};

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const markers = [
  { position: { lat: -3.745, lng: -38.523 }, title: 'Marqueur 1' },
  { position: { lat: -3.755, lng: -38.523 }, title: 'Marqueur 2' },
  { position: { lat: -3.765, lng: -38.523 }, title: 'Marqueur 3' },
];

//Logique de la carte Google Maps 
function Map() {
  const { isLoaded } = useJsApiLoader ({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA4_2dsgP4a6pejNop_Zho88S3xdVRz5BY',
  });

  return isLoaded ? ( //contenu de la carte google maps
    <GoogleMap
      mapContainerStyle = {containerStyle}
      center={center}
      zoom={10}
      >
        {markers.map(marker => (
          <Marker
          key={marker.title}
          position={marker.position}
          title={marker.title}
          />
        ))}
      </GoogleMap>
  ) : <></>;
};

export default App;
