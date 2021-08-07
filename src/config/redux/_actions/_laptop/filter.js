import AsyncStorage from '@react-native-async-storage/async-storage';
import {API, setAuthToken} from '../../../Api/Api';
import {
    FILTER_LAPTOP
} from '../../../constants/constants';

export const filter = () => {
  return {
    type: FILTER_LAPTOP,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get('user/filter');
      return res.data.data;
    },
  };
};

