import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { Button } from './Button';

import { Text } from '@/ui';

const LoginForm = () => {
  return (
    <View>
      <View className="gap-2">
        <Text variant="largeTitle" testID="form-title" className="">
          Welcome back!
        </Text>
        <Text testID="form-title" className="pb-6">
          Log into your account
        </Text>
      </View>
      <View className="flex flex-col gap-4">
        <Button title="Continue" onPress={() => router.push('/account-status')} />
      </View>
    </View>
  );
};

export default LoginForm;
