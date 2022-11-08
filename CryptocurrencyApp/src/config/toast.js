import React from 'react';
import {BaseToast} from 'react-native-toast-message';
import {useTheme} from 'styled-components';

const HEIGHT = 'auto';
const MIN_HEIGHT = 50;
const TEXT_1_FONT_SIZE = 16;
const TEXT_2_FONT_SIZE = 15;
const TEXT_2_NUMBER_OF_LINES = 4;

const Alarm = props => {
  const theme = useTheme();

  return (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: theme.orangeDarker,
        height: HEIGHT,
        minHeight: MIN_HEIGHT,
      }}
      text1Style={{
        fontSize: TEXT_1_FONT_SIZE,
        color: theme.greenMain,
      }}
      text2Style={{
        fontSize: TEXT_2_FONT_SIZE,
        color: theme.greyDarker,
      }}
      text2NumberOfLines={TEXT_2_NUMBER_OF_LINES}
    />
  );
};

const toastConfig = {
  alarm: props => <Alarm {...props} />,
};

export default toastConfig;
