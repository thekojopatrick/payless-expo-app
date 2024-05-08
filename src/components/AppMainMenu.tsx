import React from 'react';
import { View } from 'react-native';

import AppActionButton, { IAppActionButton } from './AppActionButton';

interface IAppMainMenu {
  data: IAppActionButton[];
}

const AppMainMenu: React.FC<IAppMainMenu> = ({ data }) => {
  return (
    <View className="mt-4 flex flex-row items-center justify-between gap-2">
      {data.map((item, index) => (
        <AppActionButton key={index} {...item} />
      ))}
    </View>
  );
};

export default AppMainMenu;
