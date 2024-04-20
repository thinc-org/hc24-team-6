import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegisterButton from './RegisterButton';
import HeartButton from './HeartButton';

const BottomButtons = () => {
  const handleRegisterPress = () => {
    // pop up register success
  };

  const handleHeartPress = () => {

  };

  return (
    <View style={styles.container}>
      <RegisterButton onPress={handleRegisterPress} />
      <HeartButton onPress={handleHeartPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white'
  },
});

export default BottomButtons;