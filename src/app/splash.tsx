import { Stack, useFocusEffect, useRouter } from 'expo-router';
import { View, Text, Image, StyleSheet } from 'react-native';

//import { useCallback } from 'react';
const logo = require('../../assets/icon.png');
export default function Splash() {
  const router = useRouter();

  useFocusEffect(() => {
    // Call the replace method to redirect to a new route without adding to the history.
    // We do this in a useFocusEffect to ensure the redirect happens every time the screen
    // is focused.

    setTimeout(() => {
      router.replace('/onboarding');
    }, 2000);

    //clearTimeout(timer);
  });

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Splash',
          headerShown: false,
          animationTypeForReplace: 'pop',
          animation: 'fade',
        }}
      />
      <View className="flex flex-1 items-center justify-center bg-primary-600 p-4">
        <View className="mt-auto">
          <Image
            source={logo}
            alt="Logo"
            style={styles.image}
            className="aspect-square h-64 w-64 object-contain"
            resizeMode="contain"
          />
        </View>
        <Text className="mb-6 mt-auto text-2xl font-medium text-white">Payless</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 96,
  },
});
