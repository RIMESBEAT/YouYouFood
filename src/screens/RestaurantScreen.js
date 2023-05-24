import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LockClosedIcon,
  MapPinIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import {
  ChevronDoubleRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setRestaurant } from "../redux/features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const {
    params: {
      lat,
      long,
      name,
      imageUrl,
      dishes,
      description,
      rating,
      address,
      meats,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        lat,
        long,
        name,
        imageUrl,
        dishes,
        description,
        rating,
        address,
        meats,
      }, [ ])
    );
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  
  return (
    <>
      <CartIcon />
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#0D9253" />

        <ScrollView className="">
          <View className="relative">
            <Image
              source={{
                uri: urlFor(imageUrl).url(),
              }}
              className="w-full h-56"
            />
            <TouchableOpacity
              className="bg-gray-300 p-2 justify-center items-center rounded-full absolute top-9 left-5"
              onPress={navigation.goBack}
            >
              <ArrowLeftIcon size={20} color="#0D9253" />
            </TouchableOpacity>
            <View className="pl-3 pr-3 bg-white">
              <Text className="font-bold text-xl">{name}</Text>
              <View className="flex-row items-center pt-2 pb-2">
                <StarIcon size={20} color="#0D9253" />
                <Text className="text-green-600">{rating} </Text>
                <MapPinIcon size={20} color="grey" />
                <Text> {address}</Text>
              </View>
              <View>
                <Text>{description}</Text>
              </View>
              <View className="flex-row items-center border-gray-100 border-2 mt-2 mb-3 pl-2">
                <QuestionMarkCircleIcon size={25} color="grey" />
                <TextInput
                  placeholder="Have food allegies?"
                  className="flex-1 pt-2 pb-2 ml-2"
                />
                <ChevronRightIcon size={20} color="#0D9253" />
              </View>
            </View>
          </View>
          <View className="pt-4 pb-4 pl-3 pr-3">
            <Text className="font-bold text-xl">Menu</Text>
          </View>
          <View className="pl-3 pr-3 pb-40 bg-white">
            {dishes?.map((item) => (
              <View
                key={item._id}
                className=" pt-4 pb-4 border-b-gray-200 border-b"
              >
                <DishRow
                  name={item.name}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  swallows={item.swallows}
                  meats={item.meats}
                  id={item._id}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RestaurantScreen;
