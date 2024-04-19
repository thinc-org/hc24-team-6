import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";

export default function EventScreen() {
  return (
    <SafeAreaView className=" w-screen h-screen bg-background">
      <View className="flex-1 items-center space-y-[5%] w-full h-full px-[2%]">
        <View className="w-full aspect-square">
          <Image
            className="w-full h-full rounded-3xl"
            resizeMethod="resize"
            source={require("../assets/event.jpeg")}
          />
        </View>
        <View className="bg-white p-3 w-full rounded-xl shadow-md flex flex-row">
          <View className="flex flex-col flex-wrap mt-4">
            <Text className="font-semibold text-[16px]">
              งานกินเลี้ยงจิบน้ำชา
            </Text>
            <View className="w-full mt-auto flex flex-col">

              <Text className="text-slate-600 text-[10px]">
                17 May 2023
              </Text>
            </View>
          </View>
          <View className="h-20 w-20 ml-auto">
            <Image
              className="w-full h-full rounded-xl"
              source={require("../assets/event.jpeg")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
