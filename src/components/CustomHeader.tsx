import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Avatar, AvatarFallback, AvatarImage } from '@/ui/Avatar';

const TWITTER_AVATAR_URI =
  'https://pbs.twimg.com/profile_images/1782428433898708992/1voyv4_A_400x400.jpg';

function UserAvatar({ name }: { name: string }) {
  return (
    <View className="items-center">
      <Avatar alt="User Avatar">
        <AvatarImage source={{ uri: TWITTER_AVATAR_URI }} />
        <AvatarFallback>
          <Text className="font-semibold">{name}</Text>
        </AvatarFallback>
      </Avatar>
    </View>
  );
}

interface ICustomHeader {
  user: string;
}

const CustomHeader: React.FC<ICustomHeader> = ({ user }) => {
  const openDrawer = () => {
    console.log('Open Drawer');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View className="flex flex-row items-center gap-2">
          <TouchableOpacity onPress={openDrawer}>
            <UserAvatar name={user} />
          </TouchableOpacity>
          <Text className="font-semibold">Hey,{user}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: Colors.light.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flexDirection: 'row',
    height: 60,
    gap: 20,
    //backgroundColor: Colors.light.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default CustomHeader;
