import React from 'react';
import { Input } from '../../components/atoms';
import { colors } from '../../utils';
import { useDispatch,useSelector} from 'react-redux';
import {  setFormLogin } from '../../redux';
import {Image, ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import ActionButtonLogin from './ActionButtonLogin';
import { LoginPng } from '../../assets';
import { StatusBarPage } from '../../components';
import { AuthContext } from '../../components/context';

const Login = ({navigation}) =>{
    /* REDUX REACT NATIVE */
    const LoginReducer = useSelector(state =>state.LoginReducer)
    const dispatch = useDispatch();
    /* ONINPUTCHANGE */
    const onInputChange = (valueType,inputType) =>{
        dispatch(setFormLogin(inputType,valueType))
    }
    /* POST DATA */
    const signIn = async()=>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(LoginReducer.formLogin.email ==""){
            ({email:'Please enter Email address'})
		}
        // else if(reg.test(LoginReducer.formLogin.email) === false)
		// {
		// LoginReducer({email:'Email is Not Correct'})
		// return false;
		//   }

		// else if(LoginReducer.formLogin.password==""){
        //     LoginReducer.formLogin({email:'Please enter password'})
		// }else
        //  {
        //     await fetch('https://adminproject.site/api/login',{
        //         method:'POST',
        //         headers:{
        //             'Accept':'Application/json',
        //             'Content-type':'application/json'
        //         },
        //         body: JSON.stringify({
        //             'email':LoginReducer.formLogin.email,
        //             'password':LoginReducer.formLogin.password,
        //         })
        //     }).then((response) => response.json())
        //     .then((responseJson)=>{
        //         if(responseJson == "ok"){
        //             alert("Successfully Login");
                    
        //         }else{
        //             alert("Wrong Login Details");
        //         }
        //     })
        //     .catch((error)=>{
        //     console.error(error);
        //     });
        // }
    }
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
            <Image source={LoginPng} style={styles.illustration}/>
                <View style={styles.space(20)}/>
            <Text style={styles.Texts}>LOGIN</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.space(60)}  />
                <Text style={{padding:10,margin:10,color:'red'}}>{LoginReducer.formLogin.email}</Text>
                <Input placeholder= "Email" value={LoginReducer.formLogin.email} onChangeText={value => onInputChange(value,'email')} />
                <View style={styles.space(50)}/>
                <Input placeholder= "Password" value={LoginReducer.formLogin.password} onChangeText={value => onInputChange(value,'password')} secureTextEntry/>
                <View style={styles.space(50)}/>
                <ActionButtonLogin title="Login" onPress={()=> {signIn()}}/>
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