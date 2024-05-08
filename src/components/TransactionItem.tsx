import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';

export interface ITransactionItem {
  id: string;
  name: string;
  amount: number;
  type: 'Debit' | 'Credit' | string;
  icon: JSX.Element;
  date: string;
}

const WithdrawalIcon = () => {
  return (
    <View className="h-8 w-8 items-center justify-center rounded-full bg-danger-100">
      <Feather name="arrow-up-right" size={16} color="red" />
    </View>
  );
};

const CreditAlertIcon = () => {
  return (
    <View className="text-primary-white h-8 w-8 items-center justify-center rounded-full bg-success-100 ">
      <Feather name="arrow-down-left" size={16} color="green" />
    </View>
  );
};

const TransactionItem: React.FC<ITransactionItem> = ({ id, name, amount, type, icon, date }) => {
  return (
    <View id={id} className="flex-row justify-between">
      <View className="flex-row items-center gap-2">
        <View className="h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-center">
          {icon}
        </View>
        <View className="gap-1">
          <Text className="text-lg font-semibold">{name}</Text>
          <Text className="text-neutral-500">{date}</Text>
        </View>
      </View>
      <View className="ml-4 flex-row items-center gap-2">
        <Text className={`font-bold ${type === 'Credit' ? 'text-green-600' : 'text-danger-500'}`}>
          ${amount}
        </Text>
        <View className="">
          {/* <Text>{type}</Text> */}
          {type === 'Debit' ? <WithdrawalIcon /> : <CreditAlertIcon />}
        </View>
      </View>
    </View>
  );
};

export default TransactionItem;
