import { router } from 'expo-router';
import { View, Text } from 'react-native';

import { Button } from './Button';
import { GoogleAuthButton } from './GoogleAuthButton';

import { useSheetRef, Sheet } from '@/ui/Sheet';

function AuthBottomSheet() {
  const bottomSheetModalRef = useSheetRef();

  return (
    <View>
      <Button title="Login" onPress={() => bottomSheetModalRef.current?.present()} />
      <Sheet ref={bottomSheetModalRef} snapPoints={[200]}>
        <View className="flex-1 items-center justify-center pb-8">
          <GoogleAuthButton onPress={() => router.push('/modal')} />
          <Text />
        </View>
      </Sheet>
    </View>
  );
}
export default AuthBottomSheet;
