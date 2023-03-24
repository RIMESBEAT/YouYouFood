import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { sanityClient } from "../../sanity";
import FeaturedCard from "./FeaturedCard";
import { ScrollView } from "react-native";

const FeaturedRow = ({ short_description, name, id }) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id ]{
   ...,
  restaurant[]->{
    ...,
    dishes[]->,
    type->{
      name
    }
  },
} [0]
`,
        { id }
      )
      .then((data) => {
        setRestaurant(data?.restaurant);
      });
  }, []);

  console.log(restaurant);
  return (
    <View className=" mx-2" key={id}>
      <View className="flex-row items-center ">
        <Text className="flex-1 text-xl font-bold">{name}</Text>
        <ArrowRightIcon size={30} color="#0D9253" />
      </View>
      <Text>{short_description}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {restaurant?.map((restaurant) => (
            <FeaturedCard
                key={restaurant._id}
                id={restaurant._id}
                name={restaurant.name}
                businessAddress={restaurant.address}
                imageUrl={restaurant.imageUrl}
                rating={restaurant.rating}

          />
        ))} 
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
