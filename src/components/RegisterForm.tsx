import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { Button } from '@/components/Button';
import { Text } from '@/ui';

const RegisterForm = () => {
  return (
    <View className="">
      <View className="gap-2">
        <Text variant="largeTitle" testID="form-title" className="">
          Let's get started!
        </Text>
        <Text testID="form-title" className="pb-6">
          Create an your account
        </Text>
      </View>
      <View className="flex flex-col gap-4">
        <Button title="Create account" onPress={() => router.push('/account-status')} />
      </View>
    </View>
  );
};

export default RegisterForm;
