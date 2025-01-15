import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import LoadingScreen from './components/LoadingScreen';
import CustomMapView from './components/CustomMapView';
import SwitchViewComponent from './components/SwitchViewComponent';
import ButtonContainer from './components/ButtonContainer';
import ModalComponent from './components/ModalComponent';
import {
  getCurrentLocation,
  requestLocationPermission,
  showCoordinates,
} from './Utils/locationUtils';
import {
  handleSetCoordinates,
  OnMapPress,
  openModal,
  removeDestination,
  removeSource,
} from './Utils/mapHandlers';
import {useTimer} from './hooks/useTimer';

export default function App() {
  const [Userlocation, setUserlocation] = useState(null);

  const [source, setSource] = useState(null);
  const [destination, setdestination] = useState(null);
  const [isChoosingSource, setisChoosingSource] = useState(false);
  const [isChoosingDestination, setisChoosingDestination] = useState(false);

  const [loop, setLoop] = useState(true);

  const [mapType, setMapType] = useState('standard');

  const [modalVisible, setModalVisible] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isSettingSource, setIsSettingSource] = useState(false);

  const changeMapType = type => {
    setMapType(type);
  };

  const OnMapPressHandler = e => {
    OnMapPress(
      e,
      isChoosingSource,
      setSource,
      setisChoosingSource,
      isChoosingDestination,
      setdestination,
      setisChoosingDestination,
    );
  };

  const handleCoordinates = () => {
    handleSetCoordinates(
      latitude,
      longitude,
      isSettingSource,
      setSource,
      setdestination,
      setModalVisible,
    );
  };

  useTimer(setLoop);

  useEffect(() => {
    requestLocationPermission(() => getCurrentLocation(setUserlocation));
  }, []);

  return (
    <>
      {loop ? (
        <LoadingScreen />
      ) : (
        <View style={styles.container}>
          <CustomMapView
            userLocation={Userlocation}
            source={source}
            destination={destination}
            mapType={mapType}
            onMapPress={OnMapPressHandler}
            setSource={setSource}
            setDestination={setdestination}
          />

          <SwitchViewComponent changeMapType={changeMapType} />

          <ButtonContainer
            source={source}
            destination={destination}
            isChoosingSource={isChoosingSource}
            isChoosingDestination={isChoosingDestination}
            openModal={() => {
              openModal(true, setIsSettingSource, setModalVisible);
            }}
            setisChoosingSource={setisChoosingSource}
            setisChoosingDestination={setisChoosingDestination}
            removeSource={() => {
              removeSource(setSource);
            }}
            removeDestination={() => {
              removeDestination(setdestination);
            }}
            showCoordinates={() => {
              showCoordinates(source, destination);
            }}
          />

          <ModalComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            latitude={latitude}
            setLatitude={setLatitude}
            longitude={longitude}
            setLongitude={setLongitude}
            handleSetCoordinates={handleCoordinates}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
