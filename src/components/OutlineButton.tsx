import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
}

export const OutlineButton = forwardRef<TouchableOpacity, ButtonProps>(
  ({ onPress, title }, ref) => {
    return (
      <TouchableOpacity ref={ref} className={styles.button} onPress={onPress}>
        <Text className={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = {
  button: 'items-center rounded-[28px] p-4 border border-primary-600',
  buttonText: 'text-lg font-semibold text-center text-primary-600',
};
