import { Stack } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/components/Button';
import { Text } from '@/ui';
import { QRCodeIcon } from '@/ui/icons';

export default function Details() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Scan Qr Code',
          headerBackTitleVisible: false,
          headerShadowVisible: false,
        }}
      />
      <View className="flex flex-1 p-4">
        <View className="flex-1 items-center justify-center gap-8">
          <QRCodeIcon width={100} height={100} />
          <View className="items-center gap-5">
            <Text variant="title1" className="text-center font-bold">
              Scan QR Code
            </Text>
            <Text variant="body" className="px-4 text-center">
              Will require permission to access your camera to be able to scan QR scan
            </Text>
          </View>
        </View>
        <View className="mb-6">
          <Button title="Scan" onPress={() => {}} />
        </View>
      </View>
    </>
  );
}
