import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import CalendarLogo from "../../assets/bx_calendar.svg";
import LocationLogo from "../../assets/location.svg";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import MapGoogle from "../components/MapGoogle";
import BottomButton from "../components/BottomButton";
export default function EventScreen(props) {
  let event = props.route.params;
  if(event.data) event = event.data;
  return (
    <SafeAreaView className=" w-screen h-screen bg-background">
      <ScrollView>
      <View className="flex-1 items-center space-y-[5%] w-full h-full px-[2%]">
        <View className="w-full aspect-square">
          <View className="absolute z-10 ml-5 mt-5">
            <ArrowLeftCircleIcon
              color="white"
              size = {35}
              onPress={() => props.navigation.goBack()}
            />
          </View>
          <Image
            className="w-full h-full rounded-3xl"
            resizeMethod="resize"
            source={require("../../assets/event.jpeg")}
          />
        </View>
        <View className="bg-white p-3 w-full rounded-xl shadow-md flex flex-row">
          <View className="flex flex-col flex-wrap mt-4">
            <Text className="font-bold text-xl">{event.name}</Text>
            <View className="w-full mt-auto flex flex-row items-center">
              <CalendarLogo />
              <Text className="text-slate-600 text-[14px] ml-2">
                {event.date}
              </Text>
              <View className="ml-5 flex flex-row items-center">
                <LocationLogo />
                <Text className="text-slate-600 text-[14px] ml-2">
                  {event.location}
                </Text>
              </View>
            </View>
          </View>
          <View className="h-[90px] w-[90px] ml-auto bg-slate-200 rounded-2xl items-center">
          {/* #TODO: Implement gradient colors */}
            <Text className="text-gradient-start font-bold text-[26px] text-center mt-4">
              {event.price === 0 ? "FREE" : `$${event.price}`}
            </Text>
            <Text className="mt-auto mb-2 text-center text-slate-800 font-medium">
              {event.size} Seats Available
            </Text>
          </View>
        </View>
        <View className="bg-white p-3 w-full rounded-xl shadow-md flex  space-y-2">
          <Text className="font-semibold text-xl">About Event</Text>
          <Text className="text-slate-600 text-sm">
            {event.description}
          </Text>
          <Text className="font-semibold text-xl">Location</Text>
          <View className="w-full aspect-square">
              <MapGoogle
                latitude={event.latitude}
                longitude={event.longitude}
                title={event.location}
              />
            </View>
        </View>
        <View style={{ marginBottom: 50 }}></View>
      </View>
      </ScrollView>
      <BottomButton/>
    </SafeAreaView>
  );
}
