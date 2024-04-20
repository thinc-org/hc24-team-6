import { View, Text, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const EventCard = ({ date, name, location, imageSource }) => {
  return (
    <View className="h-72 w-64 bg-white rounded-2xl mr-3 justify-between">
      <View className="w-full">
        <Image className="w-full h-36 rounded-2xl" source={imageSource} />
        <View className="m-3 flex flex-col justify-between">
          <View>
            <Text className="font-bold text-red">{date}</Text>
            <Text className="font-bold text-lg">{name}</Text>
          </View>
        </View>
      </View>

      <View className="m-3 flex flex-row items-center text-gray-500">
        <Icon
          name="location"
          size={24}
          color="gray"
          className="text-sm items-center"
        />
        <Text className="text-gray-500 ml-1">{location}</Text>
      </View>
    </View>
  );
};

export default EventCard;
