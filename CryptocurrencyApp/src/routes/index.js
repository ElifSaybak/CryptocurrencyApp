import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import {Protected} from './Protected';

export const Routes = () => {
  useEffect(() => {
    const hideAsync = async () => {
      await RNBootSplash.hide();
    };
    hideAsync();
  }, []);

  return <Protected />;
};
