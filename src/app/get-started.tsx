import { Link, Stack, router } from 'expo-router';
import { Platform, View, Text, useWindowDimensions } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { GoogleAuthButton } from '@/components/GoogleAuthButton';
import { CreditCardSvg } from '@/ui/icons';
import { OutlineButton } from '../components/OutlineButton';

export default function GetStarted() {
  const dimension = useWindowDimensions();
  return (
    <>
      <Stack.Screen options={{ title: 'Get Started', headerShown: false }} />
      <Container>
        <Text className="text-primary text-center text-xl font-bold text-primary-600">
          Welcome to Payless
        </Text>
        <View className="my-auto items-center justify-center pt-10">
          <CreditCardSvg width={dimension.width / 1.2} />
        </View>
        <View className="mt-auto items-center gap-2 pt-16">
          <Text className={styles.heroTitle}>One App For All Your Transactions</Text>
          <Link href="/modal" className="text-center text-primary-600">
            Terms and Conditions Apply
          </Link>
        </View>
        <View className="mt-16 flex-row gap-2 text-center">
          <View className="basis-1/2">
            <Button title="Login" onPress={() => router.push('/(auth)/login')} />
          </View>
          <View className="basis-1/2">
            <OutlineButton title="Sign up" onPress={() => router.push('/(auth)/register')} />
          </View>
        </View>
        {/* <View className="gap-2 text-center">
          <GoogleAuthButton onPress={() => router.push('/modal')} />
        </View> */}
      </Container>
    </>
  );
}

const styles = {
  heroTitle: `text-primary w-[80%] text-center font-medium ${Platform.OS === 'ios' ? 'text-3xl' : 'text-4xl'}`,
};
