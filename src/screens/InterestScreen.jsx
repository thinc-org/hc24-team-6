import { View, Text, ScrollView, Button } from "react-native";
import React from "react";
import InterestCard from "../components/InterestCard";
import { useNavigation } from "@react-navigation/native";

const InterestScreen = () => {
  const navigation = useNavigation();
  const mockData = [
    { iconName: "heart-outline", text: "Interest 1" },
    { iconName: "star-outline", text: "Interest 2" },
    { iconName: "bookmark-outline", text: "Interest 3" },
    { iconName: "heart-outline", text: "Interest 1" },
    { iconName: "star-outline", text: "Interest 2" },
    { iconName: "bookmark-outline", text: "Interest 3" },
    { iconName: "heart-outline", text: "Interest 1" },
    { iconName: "star-outline", text: "Interest 2" },
    { iconName: "bookmark-outline", text: "Interest 3" },
    { iconName: "heart-outline", text: "Interest 1" },
  ];

  return (
    <View className="flex flex-col w-screen h-screen bg-background">
      <View className="bg-white w-full h-40 shadow-md rounded-2xl">
        <Text className="mx-4 mt-16 text-red text-3xl font-bold">
          Select Your Interest
        </Text>
        <Text className="mx-4 mt-4">Please select event interest.</Text>
      </View>

      <ScrollView className="pt-4 w-full">
        <View className="flex flex-row flex-wrap justify-center items-center pb-6">
          {mockData.map((data, index) => (
            <InterestCard
              key={index}
              iconName={data.iconName}
              text={data.text}
            />
          ))}
        </View>
      </ScrollView>

      <View className="bg-white w-full h-28 shadow-md rounded-2xl flex justify-center items-center">
        <View className="bg-red mx-4 text-white rounded-2xl w-2/3">
          <Button
            title="Submit"
            onPress={() => navigation.navigate("Home")}
            color="white"
          />
        </View>
      </View>
    </View>
  );
};

export default InterestScreen;
