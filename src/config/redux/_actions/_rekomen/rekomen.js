import AsyncStorage from '@react-native-async-storage/async-storage';
import {API, setAuthToken} from '../../../Api/Api';
import {
    LIST_REQUEST_USER,
    ADD_REQUEST_USER,
    UPDATE_REQUEST_USER,
    EDIT_REQUEST_USER,
    DELETE_REQUEST_USER
} from '../../../constants/constants';

export const add_req = (data) => {
  return {
    type: ADD_REQUEST_USER,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.post('user/dataRekomen',data).catch((err) => {
        return Promise.reject(err);
      });;
      return res.data.data;
    },
  };
};

export const list_req = () => {
  return {
    type: LIST_REQUEST_USER,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get('user/dataRekomen');
      return res.data.data;
    },
  };
};


export const edit_req = (idx_rekomendasi) => {
  return {
    type: EDIT_REQUEST_USER,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get(
        `user/dataRekomen/${idx_rekomendasi}/edit`,
      ).catch((err) => {
        return Promise.reject(err);
      });
      return res.data.data;
    },
  };
};

export const update = (idx_rekomendasi) => {
    return {
      type: UPDATE_REQUEST_USER,
      payload: async () => {
        const token = await AsyncStorage.getItem('token');
        setAuthToken(token);
        const res = await API.post(
          `user/dataRekomen/${idx_rekomendasi}/edit`,
        ).catch((err) => {
          return Promise.reject(err);
        });
        return res.data.data;
      },
    };
  };
  
export const delete_req = (idx_rekomendasi) => {
  return {
    type: DELETE_REQUEST_USER,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get(
        `user/dataRekomen/${idx_rekomendasi}/delete`,
      ).catch((err) => {
        return Promise.reject(err);
      });
      return res.data.data;
    },
  };
};
