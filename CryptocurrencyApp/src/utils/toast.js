import Toast from 'react-native-toast-message';

const show = (
  type,
  {title, description, visibilityTime = 8 * 1000, ...rest},
) => {
  Toast.show({
    type,
    text1: title,
    text2: description,
    visibilityTime: visibilityTime,
    ...rest,
  });
};

export const alarm = options => show('alarm', options);
export const hide = () => Toast.hide();

export const toast = {
  alarm,
  hide,
};
