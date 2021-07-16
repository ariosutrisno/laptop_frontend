import AsyncStorage from '@react-native-async-storage/async-storage';
import {API, setAuthToken} from '../../../api/API';
import {
    ADD_REQUEST_USER,
    LIST_REQUEST_USER,
    UPDATE_REQUEST_USER,
    DELETE_REQUEST_USER,
} from '../../../constants/constants';


/* List User Req */
export const ListUser = () => {
  return {
    type: ADD_REQUEST_USER,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get('user/dataRekomen');
      return res.data.data;
    },
  };
};

/* ADD User Req */
export const AddUser = () => {
  return {
    type: LIST_REQUEST_USER,
    payload: async () => {
        const token = await AsyncStorage.getItem('token');
        setAuthToken(token);
        const res = await API.post('user/dataRekomen', data).catch((err) => {
          return Promise.reject(err);
        });
        return res.data.data;
      },
  };
};

/* Update user */
export const updateUser = (idx_rekomen) => {
  return {
    type: UPDATE_REQUEST_USER,
    payload: async () => {
        const token = await AsyncStorage.getItem('token');
        setAuthToken(token);
        const res = await API.post(
            `user/dataRekomen/${idx_rekomen}/update`,
          ).catch((err) => {
          return Promise.reject(err);
        });
        return res.data.data;
      },
  };
};

/* delete user req */
export const updateUser = (idx_rekomen) => {
  return {
    type: UPDATE_REQUEST_USER,
    payload: async () => {
        const token = await AsyncStorage.getItem('token');
        setAuthToken(token);
        const res = await API.delete(
            `user/dataRekomen/${idx_rekomen}/delete`,
          ).catch((err) => {
          return Promise.reject(err);
        });
        return res.data.data;
      },
  };
};

