import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({widthProp, TextProp, OnPressEvent}) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, {width: widthProp}]}
      onPress={OnPressEvent}>
      <Text style={styles.buttonText}>{TextProp}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'green',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    marginVertical: 4,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
});
