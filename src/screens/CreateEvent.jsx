import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import MapGoogle from "../components/MapGoogle";
import { useNavigation } from '@react-navigation/native'

export default function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [priceEntry, setPriceEntry] = useState("");
  const [maxAttendee, setMaxAttendee] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  const navigation = useNavigation()

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permission to select an image."
      );
      setError("Permission denied");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
      setError(null);
    }
  };
  return (
    <View className="w-screen h-screen bg-background">
      <ScrollView className="">
        <View className="flex-1 items-center space-y-[5%] w-full h-full px-[2%]">
          <View className="w-full aspect-square mt-16" onPress={handleImagePicker}>
            <TouchableOpacity onPress={handleImagePicker}>
              {selectedImage ? (
                <Image
                  source={{ uri: selectedImage }}
                  style={{ width: "100%", height: "100%", borderRadius: 12 }}
                />
              ) : (
                <View className="w-full h-full rounded-3xl bg-white justify-center items-center">
                  <Ionicons name="add-circle" size={80} color="#FF5864" />
                </View>
              )}
            </TouchableOpacity>
            {error && <Text className="text-red-500">{error}</Text>}
          </View>

          <View className="bg-white w-full rounded-3xl p-4 flex flex-col gap-y-3">
            <View>
              <Text className="font-semibold text-lg">Event Name</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Type your event name here"
                value={eventName}
                onChangeText={setEventName}
              />
            </View>
            <View>
              <Text className="font-semibold text-lg">Start Time</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="When is the start time?"
                value={eventStartTime}
                onChangeText={setEventStartTime}
              />
            </View>
            <View>
              <Text className="font-semibold text-lg">End Time</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="When is the end time?"
                value={eventEndTime}
                onChangeText={setEventEndTime}
              />
            </View>
            <View>
              <Text className="font-semibold text-lg">Price Entry</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Is there any price for entry? "
                value={priceEntry}
                onChangeText={setPriceEntry}
              />
            </View>
            <View>
              <Text className="font-semibold text-lg">Max Attendee</Text>
              <TextInput
                className="h-10 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Is your event has limits for attendees ?"
                value={maxAttendee}
                onChangeText={setMaxAttendee}
              />
            </View>
            <View>
              <Text className="font-semibold text-lg">Category</Text>
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
              <Text className="font-semibold text-xl">Event Description</Text>
              <TextInput
                className="h-20 mt-2 w-full border border-gray-200 px-4 rounded-xl"
                placeholder="Type your category name here"
                value={eventDescription}
                onChangeText={setEventDescription}
              />
            </View>
            <View className = "space-y-2">
              <Text className="font-semibold text-xl">Location</Text>
              <View className="w-full aspect-square">
              <MapGoogle
                latitude={13.736717}
                longitude={100.523186}
                title={"Choose your location"}
              />
          </View>
            </View>
            
          </View>
        </View>
      </ScrollView>

      <View className="bg-white w-full h-28 shadow-md rounded-2xl flex justify-center items-center" onPress = {() => navigation.navigate("AdminHome")}>
        <LinearGradient
          colors={["#FD297B", "#FF5864", "#FF655B"]}
          start={{ x: 0, y: 0 }}
          locations={[0, 0.6, 1]}
          end={{ x: 1, y: 0 }}
          className="h-10 w-72 rounded-3xl items-center justify-center"
        >
          <Text className="text-white font-bold" onPress = {() => navigation.navigate("AdminHome")}>Create Event</Text>
        </LinearGradient>
      </View>
      </View>
  );
}
