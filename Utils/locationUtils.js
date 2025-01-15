import {PermissionsAndroid, Platform, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import CoordinatesAlert from '../components/CoordinateAlert';

export const requestLocationPermission = async getCurrentLocation => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getCurrentLocation();
      } else {
        Alert.alert(
          'Permission Denied',
          'Location permission is required to show your current location.',
        );
      }
    } catch (err) {
      console.warn(err);
    }
  } else {
    getCurrentLocation();
  }
};

export const getCurrentLocation = setUserlocation => {
  Geolocation.getCurrentPosition(
    position => {
      setUserlocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    },
    error => {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'Unable to retrieve current location.');
    },
  );
};

export const showCoordinates = (source, destination) => {
  CoordinatesAlert({source, destination});
};
