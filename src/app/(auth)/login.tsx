import { Ionicons } from '@expo/vector-icons';
import { Link, Stack, router } from 'expo-router';
import { View, Pressable } from 'react-native';

import { GoogleAuthButton } from '@/components/GoogleAuthButton';
import LoginForm from '@/components/LoginForm';
import { Text } from '@/ui';
import { PrimaryLogo } from '@/ui/icons';

export default function Login() {
  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerLargeTitleShadowVisible: false,
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              {({ pressed }) => (
                <Ionicons
                  name="arrow-back-sharp"
                  size={24}
                  color="black"
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <>
        <View className="flex flex-1 gap-2 p-4">
          <PrimaryLogo />
          <LoginForm />
          <View className="mb-6 mt-auto w-full gap-3 text-center">
            <Text variant="subhead" className="text-center">
              Or log in with
            </Text>
            <Link href="/(auth)/register" asChild>
              <GoogleAuthButton onPress={() => {}} />
            </Link>
          </View>
        </View>
      </>
    </>
  );
}
