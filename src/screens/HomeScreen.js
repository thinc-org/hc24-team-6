import { View, Text, Button } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
  return (
    <View className="flex flex-row justify-center w-screen h-screen">
      <View className="bg-red-500 h-1/3 w-full rounded-3xl flex-col justify-between pb-4">
        <View className="flex flex-row justify-between">
          <View className="mt-16">
            <Text className="text-5xl text-white font-bold pl-5">
              Event at
            </Text>
            <Text className="text-5xl text-white font-bold pl-5 pt-2">
              Chula.
            </Text>
          </View>
          <View className="mt-16 absolute top-0 right-0 mr-4 p-3 bg-white rounded-full shadow">
          <Icon name="notifications-outline" size={24} color="black" />
        </View>
        </View>
        <View className="mx-4 h-10 bg-white rounded-3xl">
          <Button title="Search" onPress={() => navigation.navigate("Event")} />
        </View>
      </View>
    </View>
  );
}
