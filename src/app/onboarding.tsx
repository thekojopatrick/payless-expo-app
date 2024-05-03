import { Link, Stack, router } from 'expo-router';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

//const logo = require('../../assets/icon.png');
export default function Onboarding() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Onboarding',
          animationTypeForReplace: 'pop',
          animation: 'fade',
        }}
      />
      <Container>
        <Text className="text-primary text-center text-xl font-bold">Payless</Text>
        <View className="mt-auto gap-2 text-center">
          <Button title="Get Started " onPress={() => router.push('/login')} />
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 96,
  },
});
