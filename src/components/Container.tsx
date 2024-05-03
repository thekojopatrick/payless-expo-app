import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

// 1 dp = 4px
// 4dp = 4*4 = 16px
//6dp = 4*6 = 24px
// const twStyles = {
//   container: 'flex flex-1 p-6',
// };

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
