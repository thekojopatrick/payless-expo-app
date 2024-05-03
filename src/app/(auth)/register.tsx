import { Link, Stack, router } from 'expo-router';
import { View, Text } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Register() {
  return (
    <>
      <Stack.Screen options={{ title: 'Register' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Register" />
        <View className="w-full gap-4 text-center">
          <Button title="Create account" onPress={() => router.push('/(app)/')} />
          <Link className="text-center" href={{ pathname: '/(app)/', params: { name: 'Kojo' } }}>
            <Text className="pr-2">Already have an account?</Text>
            <Text className="font-medium text-primary-600"> Login</Text>
          </Link>
        </View>
      </Container>
    </>
  );
}
