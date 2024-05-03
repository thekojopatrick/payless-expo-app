import React from 'react';
import { View, Text } from 'react-native';

const RegisterForm = () => {
  return (
    <View>
      <Text testID="form-title" className="pb-6 text-center text-2xl">
        Let's get started!
      </Text>
      <Text testID="form-description" className="pb-6 text-center text-base">
        create your account
      </Text>
    </View>
  );
};

export default RegisterForm;
