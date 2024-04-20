import { View, Text, Button, ScrollView, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import EventCard from "../components/EventCard";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeAdminScreen({ navigation }) {
  const eventData = [
    {
      id: 1,
      date: "15 Feb 2020",
      name: "Chula Engineering Fair",
      location: "ตึก 100 ปี วิศวะ",
      imageSource: require("../../assets/event.jpeg"),
    },
    {
      id: 2,
      date: "20 Mar 2020",
      name: "Science Exhibition",
      location: "ห้องประชุมสุรศักดิ์",
      imageSource: require("../../assets/event.jpeg"),
    },
    {
      id: 3,
      date: "10 Apr 2020",
      name: "Art Festival",
      location: "สนามกีฬา",
      imageSource: require("../../assets/event.jpeg"),
    },
  ];

  return (
    <View className="flex flex-col w-screen h-screen bg-background">
      <ScrollView className="">
        <LinearGradient
          colors={["#FD297B", "#FF5864", "#FF655B"]}
          start={{ x: 0, y: 0 }}
          locations={[0, 0.6, 1]}
          end={{ x: 1, y: 0 }}
          className="h-72 w-full rounded-3xl flex-col justify-between pb-4"
        >
          <View className="flex flex-row justify-between">
            <View className="mt-16">
              <Text className="text-5xl text-white font-bold pl-5">Manage</Text>
              <Text className="text-5xl text-white font-bold pl-5 pt-2">
                Your Event
              </Text>
            </View>
          </View>
          <View className="mx-4 mb-5 flex flex-row items-center">
            <View className="w-10 h-10 items-center flex justify-center bg-white rounded-full mr-4">
              <Button
                title="+"
                onPress={() => navigation.navigate("Detail")}
                color="black"
              />
            </View>
            <Text className="text-white text-2xl font-bold">
              Add Your Event
            </Text>
          </View>
        </LinearGradient>

        <View className="mx-4 flex flex-col">
          <Text className="font-bold text-xl mt-6">Overview</Text>
          <View className="flex flex-row gap-3 mt-3 w-full">
            <View className="bg-white shadow w-36 h-24 rounded-xl p-4">
              <View className="flex flex-row">
                <Image source={require("../../assets/boost.png")} />
                <Text className="ml-4 text-3xl font-bold">125</Text>
              </View>
              <Text className="mt-3 text-gray-500 text-center">
                Event Created
              </Text>
            </View>
            <View className="bg-white shadow w-52 h-24 rounded-xl p-4">
              <View className="flex flex-row">
                <Image source={require("../../assets/people.png")} />
                <Text className="ml-4 text-3xl font-bold">12500</Text>
              </View>
              <Text className="mt-3 text-gray-500 text-center">
                People Joined Your Event
              </Text>
            </View>
          </View>
        </View>

        <View className="flex flex-row justify-between">
          <Text className="font-bold text-xl mx-4 mt-6">Your Event</Text>
          <Text className="text-lg items-center mx-4 mt-6 text-red">
            See All
          </Text>
        </View>
        <ScrollView
          className="flex flex-row ml-4 mt-6"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {eventData.map((event) => (
            <EventCard
              key={event.id}
              date={event.date}
              name={event.name}
              location={event.location}
              imageSource={event.imageSource}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
