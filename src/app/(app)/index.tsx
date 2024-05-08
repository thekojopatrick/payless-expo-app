import { Stack, useLocalSearchParams } from 'expo-router';

import { Container } from '@/components/Container';
import CustomHeader from '@/components/CustomHeader';
import { ScreenContent } from '@/components/ScreenContent';

export default function Home() {
  const { name } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{ title: 'Home', header: () => <CustomHeader user={name as string} /> }}
      />
      <Container>
        <ScreenContent path="app/index.tsx" title={`Showing details for user ${name}`} />
      </Container>
    </>
  );
}
