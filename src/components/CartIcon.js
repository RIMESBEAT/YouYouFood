import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../redux/features/cartSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const CartIcon = () => {
  const items = useSelector(selectCartItems);
  const navigation = useNavigation();
  const cartTotal = useSelector(selectCartTotal);

  if (items.length === 0 ) return null
  return (
    <View className="absolute bottom-1 w-full z-50 ">
      <TouchableOpacity
        className="bg-[#0D9253] px-4 mx-5 rounded-md"
        onPress={() => navigation.navigate("Cart")}
      >
        <View className="flex-row py-4 justify-between ">
          <Text className="text-xl font-bold text-white">{items.length}</Text>
          <Text className="text-xl font-bold text-white">View Basket</Text>
          <Text className="text-xl font-bold text-white">
            <Currency quantity={cartTotal} currency="NGN" />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
