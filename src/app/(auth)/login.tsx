import { Ionicons } from '@expo/vector-icons';
import { Link, Stack, router } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

import { Container } from '@/components/Container';
import LoginForm from '@/components/LoginForm';
import { PrimaryLogo } from '@/ui/icons';

export default function Login() {
  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerLargeTitleShadowVisible: false,
          headerBackTitleVisible: false,
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
      <Container>
        <View className="gap-2">
          <PrimaryLogo />
          <LoginForm />
          <View className="w-full gap-4 text-center">
            <Link className="text-center" href="/(auth)/register">
              <Text className="pr-2">Don't have an account?</Text>
              <Text className="font-medium text-primary-600"> Register</Text>
            </Link>
          </View>
        </View>
      </Container>
    </>
  );
}
