import { Link, Stack } from 'expo-router';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Login() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" onPress={() => {}} />
        </Link>
      </Container>
    </>
  );
}
