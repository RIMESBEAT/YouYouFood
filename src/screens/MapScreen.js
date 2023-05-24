import { View, Text, TextInput, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { sanityClient } from "../../sanity";
import { Button } from "react-native";
import {
InformationCircleIcon
} from "react-native-heroicons/outline";

const MapScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.navigate("Cart");
        return true;
      }
    );

    return () => backHandler.remove();
  }, [navigation]);

  const [region, setRegion] = useState({
    latitude: 6.610025183081664,
    longitude: 3.3457278417876126,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // replace `initialRegion` with your default region object
  const [markers, setMarkers] = useState([]); // replace `[]` with your initial markers array

  const onRegionChange = (newRegion) => {
    setRegion(newRegion);
  };
  return (
    <View className="  w-full h-full  ">
      <MapView
        region={region}
        onRegionChange={onRegionChange}
        className="w-full h-60"
      ></MapView>
      <View className="px-4 mt-4 bg-white">
        <View>
          <View className="flex-row items-center space-x-2">
            <Text className="text-lg font-extrabold">where to?</Text>
            <InformationCircleIcon size={20} color="gray"  />

          </View>
          <TextInput placeholder="Where To?" className="p-3 border border-gray-300 text-lg"/>
        </View>
      </View>
    </View>
  );
};

export default MapScreen;
