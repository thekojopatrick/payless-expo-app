import { Feather } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import AccountBalanceCard from '@/components/AccountBalanceCard';
import AppMainMenu from '@/components/AppMainMenu';
import CustomHeader from '@/components/CustomHeader';
import NewsSection from '@/components/NewsSection';
import RecentTransactions from '@/components/RecentTransactions';
import { QRCodeIcon, HistoryIcon, ArrowUpIcon, ArrowDownIcon, UsersIcon } from '@/ui/icons';

const appRoutes = [
  { title: 'Scan to pay', path: '/(app)/scan-code', icon: <QRCodeIcon /> },
  { title: 'Send', path: '/(app)/', icon: <ArrowUpIcon /> },
  { title: 'Receive', path: '/(app)/', icon: <ArrowDownIcon /> },
  { title: 'History', path: '/(app)/', icon: <HistoryIcon /> },
  { title: 'Recipients', path: '/(app)/', icon: <UsersIcon /> },
];

const newsData = [
  {
    title: 'The Ghana stock exchange listed',
    link: '',
    image: require('../../../assets/image-01.png'),
  },
  {
    title: 'Bitcoin is on the rise again',
    link: '',
    image: require('../../../assets/image-02.png'),
  },
  { title: 'Tips to save and invest', link: '', image: require('../../../assets/image-03.png') },
];

const transactions = [
  {
    id: '001',
    name: 'Melcom',
    icon: <Feather name="shopping-cart" size={24} color="black" />,
    date: 'October 8th,2023',
    amount: 5674.98,
    type: 'Debit',
  },
  {
    id: '002',
    name: 'Chris T.',
    icon: <Feather name="user" size={24} color="black" />,
    date: 'October 8th,2023',
    amount: 250.0,
    type: 'Credit',
  },
  {
    id: '003',
    name: 'Rent to LandLord',
    icon: <Feather name="home" size={24} color="black" />,
    date: 'April 16th, 2024',
    amount: 300.0,
    type: 'Debit',
  },
  {
    id: '004',
    name: 'Turbonet',
    icon: <Feather name="wifi" size={24} color="black" />,
    date: 'May 12th, 2024',
    amount: 50.5,
    type: 'Debit',
  },
  {
    id: '005',
    name: 'Nana Ekow',
    icon: <Feather name="user" size={24} color="black" />,
    date: 'May 19th, 2024',
    amount: 1000,
    type: 'Credit',
  },
  {
    id: '006',
    name: 'Micheal Sasu',
    icon: <Feather name="user" size={24} color="black" />,
    date: 'May 19th, 2024',
    amount: 1000,
    type: 'Credit',
  },
  {
    id: '007',
    name: 'Lawrence Deku',
    icon: <Feather name="user" size={24} color="black" />,
    date: 'May 19th, 2024',
    amount: 1000,
    type: 'Credit',
  },
  {
    id: '008',
    name: 'Kevin',
    icon: <Feather name="user" size={24} color="black" />,
    date: 'May 19th, 2024',
    amount: 1000,
    type: 'Credit',
  },
  {
    id: '009',
    name: 'Kwaku Jonathan',
    icon: <Feather name="user" size={24} color="black" />,
    date: 'May 19th, 2024',
    amount: 1000,
    type: 'Credit',
  },
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
        <RecentTransactions data={transactions} />
      </View>
    </>
  );
}
