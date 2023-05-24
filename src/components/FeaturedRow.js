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
    dishes[]->{
      ...,
      swallows[]->,
      meats[]->,
    },
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
  return (
    <View className=" mx-2" key={id}>
      <View className="flex-row items-center ">
        <Text className="flex-1 text-xl font-bold">{name}</Text>
        <ArrowRightIcon size={30} color="#0D9253" />
      </View>
      <Text>{short_description}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurant?.map((item) => (
          <FeaturedCard
            key={item._id}
            id={item._id}
            name={item.name}
            address={item.address}
            imageUrl={item.imageUrl}
            rating={item.rating}
            lat={item.lat}
            description={item.description}
            long={item.long}
            dishes={item.dishes}
            swallows={item.swallows}
            meats={item.meats}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
