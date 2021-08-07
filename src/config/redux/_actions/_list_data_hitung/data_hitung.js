import AsyncStorage from '@react-native-async-storage/async-storage';
import {API, setAuthToken} from '../../../Api/Api';
import {
    GET_LIST_KRITERIA,
    GET_LIST_NORMALISASI,
    GET_LIST_ALTERNATIF,
    GET_LIST_UTILITY,
    GET_LIST_RANKING,
    GET_LIST_PERHITUNGAN,
    GET_ALL_RANKING
} from '../../../constants/constants';


/* KRITERIA */
export const Kriteria = () => {
  return {
    type: GET_LIST_KRITERIA,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get('user/datakriteria');
      return res.data.data;
    },
  };
};

/* NORMALISASI */
export const Normalisasi = () => {
  return {
    type: GET_LIST_NORMALISASI,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get('user/datanormalisasi');
      return res.data.data;
    },
  };
};

/* ALTERNATIF */
export const Alternatif = () => {
  return {
    type: GET_LIST_ALTERNATIF,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get('user/alternatif');
      return res.data.data;
    },
  };
};

/* UTILITY */
export const UTILITY = () => {
  return {
    type: GET_LIST_UTILITY,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get('user/utility');
      return res.data.data;
    },
  };
};
/* PERHITUNGAN */
export const PERHITUNGAN = () => {
  return {
    type: GET_LIST_PERHITUNGAN,
    payload: async () => {
      const token = await AsyncStorage.getItem('token',);
      setAuthToken(token);
      const res = await API.get('user/utility');
      return res.data.data;
    },
  };
};

/* RANKING */
export const RANKING = () => {
  return {
    type: GET_LIST_RANKING,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get('user/ranking');
      return res.data.data;
    },
  };
};

/* RANKING */
export const RANKING_ALL = () => {
  return {
    type: GET_ALL_RANKING,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get('user/ranking/all');
      return res.data.data;
    },
  };
};


