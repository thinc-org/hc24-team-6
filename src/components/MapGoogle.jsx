import { View, Text, Image } from "react-native";
import { useState } from "react";
import MapView, { Marker } from "react-native-maps";

const MapGoogle = ({ latitude, longitude, title }) => {
  const [mapRegion, setmapRegion] = useState({
    latitude,
    longitude,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002,
  });

  return (
    <View className="flex">
      <MapView
        style={{ alignSelf: "stretch", height: "100%", borderRadius: 20 }}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title={title}>
          <Text className="text-[10px] text-rose-800">{title}</Text>
          <Image className="w-6 h-6" source={require("../../assets/location-pin.png")} />
        </Marker>
      </MapView>
    </View>
  );
};

export default MapGoogle;
