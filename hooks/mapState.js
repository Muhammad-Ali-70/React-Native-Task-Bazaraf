import {useState} from 'react';

const useMapState = () => {
  const [Userlocation, setUserlocation] = useState(null);
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [isChoosingSource, setIsChoosingSource] = useState(false);
  const [isChoosingDestination, setIsChoosingDestination] = useState(false);

  return {
    Userlocation,
    setUserlocation,
    source,
    setSource,
    destination,
    setDestination,
    isChoosingSource,
    setIsChoosingSource,
    isChoosingDestination,
    setIsChoosingDestination,
  };
};

export default useMapState;
