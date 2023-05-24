import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { urlFor } from "../../sanity";
import Currency from "react-currency-formatter";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsWithId,
} from "../redux/features/cartSlice";
import CartIcon from "./CartIcon";

const DishRow = ({
  name,
  imageUrl,
  description,
  id,
  price,
  swallows,
  meats,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isPress, setIsPress] = useState(false);
  const [selectedSwallow, setSelectedSwallow] = useState("");
  const [selectedMeat, setSelectedMeat] = useState("");
  const items = useSelector((state) => selectCartItemsWithId(state, id));


  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DishDetails", {
            name,
            imageUrl,
            description,
            meats,
            swallows,
            price,
            description,
            id
          });
        }}
      >
        <View className="flex-row ">
          <View className="flex-1 ">
            <Text className="font-bold ">{name}</Text>
            <Text>{description}</Text>
            <Text className="font-bold pt-4">
              <Currency quantity={price} currency="NGN" />
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(imageUrl).url() }}
              className="h-20 w-20"
            />
          </View>
        </View>
      </TouchableOpacity>
      <View></View>
    </>
  );
};

export default DishRow;
