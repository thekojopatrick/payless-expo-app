import { Link, Stack, router } from 'expo-router';
import { View, Text } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { MoneyTransfer, PrimaryLogo } from '~/src/ui/icons';

export default function AccountCreated() {
  return (
    <>
      <Stack.Screen options={{ title: 'Account Created', headerShown: false }} />
      <Container>
        <PrimaryLogo />
        <View className={styles.container}>
          <View className={styles.image}>
            <MoneyTransfer />
          </View>
          <View className="mt-4 w-4/5 items-center">
            <Text className={styles.title}>
              Congratulations!! Account has successfully been created
            </Text>
            <Text className="mt-3 text-center">
              You can now use the app enjoy, all the benefits it comes with.
            </Text>
          </View>
          <View className="mt-auto w-full gap-4 text-center">
            <Link replace href={{ pathname: '/(app)/', params: { name: 'Kojo' } }} asChild>
              <Button title="Continue" onPress={() => {}} />
            </Link>
          </View>
        </View>
      </Container>
    </>
  );
}

const styles = {
  container: `flex-1 items-center `,
  image: `items-center justify-center mt-auto`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold text-center`,
};
