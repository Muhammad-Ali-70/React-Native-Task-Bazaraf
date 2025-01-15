import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from './CustomButton';

export default function ButtonContainer({
  source,
  destination,
  isChoosingSource,
  isChoosingDestination,
  openModal,
  setisChoosingSource,
  setisChoosingDestination,
  removeSource,
  removeDestination,
  showCoordinates,
}) {
  return (
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
            TextProp={'Remove Source'}
            OnPressEvent={removeSource}
          />
        ) : (
          <CustomButton
            TextProp={
              isChoosingSource ? 'Please Choose Source' : 'Choose Source'
            }
            OnPressEvent={() => setisChoosingSource(true)}
          />
        )}
        {destination ? (
          <CustomButton
            TextProp={'Remove Destination'}
            OnPressEvent={removeDestination}
          />
        ) : (
          <CustomButton
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
          widthProp={'94%'}
          TextProp={'Show Coordinates'}
          OnPressEvent={showCoordinates}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 5,
  },
  searchButton: {
    left: 12,
    backgroundColor: 'green',
    width: '12%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  groupButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: '3%',
  },
});
