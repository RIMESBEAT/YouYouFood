import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../redux/features/cartSlice";
import { useState } from "react";
import { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../sanity";
import Currency from "react-currency-formatter";
import { StatusBar } from "react-native";
import { ChevronRightIcon, NoSymbolIcon } from "react-native-heroicons/outline";
import { Switch } from "react-native";

const CartScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItemsInCart, setGroupedItemsInCart] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggle = () => setIsEnabled((previousState) => !previousState);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInCart(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="">
      <StatusBar barStyle="light-content" backgroundColor="#0D9253" />

      <View className=" relative h-full ">
        <ScrollView>
          <View className="px-4 pt-3">
            <Text className="text-xl font-extrabold">Your Order</Text>
            <View className="flex-row items-center">
              <Text>{items.length} product from</Text>
              <Text className="font-extrabold">{restaurant.name}</Text>
            </View>
          </View>

          <View className="py-4 px-3 flex-row items-center">
            <View className="flex-1 flex-row items-center ">
              <Image
                source={{
                  uri: "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/delivery.png",
                }}
                className="h-10 w-10 rounded-full p-4 bg-[#0D9253]"
              />
              <Text className="pl-4 text-lg">Delivery in 50-75 min</Text>
            </View>
            <TouchableOpacity className="text-lg text-[#0D9253]">
              <Text className="text-lg text-[#0D9253]">Change</Text>
            </TouchableOpacity>
          </View>

          {Object.entries(groupedItemsInCart).map(([key, items]) => (
            <View key={key}>
              <View className="px-3 flex-row items-center my-2">
                <Text className="text-[#0D9253] font-bold">
                  {items.length} X
                </Text>
                <Image
                  source={{ uri: urlFor(items[0]?.imageUrl).url() }}
                  className="h-14 w-14 rounded-lg ml-4"
                />
                <Text className="pl-2 flex-1">{items[0]?.name}</Text>

                <View className="flex-row items-center space-x-1 ">
                  <Text className="pl font-bold">
                    <Currency quantity={items[0]?.price} currency="NGN" />
                  </Text>

                  <TouchableOpacity>
                    <Text
                      onPress={() => {
                        dispatch(removeFromCart({ id: key }));
                      }}
                      className="text-[#0D9253] font-extrabold"
                    >
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
          <View>
            <View className="flex-row">
              <NoSymbolIcon size={20} color="gray" />
              <Text>Any allegies?</Text>
              <ChevronRightIcon size={20} color="gray" />
            </View>
            <View className="flex-row">
              <Text className="text">Need cutlery?</Text>
              <ChevronRightIcon size={20} color="gray" />
            </View>
            <View className="flex-row items-center">
              <Text className="flex-1">
                Help us minimize waste. Only ask for cutlery when you need it
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#0D9253" : "#f4f3f4"}
                onValueChange={toggle}
                value={isEnabled}
              />
            </View>
          </View>
        </ScrollView>
        <View className="shadow"></View>
        <View className="px-4 absolute width-full bottom-4 w-full bg-white shadow ">
          <View className="flex-row items-center py-2 shadow-md">
            <Text className="flex-1 text-lg font-bold">Total Amount</Text>
            <Text className="text-lg font-bold">
              <Currency quantity={cartTotal} currency="NGN" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Loader");
            }}
          >
            <Text className="text-center bg-[#0D9253] py-4 mt-4 rounded-lg font-extrabold text-white text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
