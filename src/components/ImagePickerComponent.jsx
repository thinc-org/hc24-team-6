import { useState } from 'react';
import { Button, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerCreateEvent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [8, 8],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

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
      setSelectedImage(result.assets[0].uri);
      setError(null);
    }
  };

  return (
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
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
});