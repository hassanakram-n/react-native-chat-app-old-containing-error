import {ToastAndroid} from 'react-native'

export const BottomLongToast = (msg) => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  };

export const BottomShortToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Please complete all fields correctly.',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };