import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Onboarding() {
  return (
    <>
      <Stack.Screen options={{ title: 'Onboarding' }} />
      <View className="p-6">
        <Container>
          <ScreenContent path="app/index.tsx" title="Onboarding" />
          <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
            <Button title="Show Details" onPress={() => {}} />
          </Link>
        </Container>
      </View>
    </>
  );
}
