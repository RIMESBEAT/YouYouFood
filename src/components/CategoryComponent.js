import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { filterData } from "../global/Data";
import { ScrollView } from "react-native";

const CategoryComponent = ({name, imageUrl}) => {
  return (
    <TouchableOpacity className=" pt-4 pb-4 mx-2 rounded-md relative">
      <Image source={ imageUrl} className="h-20 w-20 rounded-md bg-gray-100" />
      <Text className="absolute bottom-4 left-2 font-bold text-white bg-green-700 px-1">{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryComponent;


