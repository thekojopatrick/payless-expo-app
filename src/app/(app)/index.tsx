import { Stack, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import AccountBalanceCard from '@/components/AccountBalanceCard';
import CustomHeader from '@/components/CustomHeader';
import { ScreenContent } from '@/components/ScreenContent';

export default function Home() {
  const { name } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{ title: 'Home', header: () => <CustomHeader user={name as string} /> }}
      />
      <View className="flex flex-1 gap-2 p-4">
        <AccountBalanceCard />
        <ScreenContent path="app/index.tsx" title={`Showing details for user ${name}`} />
      </View>
    </>
  );
}
