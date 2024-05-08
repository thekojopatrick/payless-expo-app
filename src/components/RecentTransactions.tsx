import { Link } from 'expo-router';
import React from 'react';
import { View, Text, FlatList } from 'react-native';

import TransactionItem, { ITransactionItem } from './TransactionItem';

interface IRecentTransaction {
  data: ITransactionItem[];
}

const RecentTransactions: React.FC<IRecentTransaction> = ({ data }) => {
  return (
    <View className="mt-4 flex-1">
      <View className="flex flex-row justify-between">
        <Text className="text-xl font-bold">Recent Transactions</Text>
        <Link href="/(app)/">
          <Text className="font-semibold text-primary-600">See all</Text>
        </Link>
      </View>
      <View className="flex-1 flex-grow">
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, marginVertical: 16 }}
          renderItem={({ item }) => <TransactionItem key={item.id} {...item} />}
          keyExtractor={(_, index) => String(index)}
          ListFooterComponent={() => <View className="h-12 w-full" />}
        />
      </View>
    </View>
  );
};

export default RecentTransactions;
