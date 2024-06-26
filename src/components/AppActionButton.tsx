import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

export interface IAppActionButton {
  title: string;
  icon: JSX.Element;
  path: string;
}

const AppActionButton: React.FC<IAppActionButton> = ({ title, icon, path }) => {
  const onMenuPressed = () => {
    Alert.alert(`Menu ${title} Pressed`);
  };

  return (
    <Link href={{ pathname: path, params: { name: 'Kojo' } } as never} asChild>
      <Pressable onPress={onMenuPressed}>
        <View className="flex items-center gap-2">
          <View className="items-center rounded-md bg-primary-50 p-4">{icon}</View>
          <Text className="text-center font-medium">{title}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default AppActionButton;
