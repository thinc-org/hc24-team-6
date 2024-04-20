import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HeartButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleHeartPress = async () => {
    try {
      if (isFavorite) {
        // await axios.delete(`/api/favorites/${eventId}`);
        setIsFavorite(false);
      } else {
        // await axios.post('/api/favorites', { eventId });
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: isFavorite ? "slate" : "#E7E7E7",
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        marginHorizontal: 10,
      }}
      onPress={handleHeartPress}
    >
      <Icon name="heart" size={20} color={isFavorite ? "white" : "#ff5a5f"}  />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E7E7E7",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 10,
  },
});

export default HeartButton;
