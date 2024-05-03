import { Link, Stack, router } from 'expo-router';
import { Platform, View, Text } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { GoogleAuthButton } from '@/components/GoogleAuthButton';
import { CreditCardSvg } from '@/ui/icons';

export default function GetStarted() {
  return (
    <>
      <Stack.Screen options={{ title: 'Get Started' }} />

      <Container>
        <Text className="text-primary text-center text-xl font-bold text-primary-600">Payless</Text>
        <View className="my-auto items-center justify-center pt-10">
          <CreditCardSvg />
        </View>
        <View className="mt-auto items-center gap-2 pt-16">
          <Text className={styles.heroTitle}>One App For All Your Transactions</Text>
          <Link href="/modal" className="text-center text-primary-600">
            Terms and Conditions Apply
          </Link>
        </View>
        <View className="mb-4 mt-16 flex-row gap-2 text-center">
          <View className="basis-1/2">
            <Button title="Login" onPress={() => router.push('/login')} />
          </View>
          <View className="basis-1/2">
            <Button title="Register" onPress={() => router.push('/get-started')} />
          </View>
        </View>
        <View className="gap-2 text-center">
          <GoogleAuthButton onPress={() => router.push('/modal')} />
        </View>
      </Container>
    </>
  );
}

const styles = {
  heroTitle: `text-primary w-[80%] text-center font-semibold ${Platform.OS === 'ios' ? 'text-3xl' : 'text-5xl'}`,
};
