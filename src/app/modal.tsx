import { View, Text } from 'react-native';

const Modal = () => {
  return (
    <>
      <View className="flex-1 items-center justify-center gap-1 px-12">
        <Text className="pb-1 text-center font-semibold">NativeWindUI</Text>
        <Text className="pb-4 text-center">
          You can install any of the free components from the{' '}
          <Text className="text-primary">NativeWindUI</Text>
          {' website.'}
        </Text>
      </View>
    </>
  );
};

export default Modal;
