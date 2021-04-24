import database from '@react-native-firebase/database';

// real time data handler (path: ref in database && callback: state function that will set data in parent)
export const realtimeData = (path, callBack) => {
  database()
    .ref(path)
    .on('value', (snapshot) => {
      callBack(snapshot.val());
    });
};
