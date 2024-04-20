import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const RegisterButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <LinearGradient 
        colors={["#FD297B", "#FF5864", "#FF655B"]}
        start={{ x: 0, y: 0 }}
        locations={[0, 0.6, 1]}
        end={{ x: 1, y: 0 }}
        style={{width: '100%', height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}
      >
          <Text style={styles.buttonText}>Register</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 20,
    marginRight: 5,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterButton;