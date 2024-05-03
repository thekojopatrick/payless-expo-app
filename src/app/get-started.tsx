import { Link, Stack, router } from 'expo-router';
import { Platform, View, useWindowDimensions } from 'react-native';

import AuthBottomSheet from '../components/AuthBottomModal';
import { OutlineButton } from '../components/OutlineButton';

import { Container } from '@/components/Container';
import { Text } from '@/ui/Text';
import { CreditCardSvg } from '@/ui/icons';

export default function GetStarted() {
  const dimension = useWindowDimensions();

  return (
    <>
      <Stack.Screen options={{ title: 'Get Started', headerShown: false }} />
      <Container>
        <Text variant="subhead" className="text-primary text-center font-bold text-primary-600">
          Welcome to Payless
        </Text>
        <View className="my-auto items-center justify-center pt-4">
          <CreditCardSvg width={dimension.width / 1.2} />
        </View>
        <View className="my-auto items-center gap-4 pb-16">
          <Text variant="largeTitle" className="text-center font-semibold">
            One App For All Your Transactions
          </Text>
          <Text
            variant="body"
            className={`${Platform.OS === 'ios' ? 'w-[90%]' : 'w-[75%]'} text-center text-neutral-600`}>
            Take control of your financial future with a home for tracking ,managing and making
            investments of all types.
          </Text>
        </View>
        <View className="mt-16 flex-row gap-2">
          <View className="basis-1/2">
            <AuthBottomSheet />
          </View>
          <View className="basis-1/2">
            <OutlineButton title="Sign up" onPress={() => router.push('/(auth)/register')} />
          </View>
        </View>
        <Link href="/modal" asChild>
          <Text variant="body" className="mt-4 text-center text-primary-600">
            Terms and Conditions Apply
          </Text>
        </Link>
      </Container>
    </>
  );
}
