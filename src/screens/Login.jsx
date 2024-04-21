import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../provider/AuthProvider";
import { decode as atob } from 'base-64';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleSignInClick = () => {
    navigation.navigate("Register"); 
  };
  const { setToken } = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      const response = await fetch('https://cunext-event-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: username,
          password: password
        })
      });
      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;
        setToken(token);
        console.log(token);
  
        // Decode the token
        const parts = token.split('.');
      const decodedPayload = JSON.parse(atob(parts[1]));

  
        // Extract the role data from the decoded token
        const role = decodedPayload.role;
        console.log('User Role:', role);
        if (role === 'admin') {
          navigation.navigate("AdminHome");
        } else {
          navigation.navigate("Home");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInWithChula = () => {
    alert("Signing in with Chula account...");
  };

  const handleSignInWithGoogle = () => {
    alert("Signing in with Google account...");
  };

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <View style={tw`flex-1 justify-center items-center p-4 bg-white`}>
      <Text style={[tw`text-4xl font-bold mb-4`, { color: "#000000" }]}>
        Sign In
      </Text>
      <Text className="text-gray-500 mb-10">Please sign-in to continue</Text>

      <View>
        <View style={tw`mb-4`}>
          <Text style={tw`text-gray-700 mb-2 font-semibold`}>Username</Text>
          <TextInput
            className="h-10 w-72 border border-gray-400 px-4 rounded-xl"
            placeholder="Enter your username"
            autoCapitalize="none"
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={tw`mb-4`}>
          <Text style={tw`text-gray-700 mb-2 font-semibold`}>Password</Text>
          <TextInput
            style={tw`h-10 w-72 border border-gray-400 px-4 rounded-xl`}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View className="flex flex-row items-center justify-start">
          <RadioButton.Android
            color="#FD2978"
            value="remember"
            status={checked ? "checked" : "unchecked"}
            onPress={handleCheck}
            size={5}
          />
          <Text style={{ marginLeft: 1, fontSize: 12 }}>Remember me</Text>
        </View>
      </View>

      <LinearGradient
        colors={["#FD297B", "#FF5864", "#FF655B"]}
        start={{ x: 0, y: 0 }}
        locations={[0, 0.6, 1]}
        end={{ x: 1, y: 0 }}
        className="h-10 w-72 rounded-3xl items-center justify-center mt-4"
      >
        <Text style={tw`text-white font-bold`} onPress={handleSignIn}>Sign In</Text>
      </LinearGradient>

      <View className="flex flex-row items-center">
        <Text className="mt-4 text-gray-400">ALREADY HAVE AN ACCOUNT?</Text>
        <TouchableOpacity onPress={handleSignInClick}>
          <Text className="mt-4 text-red">SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-8 flex flex-row justify-between items-center">
        <View className="bg-gray-500 h-[0.5px] w-full"></View>
        <Text className="text-gray-500 p-4">Or</Text>
        <View className="bg-gray-500 h-[0.5px] w-full"></View>
      </View>

      <View className="mt-3">
        <View className="px-3 h-10 w-72 rounded-3xl flex justify-center items-center text-white bg-white border border-gray-300 flex-row">
          <Image source={require("../../assets/chula.png")} />
          <Text className="pl-2 text-gray-500">Sign Up with Chula Account</Text>
        </View>
        <View className="px-3 h-10 w-72 rounded-3xl flex justify-center mt-5 items-center text-white bg-white border border-gray-300 flex-row">
          <Image source={require("../../assets/google.png")} />
          <Text className="pl-2 text-gray-500">
            Sign Up with Google Account
          </Text>
        </View>
      </View>
    </View>
  );
}
