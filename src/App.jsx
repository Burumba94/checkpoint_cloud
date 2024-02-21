import { useState } from 'react';
import Navbar  from './navbar.jsx';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'tailwindcss/tailwind.css'; //import du tailwind css
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './App.css';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const { isLoaded } = useJsApiLoader ({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAxkC-LZ4ZVaTVxCok278D-D6X-RiJbF1o',
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle = {containerStyle}
      center={center}
      zoom={10}
      ></GoogleMap>
  ) : <></>;
}

function App() {
  return (
    <div>
      <Navbar/>
      <h1 className="text-3x1 font-semibold text-center mt-4">Google Maps Example </h1>
      <Map/>
    </div>
  );
};

export default App;
