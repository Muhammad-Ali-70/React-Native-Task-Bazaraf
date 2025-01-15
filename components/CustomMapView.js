import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';

export default function CustomMapView({
  userLocation,
  source,
  destination,
  mapType,
  onMapPress,
  setSource,
  setDestination,
}) {
  return (
    <MapView
      showsUserLocation={true}
      style={styles.map}
      onPress={onMapPress}
      mapType={mapType}
      region={userLocation}>
      {userLocation && (
        <Marker
          coordinate={userLocation}
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
        />
      )}

      {destination && (
        <Marker
          draggable={true}
          onDragEnd={e => setDestination(e.nativeEvent.coordinate)}
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
          strokeWidth={3}
          strokeColor="black"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
