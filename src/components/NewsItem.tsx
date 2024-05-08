import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, ImageProps } from 'react-native';

export interface INewsItem {
  title: string;
  image: ImageProps;
  link: string;
}
//assets/image-01.png
const NewsItem: React.FC<INewsItem> = ({ title, link, image }) => {
  return (
    <Link href={link as never} asChild>
      <View className="flex-row items-center gap-4">
        <Image source={image} resizeMode="contain" width={50} height={50} />
        <View className="w-[150px] basis-1/3 gap-2">
          <Text className="truncate text-lg font-medium">{title}</Text>
          <Text className="font-semibold text-primary-600">Tap to read more &gt;</Text>
        </View>
      </View>
    </Link>
  );
};

export default NewsItem;
