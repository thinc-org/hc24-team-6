import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [priceEntry, setPriceEntry] = useState("");
  const [maxAttendee, setMaxAttendee] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  return (
    <View className="w-screen h-screen bg-background">
      <ScrollView className="">
        <View className="flex-1 items-center space-y-[5%] w-full h-full px-[2%]">
          <View className="w-full aspect-square mt-16">
            <Image
              className="w-full h-full rounded-3xl bg-white"
              resizeMethod="resize"
              source={null}
            />
          </View>

          <View className="bg-white w-full rounded-3xl p-4 flex flex-col gap-y-3">
            <View>
              <Text className="font-semibold text-md">Event Name</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Type your event name here"
                value={eventName}
                onChangeText={setEventName}
              />
            </View>
            <View>
              <Text className="font-semibold text-md">Start Time</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="When is the start time?"
                value={eventStartTime}
                onChangeText={setEventStartTime}
              />
            </View>
            <View>
              <Text className="font-semibold text-md">End Time</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="When is the end time?"
                value={eventEndTime}
                onChangeText={setEventEndTime}
              />
            </View>
            <View>
              <Text className="font-semibold text-md">Price Entry</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Is there any price for entry? "
                value={priceEntry}
                onChangeText={setPriceEntry}
              />
            </View>
            <View>
              <Text className="font-semibold text-md">Max Attendee</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Is your event has limits for attendees ?"
                value={maxAttendee}
                onChangeText={setMaxAttendee}
              />
            </View>
            <View>
              <Text className="font-semibold text-md">Category</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Type your category name here"
                value={eventCategory}
                onChangeText={setEventCategory}
              />
            </View>
          </View>
          <View className="bg-white w-full rounded-3xl p-4 flex flex-col gap-y-3">
            <View>
              <Text className="font-semibold text-md">Event Description</Text>
              <TextInput
                className="h-20 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Type your category name here"
                value={eventDescription}
                onChangeText={setEventDescription}
              />
            </View>
            <View>
              <Text className="font-semibold text-md">Location</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="bg-white w-full h-28 shadow-md rounded-2xl flex justify-center items-center">
        <LinearGradient
          colors={["#FD297B", "#FF5864", "#FF655B"]}
          start={{ x: 0, y: 0 }}
          locations={[0, 0.6, 1]}
          end={{ x: 1, y: 0 }}
          className="h-10 w-72 rounded-3xl items-center justify-center"
        >
          <Text className="text-white font-bold">Create Event</Text>
        </LinearGradient>
      </View>
    </View>
  );
}
