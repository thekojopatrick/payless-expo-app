import { router } from 'expo-router';
import { View } from 'react-native';

import { Button } from './Button';
import { EmailAuthButton } from './EmailAuthButton';
import { GoogleAuthButton } from './GoogleAuthButton';

import { useSheetRef, Sheet } from '@/ui/Sheet';
import { Text } from '@/ui/Text';

function AuthBottomSheet() {
  const bottomSheetModalRef = useSheetRef();

  return (
    <View>
      <Button title="Login" onPress={() => bottomSheetModalRef.current?.present()} />
      <Sheet ref={bottomSheetModalRef} snapPoints={[250]}>
        <View className="flex-1 items-center justify-center pb-8">
          <View className="w-full gap-3 px-4">
            <EmailAuthButton
              onPress={() => {
                router.push('/(auth)/login');
                bottomSheetModalRef.current?.close();
              }}
            />
            <GoogleAuthButton
              onPress={() => {
                router.push('/modal');
                bottomSheetModalRef.current?.close();
              }}
            />
            <Text variant="footnote" className="text-center">
              By logging in, you agree with our Terms of Service and Privacy Policy{' '}
            </Text>
          </View>
        </View>
      </Sheet>
    </View>
  );
}
export default AuthBottomSheet;
