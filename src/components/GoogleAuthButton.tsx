import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Google } from '@/ui/icons';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
}

export const GoogleAuthButton = forwardRef<TouchableOpacity, ButtonProps>(({ onPress }, ref) => {
  return (
    <TouchableOpacity ref={ref} className={styles.button} onPress={onPress}>
      <Google width={32} height={32} />
      <Text className={styles.buttonText}>Continue with Google</Text>
    </TouchableOpacity>
  );
});

const styles = {
  button: 'items-center gap-4 justify-center rounded-full p-4 border  border-charcoal-100 flex-row',
  buttonText: 'text-lg font-semibold text-center',
};
