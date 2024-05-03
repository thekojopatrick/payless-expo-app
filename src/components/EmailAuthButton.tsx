import { MaterialCommunityIcons } from '@expo/vector-icons';
import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
}

export const EmailAuthButton = forwardRef<TouchableOpacity, ButtonProps>(({ onPress }, ref) => {
  return (
    <TouchableOpacity ref={ref} className={styles.button} onPress={onPress}>
      <MaterialCommunityIcons name="email-outline" size={24} color="black" />
      <Text className={styles.buttonText}>Continue with Email</Text>
    </TouchableOpacity>
  );
});

const styles = {
  button: 'items-center gap-4 justify-center rounded-full p-4 border border-charcoal-100 flex-row',
  buttonText: 'text-lg font-semibold text-center',
};
