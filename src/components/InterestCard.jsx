import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const InterestCard = ({ iconName, text }) => {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [iconColor, setIconColor] = useState("red");
  const [isGradient, setIsGradient] = useState(false);

  const handleClick = () => {
    setBgColor(bgColor === "red" ? "white" : "red");
    setTextColor(textColor === "white" ? "black" : "white");
    setIconColor(iconColor === "red" ? "white" : "red");
    setIsGradient(!isGradient);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleClick}>
        {isGradient ? (
          <LinearGradient
            colors={["#FD297B", "#FF5864", "#FF655B"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-40 h-40 rounded-2xl m-4 shadow-xl flex justify-center items-center"
          >
            <Icon name={iconName} size={50} color="white" />
            <Text style={{ paddingTop: 8, color: "white", fontWeight: "bold" }}>
              {text}
            </Text>
          </LinearGradient>
        ) : (
          <View
            className={`w-40 h-40 bg-${bgColor} rounded-2xl m-4 shadow-xl flex justify-center items-center`}
          >
            <Icon name={iconName} size={50} color={iconColor} />
            <Text className={`pt-4 text-${textColor} font-semibold`}>
              {text}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InterestCard;
