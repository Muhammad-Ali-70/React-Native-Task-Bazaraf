import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function SwitchViewComponent({changeMapType}) {
  return (
    <View style={styles.viewChanger}>
      <Text style={styles.title}>Switch View</Text>

      <TouchableOpacity onPress={() => changeMapType('standard')}>
        <Image source={require('../assets/default.png')} style={styles.view} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeMapType('satellite')}>
        <Image source={require('../assets/Sat.png')} style={styles.view} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeMapType('terrain')}>
        <Image source={require('../assets/ter.png')} style={styles.view} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  view: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
});
