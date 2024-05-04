import { router } from 'expo-router';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './LoginForm';

import { Button } from '@/components/Button';
import { Text } from '@/ui';

const RegisterForm = () => {
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View className="flex-1">
      <View className="gap-2">
        <Text variant="largeTitle" testID="form-title" className="">
          Let's get started!
        </Text>
        <Text testID="form-title" className="pb-6">
          Create an your account
        </Text>
      </View>
      <View className="mb-auto gap-4">
        <View>
          <Text variant="subhead" testID="email-ID" className={styles.label}>
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Your email address"
            className={styles.input}
            autoCapitalize="none"
          />
        </View>

        <View>
          <Text variant="subhead" testID="email-ID" className={styles.label}>
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            className={styles.input}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
        <View className="mb-2">
          <Text variant="subhead" testID="email-ID" className={styles.label}>
            Confirm Password
          </Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            className={styles.input}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
      </View>
      <Button className="mt-auto" title="Continue" onPress={() => router.push('/account-status')} />
    </View>
  );
};

export default RegisterForm;
