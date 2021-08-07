import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';
import {API, setAuthToken} from '../../../Api/Api' ;
import {LOGIN, LOGOUT, REGISTER,GET_AUTH} from '../../../constants/constants';

export const login = (data) =>{
    return{
        type: LOGIN,
        payload: async()=>{
        const res = await API.post('login', data).catch((err) => {
            return Promise.reject(err);
            });
            if (res.data.code == 0) {
            ToastAndroid.show('Login Berhasil', ToastAndroid.BOTTOM);
            await AsyncStorage.setItem('token', res.data.data.api_token);
            await AsyncStorage.setItem('email', res.data.data.email);
            await AsyncStorage.setItem('id', res.data.data.id.toString());
            const ress = {
                authenticated: true,
                user: res.data.data,
            };
            return ress;
            } else {
            return res;
            }
        }
    }
}


export const register = (data) => {
    return {
    type: REGISTER,
    payload: async () => {
        const res = await API.post('register', data).catch((e) => {
        return Promise.reject(e);
        });
        if (res.data.code == 0) {
        ToastAndroid.show('Register Berhasil', ToastAndroid.BOTTOM);
        await AsyncStorage.setItem('token', res.data.data.token);
        await AsyncStorage.setItem('name', res.data.data.name);
        await AsyncStorage.setItem('id', res.data.data.id.toString());
        const ress = {
            authenticated: true,
            user: res.data.data,
        };
        return ress;
        }
    },
    };
};

export const logout = () => {
    return {
    type: LOGOUT,
    payload: async () => {
        const token = await AsyncStorage.getItem('token');
        setAuthToken(token);
        const res = await API.post('user/logout').catch((err) => {
        return Promise.reject(err);
        });

        if (res.data.code == 0 && res != undefined) {
        AsyncStorage.clear();
        const ress = {
            authenticated: false,
            user: null,
        };
        return ress;
        }
        ToastAndroid.show('Logout Gagal', ToastAndroid.CENTER);
    },
    };
};
  
export const User = () => {
    return {
    type: GET_AUTH,
    payload: async () => {
        const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get('user/profile');
      return res.data.data;
    },
    };
};
  