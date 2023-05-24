import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
} from "react-native-heroicons/outline";
import { Icon } from "@rneui/base";
import CategoryComponent from "../components/CategoryComponent";
import { filterData, FoodData } from "../global/Data";
import HeaderComponent from "../components/HeaderComponent";
import { sanityClient } from "../../sanity";
import FeaturedRow from "../components/FeaturedRow";
import FeaturedCard from "../components/FeaturedCard";
import { StatusBar } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "featured"]{
...,
  restaurant[]->{
    ...,
    dishes[]->
  }
}
    `).then((data) => {
      setFeaturedCategories(data)
    })
  }, []);

  
  return (
    <SafeAreaView className="pt-5 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View>
        {/* Header */}
        <View>
          <HeaderComponent />
        </View>

        {/* Scroll View */}
        <ScrollView
          className="bg-gray-100 "
          contentContainerStyle={{
            paddingBottom: 250,
          }}
        >
          <View>
            <CategoryComponent />
          </View>
          {/* Featured 1 */}

          {featuredCategories?.map((item) => (
            <View key={item._id}>
              <FeaturedRow
                key={item._id}
                id={item._id}
                name={item.name}
                short_description={item.short_description}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
