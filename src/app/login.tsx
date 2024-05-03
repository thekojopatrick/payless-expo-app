import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Login() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <View style={styles.container}>
        <Container>
          <ScreenContent path="app/index.tsx" title="Login" />
          <Link href={{ pathname: '/(app)/', params: { name: 'Dan' } }} asChild>
            <Button title="Login" onPress={() => {}} />
          </Link>
        </Container>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
