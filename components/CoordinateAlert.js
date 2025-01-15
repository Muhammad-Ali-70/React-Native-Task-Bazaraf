// /components/CoordinatesAlert.js
import {getDistance} from 'geolib';
import {Alert} from 'react-native';

const CoordinatesAlert = ({source, destination}) => {
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
      )}, \nLongitude: ${source.longitude.toFixed(
        4,
      )}\n\nDestination: \nLatitude: ${destination.latitude.toFixed(
        4,
      )},\nLongitude: ${destination.longitude.toFixed(
        4,
      )}\n\nDistance: ${distance.toFixed(
        2,
      )} kilometers\n\nMidPoint: ${midpointCalculate.toFixed(2)} kilometers`,
    );
  } else {
    Alert.alert(
      'Error',
      'Please select both source and destination coordinates.',
    );
  }
};

export default CoordinatesAlert;
