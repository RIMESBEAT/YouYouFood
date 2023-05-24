import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { filterData } from "../global/Data";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import { sanityClient } from "../../sanity";

const CategoryComponent = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category" ]{
...
} 

    `
      )
      .then((data) => {
        setCategory(data);
      });
  }, []);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {category?.map((item) => (
        <CategoryCard
          name={item.name}
          imageUrl={item.imageUrl}
          key={item._id}
          id={item._id}
        />
      ))}
    </ScrollView>
  );
};

export default CategoryComponent;


