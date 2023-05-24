import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../../sanity";

const CategoryCard = ({ name, imageUrl }) => {
  return (
    <TouchableOpacity className=" mt-6 pb-4 mx-2 rounded-md relative">
      <Image
        source={{ uri: urlFor(imageUrl).url() }}
        className="h-20 w-20 rounded-md bg-gray-100"
      />
      <Text className="absolute bottom-4 left-2 font-bold text-white bg-green-700 px-1">
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
