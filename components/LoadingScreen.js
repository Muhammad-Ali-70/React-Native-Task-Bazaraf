import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function LoadingScreen({
  animationSource,
  title,
  email,
  loop = true,
}) {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={require('../assets/Loading2.json')}
        autoPlay
        loop={loop}
        resizeMode="cover"
      />
      <Text style={styles.textStyle}>React Native Maps Assessment</Text>
      <Text style={styles.textStyleMail}>hr@bazaraf.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
  textStyle: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
  },
  textStyleMail: {
    color: 'blue',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
});
