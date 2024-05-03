import { Stack, router } from 'expo-router';
import { Platform, View } from 'react-native';

import PhoneSvg from '../../assets/phone.svg';

import AuthBottomSheet from '@/components/AuthBottomModal';
import { Container } from '@/components/Container';
import { OutlineButton } from '@/components/OutlineButton';
import { Text } from '@/ui/Text';
import { PrimaryLogo } from '@/ui/icons';

export default function GetStarted() {
  return (
    <>
      <Stack.Screen options={{ title: 'Get Started', headerShown: false }} />
      <Container>
        <View className="items-center">
          <PrimaryLogo />
        </View>
        <View className="flex-1 items-center justify-center pt-4">
          <PhoneSvg />
        </View>
        <View className="my-auto items-center gap-4 pb-4">
          <Text
            variant="title3"
            className="text-primary text-center font-semibold text-primary-600">
            Welcome to Payless
          </Text>
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
        {/* <Link href="/modal" asChild>
          <Text variant="body" className="mt-4 text-center text-primary-600">
            Terms and Conditions Apply
          </Text>
        </Link> */}
      </Container>
    </>
  );
}
