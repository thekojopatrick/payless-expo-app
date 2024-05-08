import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AccountBalanceCard = () => {
  const openAddMoney = () => {
    alert('Open Add Money Screen');
  };
  return (
    <View className="flex flex-row items-center justify-between rounded-md bg-primary-600 p-5 ">
      <View>
        <Text className="text-lg font-bold text-white">$200.00</Text>
        <Text className="text-white">Your balance</Text>
      </View>
      <TouchableOpacity onPress={openAddMoney}>
        <View className="items-center">
          <AntDesign name="pluscircle" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AccountBalanceCard;
