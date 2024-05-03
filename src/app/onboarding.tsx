import { Link, Stack, router } from 'expo-router';
import { View, Text, Platform } from 'react-native';

import Wallet from '../../assets/wallet.svg';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

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
        <Text className="text-primary text-center text-xl font-bold text-primary-600">
          Welcome to Payless
        </Text>
        <View className="my-auto items-center justify-center pt-10">
          <Wallet />
        </View>
        <View className="mt-auto items-center gap-2 pt-16">
          <Text className={styles.heroTitle}>Pay,Send and Receive Money from Anywhere</Text>
          <Link href="/modal" className="text-center text-primary-600">
            Terms and Conditions Apply
          </Link>
        </View>
        <View className="mt-16 gap-2 text-center">
          <Button title="Get Started " onPress={() => router.push('/get-started')} />
        </View>
      </Container>
    </>
  );
}

const styles = {
  heroTitle: `text-primary w-[90%] text-center font-medium ${Platform.OS === 'ios' ? 'text-3xl' : 'text-4xl'}`,
};
