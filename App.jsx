import React, {useEffect, useRef, useState} from 'react';
import MapView, {Polyline} from 'react-native-maps';
import LottieView from 'lottie-react-native';
import {
  PermissionsAndroid,
  Platform,
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import CustomButton from './CustomButton';
import {getDistance} from 'geolib';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [Userlocation, setUserlocation] = useState(null);

  const [source, setSource] = useState(null);
  const [destination, setdestination] = useState(null);
  const [isChoosingSource, setisChoosingSource] = useState(false);
  const [isChoosingDestination, setisChoosingDestination] = useState(false);

  const [loop, setLoop] = useState(true);

  const mapRef = useRef(null);

  const [distance, setdistance] = useState(0);
  const [midPoint, SetmidPoint] = useState(null);

  const [mapType, setMapType] = useState('standard');

  const [modalVisible, setModalVisible] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isSettingSource, setIsSettingSource] = useState(false);

  // Function to Change the Map View Type
  const changeMapType = type => {
    setMapType(type);
  };

  const defaultLocation = {
    latitude: 33.79059,
    longitude: 72.355138,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Function to Get the Coordinates of the Source and Destination and Display in the Alert Box
  const showCoordinates = () => {
    if (source && destination) {
      const distance =
        getDistance(
          {latitude: source.latitude, longitude: source.longitude},
          {latitude: destination.latitude, longitude: destination.longitude},
        ) / 1000;

      const midpointCalculate = distance / 2;

      Alert.alert(
        'Coordinates and Distance',
        `Source: \nLatitude: ${source.latitude.toFixed(
          4,
        )}, Longitude: ${source.longitude.toFixed(
          4,
        )}\n\nDestination: \nLatitude: ${destination.latitude.toFixed(
          4,
        )}, Longitude: ${destination.longitude.toFixed(
          4,
        )}\n\nDistance between source and destination: ${distance.toFixed(
          2,
        )} kilometers\n\n MidPoint between Source & Destination : ${midpointCalculate.toFixed(
          2,
        )} kilometers`,
      );
    } else {
      Alert.alert(
        'Error',
        'Please select both source and destination coordinates.',
      );
    }
  };

  const removeSource = () => {
    setSource(null);
  };

  const removeDestination = () => {
    setdestination(null);
  };

  // Using map as the referece to zoom out for better viewing of both source and destination
  const zoomToMarker = marker => {
    if (mapRef.current && marker) {
      mapRef.current.animateToRegion({
        latitude: marker.latitude,
        longitude: marker.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(position => {
      setUserlocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    });
  };

  // Fucntion to get the current user location (If not then prompt the user)
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Granted');
          getCurrentLocation();
        } else {
          Alert.alert(
            'Permission Denied',
            'Location permission is required to show your current location on the map.',
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      getCurrentLocation();
    }
  };

  // Function to Get the coordinates on where the user presses (That point can be used as source or destination in terms of Lat, Lon)
  const OnMapPress = e => {
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

  const openModal = isSource => {
    setIsSettingSource(isSource);
    setModalVisible(true);
  };

  const handleSetCoordinates = () => {
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

  // UseEffect for Duration of Loading JSON
  useEffect(() => {
    let timer = setTimeout(() => setLoop(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <>
      {loop ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <LottieView
            style={{width: 200, height: '200'}}
            source={require('./assets/Loading2.json')}
            autoPlay={true}
            loop={loop}
            resizeMode="cover"
          />
          <Text style={styles.textStyle}>React Native Maps Assessment</Text>
          <Text style={styles.textStyleMail}>hr@bazaraf.com</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <MapView
            ref={mapRef}
            showsUserLocation={true}
            style={styles.map}
            onPress={OnMapPress}
            mapType={mapType}
            region={Userlocation}>
            {Userlocation && (
              <Marker
                coordinate={Userlocation}
                title={'User Location Marker'}
                onPress={data => {
                  console.log(data.nativeEvent.coordinate);
                }}
              />
            )}

            {source && (
              <Marker
                draggable={true}
                onDragEnd={e => setSource(e.nativeEvent.coordinate)}
                coordinate={source}
                title={`Source: ${source.latitude.toFixed(
                  4,
                )}, ${source.longitude.toFixed(4)}`}
                pinColor="green"
                onPress={zoomToMarker(source)}
              />
            )}
            {destination && (
              <Marker
                onPress={zoomToMarker(destination)}
                draggable={true}
                onDragEnd={e => setdestination(e.nativeEvent.coordinate)}
                coordinate={destination}
                title={`Destination: ${destination.latitude.toFixed(
                  4,
                )}, ${destination.longitude.toFixed(4)}`}
                pinColor="blue"
              />
            )}

            {destination && (
              <Polyline
                coordinates={[source, destination]}
                strokeWidth={4}
                strokeColor="black"
              />
            )}
          </MapView>

          {/* Changes the View Type to Standard, Satellite or Terrain */}
          <View style={styles.viewChanger}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                fontFamily: 'Poppins-Bold',
              }}>
              Switch View
            </Text>
            <TouchableOpacity onPress={() => changeMapType('standard')}>
              <Image
                source={require('./assets/default.png')}
                style={styles.view}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => changeMapType('satellite')}>
              <Image source={require('./assets/Sat.png')} style={styles.view} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => changeMapType('terrain')}>
              <Image source={require('./assets/ter.png')} style={styles.view} />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.searchButton}>
              <Icon
                name="search"
                size={30}
                color="white"
                onPress={() => openModal(true)}
              />
            </TouchableOpacity>

            <View style={styles.groupButtonContainer}>
              {source ? (
                <CustomButton
                  widthProp={'45%'}
                  TextProp={'Remove Source'}
                  OnPressEvent={removeSource}
                />
              ) : (
                <CustomButton
                  widthProp={'45%'}
                  TextProp={
                    isChoosingSource ? 'Please Choose Source' : 'Choose Source'
                  }
                  OnPressEvent={() => setisChoosingSource(true)}
                />
              )}

              {destination ? (
                <CustomButton
                  widthProp={'45%'}
                  TextProp={'Remove Destination'}
                  OnPressEvent={removeDestination}
                />
              ) : (
                <CustomButton
                  widthProp={'45%'}
                  TextProp={
                    isChoosingDestination
                      ? 'Please Choose Dest?'
                      : 'Choose Destination'
                  }
                  OnPressEvent={() => setisChoosingDestination(true)}
                />
              )}
            </View>

            <View style={{alignItems: 'center'}}>
              <CustomButton
                widthProp={'93%'}
                TextProp={'Show Coordinates'}
                OnPressEvent={showCoordinates}
              />
            </View>
          </View>

          {/* A modal to input Latitude and Longitude Manually for Precisin  */}
          <Modal
            visible={modalVisible}
            animationType="slide"
            onRequestClose={() => setIsModalVisible(false)}
            transparent={true} // To add a backdrop effect
          >
            <View style={styles.modalBackdrop}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Latitude</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Latitude"
                  keyboardType="numeric"
                  value={latitude}
                  onChangeText={setLatitude}
                />
                <Text style={styles.modalText}>Longitude</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Longitude"
                  keyboardType="numeric"
                  value={longitude}
                  onChangeText={setLongitude}
                />
                <View style={styles.modalButtons}>
                  <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleSetCoordinates}>
                    <Text style={styles.buttonText}>Set Coordinates</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
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
  map: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 5,
  },
  groupButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  textStyleMail: {
    color: 'blue',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  viewChanger: {
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 12,
    left: 15,
    width: '75%',
    borderRadius: 8,
    borderColor: 'green',
    borderWidth: 3,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  view: {
    height: 42,
    width: 42,
  },
  searchButton: {
    left: 10,
    backgroundColor: 'green',
    width: '12%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 230,
    width: 260,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    width: 210,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  buttonText: {
    color: 'green',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: 'Poppins-Bold',
  },
  modalText: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginBottom: 1,
  },
});
