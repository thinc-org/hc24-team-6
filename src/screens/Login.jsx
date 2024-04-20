import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames'; // Import tailwind-react-native-classnames or similar library

export default function SignIn() {
  const handleSignIn = () => {
    // Handle sign-in logic here
    alert('Signing in...');
  };

  const handleSignInWithChula = () => {
    // Handle sign-in with Chula account
    alert('Signing in with Chula account...');
  };

  const handleSignInWithGoogle = () => {
    // Handle sign-in with Google account
    alert('Signing in with Google account...');
  };

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };


  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
    <Text style={[tw`text-3xl font-bold mb-4`, { color: '#000000' }]}>Sign In</Text>

    <View style={tw`mb-4`}>
      <Text style={tw`text-gray-700 mb-2`}>Username</Text>
      <TextInput
        style={tw`h-10 w-64 border border-gray-400 px-4 rounded-xl`}
        placeholder="Enter your username"
        autoCapitalize="none"
      />
    </View>
    
    <View style={tw`mb-4`}>
      <Text style={tw`text-gray-700 mb-2`}>Password</Text>
      <TextInput
        style={tw`h-10 w-64 border border-gray-400 px-4 rounded-xl`}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
    </View>

    <View style={[tw``,{ flexDirection: 'row', alignItems: 'center' }]}>
      <RadioButton.Android
        color="#FD2978"
        value="remember"
        status={checked ? 'checked' : 'unchecked'}
        onPress={handleCheck}
        size={5}
      />
      <Text style={{ marginLeft: 1, fontSize: 12 }}>Remember me</Text>
    </View>

    <TouchableOpacity
      style={[tw`h-10 w-64 rounded-xl items-center justify-center mt-4`, { backgroundColor: '#FD2978' }]}
      onPress={handleSignIn}
    >
      <Text style={tw`text-white font-bold`}>Sign In</Text>
    </TouchableOpacity>

    <Text style={tw`mt-4`}>Or sign in with:</Text>

    <View style={tw`mt-4`}>
      <TouchableOpacity
        style={[tw`h-10 w-64 rounded-xl items-center justify-center`, { backgroundColor: '#FFFFFF' }]}
        onPress={handleSignInWithChula}
      >
        <Text>Chula Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-red-500 rounded px-4 py-2 mt-2 items-center`}
        onPress={handleSignInWithGoogle}
      >
        <Text style={tw`text-white`}>Google Account</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}
