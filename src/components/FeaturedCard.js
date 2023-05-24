import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import {
  ArrowLeftOnRectangleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../../sanity";
import { useNavigation } from "@react-navigation/native";

const FeaturedCard = ({
  name,
  businessAddress,
  rating,
  imageUrl,
swallows,
  dishes,
  meats,
  description,
  address,
  lat,
  long,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          name,
          rating,
          imageUrl,
          dishes,
          description,
          address,
          lat,
          long,
          swallows,
          meats
        });
      }}
      className=" pt-4 pb-4 mx-2 "
    >
      <View className="  shadow-lg  bg-white rounded-lg">
        <Image
          source={{ uri: urlFor(imageUrl).url() }}
          className="h-36 w-64  rounded-lg"
        />
        <View className="ml-2">
          <Text className="font-bold text-lg">{name}</Text>
          <View className="flex-row items-center space-x-1 py-2">
            <StarIcon size={20} color="#0D9253" />
            <Text className="font-bold">{rating}</Text>
          </View>
          <View className="flex-row py-2">
            <MapPinIcon size={20} color="#0D9253" />
            <Text>{address}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;
