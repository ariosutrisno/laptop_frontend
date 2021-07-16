import React, {Component} from 'react';
import { Input } from '../../components/atoms';
import { colors } from '../../utils';
import {Image, ScrollView, Text, View,ToastAndroid } from 'react-native';
import ActionButtonLogin from './ActionButtonLogin';
import { LoginPng } from '../../assets';
import { StatusBarPage } from '../../components';
import {connect} from 'react-redux';
import {login} from '../../config/redux/_actions/_auth/auth';
class Login extends Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            disabled: true,
            submit: false,
        };
        }
        handleChange = (state, val) => {
        this.setState(
            {
            [state]: val,
            },
            () => this.verification(),
        );
        };
        handleSubmit = () => {
        const state = this.state;
        this.setState({
            submit: true,
        });
        const params = {
            email: state.email,
            password: state.password,
        };
        setTimeout(() => {
            try {
            this.props
                .login(params)
                .then((res) => {
                console.log('RESULT', res.value);
                })
                .catch((err) => {
                ToastAndroid.show('Email atau Password salah', ToastAndroid.BOTTOM);
                this.setState({
                    submit: false,
                });
                });
            } catch (error) {
            ToastAndroid.show('Email atau Password salah', ToastAndroid.BOTTOM);
            this.setState({
                submit: false,
            });
            }
        }, 500);
        };
        verification = () => {
        const state = this.state;
        if (state.email == '') {
            this.setState({
            disabled: true,
            });
            return false;
        } else if (state.password == '') {
            this.setState({
            disabled: true,
            });
            return false;
        } else {
            this.setState({
            disabled: false,
            });
            return true;
        }
        };
    render() {
        const state = this.state;
        return(
            <View style={styles.wrapper.pages}>
                <StatusBarPage/>
                <Image source={LoginPng} style={styles.illustration}/>
                    <View style={styles.space(20)}/>
                <Text style={styles.Texts}>LOGIN</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.space(60)}  />
                    <Input
                    title="Email"
                    pholder="Email" 
                    onChangeText={this.handleChange}
                    state="email"
                    value={state.email}
                    keyboardType={'email-address'} 
                    autoCapitalize={'none'}/>
                    <View style={styles.space(50)}/>
                    <Input
                    title="Password"
                    pholder="Password" 
                    onChangeText={this.handleChange}
                    state="password"
                    secureTextEntry={true}
                    value={state.password}/>
                    <View style={styles.space(50)}/>
                    <ActionButtonLogin 
                    disabled={state.disabled}
                    submit={state.submit}
                    title="Login"
                    onPress={this.handleSubmit}/>
                </ScrollView>
                
            </View>
        );
    }
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
const mapDispatchToProps = (dispatch) => {
    return {
      login: (data) => dispatch(login(data)),
    };
  };
export default  connect(null, mapDispatchToProps)(Login);