import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      // Navigate to the Login screen after the splash screen
      navigation.replace('App'); // Replace 'LogIn' with the actual name of your Login screen
    }, 2000); // Adjust the timeout as needed
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="bounceIn"
        easing="ease-in-out"
        iterationCount="infinite"
        source={require('./assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* <Animatable.Text
        animation="bounceIn"
        easing="ease-in-out"
        iterationCount={1}
        style={styles.text}>
        We make your {'\n'}
        <Text style={{ color: '#03C04A' }}> DREAMS</Text>
        <Text style={{ color: '#800000' }}> PROGRESSIVE</Text>
      </Animatable.Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 500,
    height: 330,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SplashScreen;
