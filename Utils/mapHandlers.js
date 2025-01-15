import {Alert} from 'react-native';

export const removeSource = setSource => {
  setSource(null);
};

export const removeDestination = setDestination => {
  setDestination(null);
};

export const openModal = (isSource, setIsSettingSource, setModalVisible) => {
  setIsSettingSource(isSource);
  setModalVisible(true);
};

export const OnMapPress = (
  e,
  isChoosingSource,
  setSource,
  setisChoosingSource,
  isChoosingDestination,
  setdestination,
  setisChoosingDestination,
) => {
  const coordinates = e.nativeEvent.coordinate;
  console.log('MapPressCoordinates: ', coordinates);

  if (isChoosingSource) {
    setSource(coordinates);
    setisChoosingSource(false);
  } else if (isChoosingDestination) {
    setdestination(coordinates);
    setisChoosingDestination(false);
  }
};

export const handleSetCoordinates = (
  latitude,
  longitude,
  isSettingSource,
  setSource,
  setdestination,
  setModalVisible,
) => {
  if (latitude && longitude) {
    const newCoordinate = {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    };
    if (isSettingSource) {
      setSource(newCoordinate);
    } else {
      setdestination(newCoordinate);
    }
    setModalVisible(false);
  } else {
    Alert.alert('Error', 'Please enter both latitude and longitude.');
  }
};
