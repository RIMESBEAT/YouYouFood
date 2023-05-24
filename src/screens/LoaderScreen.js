import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native';
import LoaderIcon from "../assets/deliveryIcon.gif"
import { Image } from 'react-native';
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';

const LoaaderScreen = () => {
 
  const navigation = useNavigation()

  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      navigation.navigate('MapScreen');
    }, 3000);

    return () => clearInterval(intervalId);
  }, [navigation]);

  return (
    <View >
      <StatusBar barStyle="light-content" backgroundColor="#0D9253" />
      <View className="bg-[#0D9253] h-full items-center justify-center relative">
        <Image source={LoaderIcon} className="h-40 w-40 " />


        <View className="absolute bottom-10">
          <Progress.Circle
            size={60}
            borderWidth={4}
            indeterminate={true}
            color="white"
            className=""
          />
          <Text className="font-extrabold text-white pt-7">Loading...</Text>
        </View>
      </View>
    </View>
  );
}

export default LoaaderScreen