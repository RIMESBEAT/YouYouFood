import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import {
  CheckCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  PlusIcon,
  TicketIcon,
} from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";

import { useRoute } from "@react-navigation/native";
import CartIcon from "./CartIcon";
import { urlFor } from "../../sanity";
import { useState } from "react";
import {
  addToCart,
  removeFromCart,
  selectCartItemsWithId,
} from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const DishDetails = () => {
  const {
    params: { name, imageUrl, description, meats, price, swallows, id },
  } = useRoute();
  const dispatch = useDispatch();
  const [selectedSwallow, setSelectedSwallow] = useState("");
  const [selectedMeat, setSelectedMeat] = useState("");
  const items = useSelector((state) => selectCartItemsWithId(state, id));

  const addItemsToCart = () => {
    // if (selectedSwallow === "" || selectedMeat === "") {
    //   Alert.alert("Please select all the required items");
    // } else {
      dispatch(
        addToCart({
          id,
          name,
          description,
          price,
          imageUrl,
          selectedSwallow,
          selectedMeat,
        })
      );
  //   }
  };

  const removeItemFromCart = () => {
    if (!items.length > 0) return;
    dispatch(removeFromCart({ id }));
  };

  return (
    <>
      <CartIcon />

      <ScrollView className="">
        <View>
          <Image source={{ uri: urlFor(imageUrl).url() }} className="h-64" />
        </View>
        <View className="px-3 pt-4">
          <Text className="font-bold text-lg">{name}</Text>
          <Text className="font-bold text-lg pt-3">
            <Currency quantity={price} currency="NGN" />
          </Text>
          {swallows && (
            <View className="pt-4">
              <Text className="font-bold text-lg ">Which do you prefer?</Text>
              <View className="flex-row ">
                <Text className="flex-1 text-gray-400 ">
                  choose: one option
                </Text>
                <Text className="font-bold bg-orange-300 px-2 rounded-sm">
                  required
                </Text>
              </View>

              {swallows?.map((item) => (
                <View key={item._id} className="pt-2 flex-row items-center ">
                  <View className="flex-1">
                    <Text className="font-bold">{item.name}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedSwallow(item.name); // set the selected item ID
                    }}
                  >
                    {selectedSwallow === item.name ? ( // check if the current item is the selected item
                      <CheckCircleIcon size={30} color="#0D9253" />
                    ) : (
                      <PlusCircleIcon
                        size={30}
                        color={selectedSwallow ? "#A7A7A7" : "#0D9253"}
                      /> // render a disabled icon
                    )}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
          {meats && (
            <View className="pt-4 pb-4">
              <Text className="font-bold text-lg ">Which do you prefer?</Text>
              <View className="flex-row ">
                <Text className="flex-1 text-gray-400 ">
                  choose: one option
                </Text>
                <Text className="font-bold bg-orange-300 px-2 rounded-sm">
                  required
                </Text>
              </View>
              {meats?.map((item) => (
                <View key={item._id} className="pt-2 flex-row">
                  <Text className="font-bold flex-1 ">{item.name}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedMeat(item.name); // set the selected item ID
                    }}
                  >
                    {selectedMeat === item.name ? ( // check if the current item is the selected item
                      <CheckCircleIcon size={30} color={"#0D9253"} />
                    ) : (
                      <PlusCircleIcon
                        size={30}
                        color={selectedMeat ? "#A7A7A7" : "#0D9253"}
                      /> // render a disabled icon
                    )}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>
        <View>
          <View className="items-center pt-10 pb-40">
            <View className="flex-row space-x-2 items-center">
              <TouchableOpacity
                disabled={!items.length}
                onPress={removeItemFromCart}
              >
                <MinusCircleIcon
                  size={40}
                  color={items.length > 0 ? "#0D9253" : "gray"}
                />
              </TouchableOpacity>
              <Text className="font-bold text-lg">{items.length}</Text>

              <TouchableOpacity onPress={addItemsToCart}>
                <PlusCircleIcon size={40} color="#0D9253" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DishDetails;
