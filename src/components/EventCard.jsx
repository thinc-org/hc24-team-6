import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native'

const EventCard = (event) => {
  const navigation = useNavigation();
  let data = event.props;
  return (
    <Pressable onPress={() => navigation.navigate('Event', {data})}>
      <View className="h-72 w-64 bg-white rounded-2xl mr-3 justify-between">
        <View className="w-full">
          <Image className="w-full h-36 rounded-2xl" source={{ uri: data.image_url }} />
          <View className="m-3 flex flex-col justify-between">
            <View>
              <Text className="font-bold text-red">{data.date}</Text>
              <Text className="font-bold text-lg">{data.name}</Text>
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
          <Text className="text-gray-500 ml-1">{data.location}</Text>
        </View>
      </View>
    </Pressable>

  );
};

export default EventCard;
