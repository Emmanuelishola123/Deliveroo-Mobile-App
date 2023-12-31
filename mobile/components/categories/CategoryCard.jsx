import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ url, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: url }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 font-bold text-white ">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
