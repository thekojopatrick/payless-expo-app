import { Stack, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import AccountBalanceCard from '@/components/AccountBalanceCard';
import AppMainMenu from '@/components/AppMainMenu';
import CustomHeader from '@/components/CustomHeader';
import NewsSection from '@/components/NewsSection';
import { ScreenContent } from '@/components/ScreenContent';
import { QRCodeIcon, HistoryIcon, ArrowUpIcon, ArrowDownIcon, UsersIcon } from '@/ui/icons';

const appRoutes = [
  { title: 'Scan to pay', path: '/(app)/scan-code', icon: <QRCodeIcon /> },
  { title: 'Send', path: '/(app)/', icon: <ArrowUpIcon /> },
  { title: 'Receive', path: '/(app)/', icon: <ArrowDownIcon /> },
  { title: 'History', path: '/(app)/', icon: <HistoryIcon /> },
  { title: 'Recipients', path: '/(app)/', icon: <UsersIcon /> },
];

const newsData = [
  { title: 'The Ghana stock exchange listed', link: '' },
  { title: 'Bitcoin is on the rise again', link: '' },
  { title: 'Tips to save and invest', link: '' },
];

export default function Home() {
  const { name } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{ title: 'Home', header: () => <CustomHeader user={name as string} /> }}
      />
      <View className="flex flex-1 gap-2 p-4">
        <AccountBalanceCard />
        <AppMainMenu data={appRoutes} />
        <NewsSection data={newsData} />
        <ScreenContent path="app/index.tsx" title={`Showing details for user ${name}`} />
      </View>
    </>
  );
}
