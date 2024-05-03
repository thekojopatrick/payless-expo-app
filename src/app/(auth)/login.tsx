import { Link, Stack, router } from 'expo-router';
import { View, Text } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Login() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Login" />

        <View className="w-full gap-4 text-center">
          <Button title="Continue" onPress={() => router.push('/(app)/')} />
          <Link className="text-center" href="/(auth)/register">
            <Text className="pr-2">Don't have an account?</Text>
            <Text className="font-medium text-primary-600"> Register</Text>
          </Link>
        </View>
      </Container>
    </>
  );
}
