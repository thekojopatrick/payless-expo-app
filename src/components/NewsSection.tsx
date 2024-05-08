import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';

import NewsItem, { INewsItem } from './NewsItem';

interface INewsSection {
  data: INewsItem[];
}

const NewsSection: React.FC<INewsSection> = ({ data }) => {
  return (
    <View className="mt-6">
      <View className="flex flex-row justify-between">
        <Text className="text-xl font-bold">Finance News</Text>
        <Pressable>
          <AntDesign name="close" size={24} color="black" />
        </Pressable>
      </View>
      <View className=" flex">
        <FlatList
          horizontal
          data={data}
          contentContainerStyle={{
            gap: 10,
            paddingVertical: 12,
            marginVertical: 12,
            //borderWidth: 1,
          }}
          renderItem={({ item, index }) => <NewsItem key={index} {...item} />}
        />
      </View>
    </View>
  );
};

export default NewsSection;
