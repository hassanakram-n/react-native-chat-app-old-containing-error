import {ToastAndroid} from 'react-native';

export const BottomLongToast = (msg) => {
  ToastAndroid.show(msg, ToastAndroid.LONG, ToastAndroid.BOTTOM);
};

export const BottomShortToast = (msg) => {
  ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
};
