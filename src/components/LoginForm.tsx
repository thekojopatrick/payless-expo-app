import React from 'react';
import { View, Text } from 'react-native';

const LoginForm = () => {
  return (
    <View>
      <Text testID="form-title" className="pb-6 text-center text-2xl">
        Welcome back!
      </Text>
      <Text testID="form-title" className="pb-6 text-center text-2xl">
        Log into your account
      </Text>
    </View>
  );
};

export default LoginForm;
