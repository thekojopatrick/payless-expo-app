import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export interface INewsItem {
  title: string;
  link: string;
}

const NewsItem: React.FC<INewsItem> = ({ title, link }) => {
  return (
    <Link href={link as never} asChild>
      <View className="p-4">
        <View className="">
          <Text className="truncate text-lg font-medium">{title}</Text>
          <Text className="font-semibold text-primary-600">Tap to read more &gt;</Text>
        </View>
      </View>
    </Link>
  );
};

export default NewsItem;
