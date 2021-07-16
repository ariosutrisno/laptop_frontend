import AsyncStorage from '@react-native-async-storage/async-storage';
import {API, setAuthToken} from '../../../api/API';
import {
    GET_LIST_LAPTOP,
    GET_DETAIL_LAPTOP,
} from '../../../constants/constants';

export const getlistlaptop = () => {
  return {
    type: GET_LIST_LAPTOP,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get('user/datalaptop');
      return res.data.data;
    },
  };
};


export const getDetailLaptop = (idx_datalaptop) => {
  return {
    type: GET_DETAIL_LAPTOP,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get(
        `user/datalaptop/${idx_datalaptop}/view`,
      ).catch((err) => {
        return Promise.reject(err);
      });
      return res.data.data;
    },
  };
};
