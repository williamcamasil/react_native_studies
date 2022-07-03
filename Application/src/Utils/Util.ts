import Toast from 'react-native-toast-message';

export function setInformartion(type: string, title: string, message: string) {
  Toast.show({
    type: type,
    text1: title,
    text2: message,
  });
}

export function setInformartionWithTimeout(
  type: string,
  title: string,
  message: string,
  navigation: any,
) {
  Toast.show({
    type: type,
    text1: title,
    text2: message,
  });

  setTimeout(() => {
    navigation.goBack();
  }, 1000);
}
