import { View, Text, Button, ScrollView, Pressable, Image } from "react-native";
import React ,{ useContext } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import EventCard from "../components/EventCard";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native'
import { MagnifyingGlassIcon } from "react-native-heroicons/mini";
import { schedulePushNotification } from "../hooks/schedulePushNotification";
import { MapPinIcon } from "react-native-heroicons/outline";
import AuthContext from "../provider/AuthProvider";
import { mockEventData } from "../../assets/mockdata/data";
export default function HomeScreen() {
  const { Token } = useContext(AuthContext);
  console.log(Token);
  const navigation = useNavigation()
  const navigateToEvent = () => {
    navigation.navigate("AllEvent");
  }

  const navigateToInterest = () => {
    navigation.navigate("Interest");
  }
  const eventData = mockEventData;

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
              <Text className="text-5xl text-white font-bold pl-5">
                Event at
              </Text>
              <Text className="text-5xl text-white font-bold pl-5 pt-2">
                Chula.
              </Text>
            </View>
            <View className="mt-16 absolute top-0 right-0 mr-4 p-3 bg-white rounded-full shadow" onPress={navigateToInterest}>
              <Icon name="notifications-outline" size={24} color="black" onPress={navigateToInterest}/>
            </View>
          </View>
          <Pressable onPress={() => navigateToEvent()}>
            <View className="mx-4 h-10 bg-white rounded-3xl flex-row items-center pl-4">
              <Icon name="search" size={24} color="red" className="ml-2" />
              <Text className="text-[#ADADAD] font-bold text-base ml-2">See All Event</Text>
            </View>
          </Pressable>

        </LinearGradient>

        <View className="flex flex-row justify-between">
          <Text className="font-bold text-xl mx-4 mt-6">
            Recommended For You
          </Text>
          <Text className="text-lg items-center mx-4 mt-6 text-red" onPress={() => navigateToEvent()}>
            See All
          </Text>
        </View>
        <ScrollView
          className="flex flex-row ml-4 mt-6"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {eventData.map((event, index) => (
            <EventCard
              props={event}
              key={index}
            />
          ))}
        </ScrollView>
        <View className="flex flex-row justify-between">
          <Text className="font-bold text-xl mx-4 mt-6 mb-6">New Event</Text>
        </View>
        <View className="mx-4 mb-8 space-y-8">
          {eventData.slice(0, 4).map((event) => (
            <Pressable
              onPress={() => navigation.navigate('Event', { ...event })}
            >
              <View className="w-[370px] h-[90px] bg-white flex items-center rounded-2xl flex-row" >
                <Image source={{ uri: event.image_url }}
                  style={{ width: 70, height: 100, borderRadius: 10, marginLeft: 16, marginBottom: 36, }}
                />
                <View className="flex-col justify-center gap-1 mx-5">
                  <Text className="text-[#FF5B61] text-md font-bold">{event.date}</Text>
                  <Text className="text-lg font-bold">{event.name}</Text>
                  <View className="flex-row">
                    <MapPinIcon className="w-4 h-4" color="#ADADAD" />
                    <Text className="text-[#ADADAD] font-extrabold">{event.location}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
