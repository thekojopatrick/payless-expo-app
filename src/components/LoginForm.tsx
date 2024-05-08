import { Link } from 'expo-router';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import { Button } from './Button';

import { Text } from '@/ui';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <View className="mb-5 gap-2">
        <Text variant="largeTitle" testID="form-title">
          Welcome back!
        </Text>
        <Text testID="form-description" className="pb-6">
          Log into your account
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

        <View className="mb-3">
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
        <View className="mt-auto w-full gap-4 text-center">
          <Link replace href={{ pathname: '/(app)/', params: { name: 'Kojo' } }} asChild>
            <Button title="Continue" onPress={() => {}} />
          </Link>
        </View>
        <View className="my-2 text-center">
          <Link href="/modal" asChild>
            <Text variant="subhead" className="text-center font-medium text-primary-600 underline">
              Forgotten Password?
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export const styles = {
  label: 'text-grey-100 mb-1 text-lg dark:text-neutral-100',
  input:
    'mt-0 rounded-xl border-[0.5px] border-neutral-300 bg-neutral-100 px-4 py-3 text-base  font-medium leading-5 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white',
};

export default LoginForm;
