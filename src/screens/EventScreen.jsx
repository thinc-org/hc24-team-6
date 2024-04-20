import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import CalendarLogo from "../../assets/bx_calendar.svg";
import LocationLogo from "../../assets/location.svg";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import MapGoogle from "../components/MapGoogle";

export default function EventScreen() {
  const eventDetails = {
    title: "งานกินเลี้ยงจิบน้ำชา",
    start_date: "2024-07-01T00:00:00Z",
    location: "บ้านนายเอก",
    description:
    "งานกินเลี้ยงจิบน้ำชา จัดขึ้นเพื่อเป็นการเชิญเพื่อนๆมาเลี้ยงจิบน้ำชา และเพื่อเป็นการเปิดเทอม 2 ของเราโดยจะมีการจัดกิจกรรมต่างๆให้เพื่อนๆได้ร่วมสนุกและมีของรางวัลให้กับผู้ที่ชนะในการแข่งขัน ห้ามพลาดนะครับ",
    price: 0,
    seat_available: 100,
    latitude: 13.736549,
    longitude: 100.53393,
    image_url: "https://source.unsplash.com/1600x900/?event",
  };
  const date = new Date(eventDetails.start_date);
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <SafeAreaView className=" w-screen h-screen bg-background">
      <ScrollView>
        <View className="flex-1 items-center space-y-[5%] w-full h-full px-[4%]">
          <View className="w-full aspect-square">
            <Image
              className="w-full h-full rounded-3xl"
              resizeMethod="resize"
              source={{ uri: eventDetails.image_url }}
            />
          </View>
          <View className="bg-white p-3 w-full rounded-2xl shadow-md flex flex-row">
            <View className="flex flex-col flex-wrap mt-4">
              <Text className="font-bold text-[16px]">
                {eventDetails.title}
              </Text>
              <View className="w-full mt-auto flex flex-row items-center">
                <CalendarLogo />
                <Text className="text-slate-600 text-[10px] ml-2">
                  {formattedDate}
                </Text>
                <View className="ml-5 flex flex-row items-center">
                  <LocationLogo />
                  <Text className="text-slate-00 text-[10px] ml-2">
                    {eventDetails.location}
                  </Text>
                </View>
              </View>
            </View>
            <View className="h-[90px] w-[90px] ml-auto bg-slate-200 rounded-2xl items-center">
              <MaskedView
                maskElement={
                  <Text className="font-bold text-[20px] mt-4 text-center">
                    {eventDetails.price === 0 ? "FREE" : eventDetails.price}
                  </Text>
                }
              >
                <LinearGradient
                  colors={["#FD297B", "#FF5864", "#FF655B"]}
                  start={{ x: 0, y: 0 }}
                  locations={[0, 0.5, 1]}
                  end={{ x: 1, y: 0 }}
                >
                  <Text className="font-bold text-[20px] mt-4 text-center opacity-0">
                    FREE
                  </Text>
                </LinearGradient>
              </MaskedView>
              <Text className="mt-auto mb-2 text-center text-slate-800 font-medium text-[12px]">
                {eventDetails.seat_available} Seats Available
              </Text>
            </View>
          </View>
          <View className="bg-white p-6 w-full rounded-2xl shadow-md flex space-y-2">
            <Text className="font-semibold text-[16px]">About Event</Text>
            <Text className="text-slate-600 text-[12px]">
              {eventDetails.description}
            </Text>
            <Text className="font-semibold text-[16px]">Location</Text>
            <View className="w-full aspect-square">
              <MapGoogle
                latitude={eventDetails.latitude}
                longitude={eventDetails.longitude}
                title={eventDetails.location}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
