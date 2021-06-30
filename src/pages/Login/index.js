import React from 'react';
import { Input } from '../../components/atoms';
import { colors } from '../../utils';
import { useDispatch,useSelector} from 'react-redux';
import { setForm } from '../../redux';
import {Image, ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import ActionButtonLogin from './ActionButtonLogin';
import { LoginPng } from '../../assets';
import { StatusBarPage } from '../../components';

const Login = ({navigation}) =>{
    const dispatch = useDispatch();
    const {form} = useSelector(state => state.LoginReducer);
    const onInputChange = (value,inputType) => { 
        dispatch(setForm(inputType,value));
    };
    
    const POSTDATA = (screen)=>{
        const dataForAPI ={
            email:(form.email),
            password:(form.password)
        }
        axios.post('https://adminproject.site/api/login',dataForAPI)
        .then(res=> {
            alert('login success')
            navigation.navigate(screen)
        })
        .catch(err => console.log('err : ',err));
    }
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
            <Image source={LoginPng} style={styles.illustration}/>
                <View style={styles.space(20)}/>
            <Text style={styles.Texts}>LOGIN</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.space(60)}/>
                <Input placeholder= "Email" value={form.email} onChangeText = {value=>onInputChange(value,'email')}/>
                <View style={styles.space(50)}/>
                <Input placeholder= "Password" value={form.password} onChangeText = {value=>onInputChange(value,'password')} secureTextEntry/>
                <View style={styles.space(50)}/>
                <ActionButtonLogin title="Login" block onPress={()=>POSTDATA('MainApp')}/>
            </ScrollView>
            
        </View>
    );
};
const styles ={
    wrapper:{
        pages:{
            padding:20,
            backgroundColor:colors.background,
            flex:1,
            alignItems: 'center',
            justifyContent:'center',
        },
    },
    iconBack:{
        width:25,
        height:25,
        backgroundColor:'yellow',
    },
    illustration:{
        width:200,
        height:210,
        marginTop:8,
    },

    space:value =>{
        return{
            height:value,
        };
    },
    Texts:{
        textAlign:'center',
        marginTop:32,
        fontWeight:'normal',
        color:colors.text.textWrite,
        fontSize : 30,
    }
};
export default Login;