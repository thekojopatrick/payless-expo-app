import { Link } from 'expo-router';
import React from 'react';
import { View, Text, FlatList } from 'react-native';

import TransactionItem, { ITransactionItem } from './TransactionItem';

interface IRecentTransaction {
  data: ITransactionItem[];
}

const RecentTransactions: React.FC<IRecentTransaction> = ({ data }) => {
  return (
    <View className="mt-4">
      <View className="flex flex-row justify-between">
        <Text className="text-xl font-bold">Recent Transactions</Text>
        <Link href="/(app)/">
          <Text className="font-semibold text-primary-600">See all</Text>
        </Link>
      </View>
      <View>
        <FlatList
          data={data}
          contentContainerStyle={{ gap: 12, marginVertical: 16 }}
          renderItem={({ item, index }) => <TransactionItem key={index} {...item} />}
        />
      </View>
    </View>
  );
};

export default RecentTransactions;
