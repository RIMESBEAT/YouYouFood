import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline';
import UserImg from "../assets/userImg.jpg"

const HeaderComponent = () => {
  return (
    <View>
      <View className="flex-row mx-4  items-center">
        <View className="flex-row  space-x-2 flex-1">
          <Image source={UserImg} className="h-10 w-10 rounded-full p-4" />
          <View>
            <Text className="text-gray-400 font-bold">Deliver Now!</Text>
            <View className="flex-row items-center ">
              <Text className="text-xl ">Current Location</Text>

              <ChevronDownIcon size={20} color="#0D9253" />
            </View>
          </View>
        </View>
        <UserIcon size={30} color="#0D9253" />
      </View>
      {/* Search */}
      <View className="flex-row mx-4 py-4 items-center space-x-2">
        <View className="flex-row pl-2 flex-1 items-center  bg-gray-300 rounded">
          <View>
            <MagnifyingGlassIcon size={25} color="#0D9253" className="" />
          </View>

          <TextInput
            placeholder="Search Food Here"
            keyboardType="default"
            className="p-2 w-full"
          />
        </View>
        <AdjustmentsVerticalIcon size={30} color="#0D9253" />
      </View>
    </View>
  );
}

export default HeaderComponent