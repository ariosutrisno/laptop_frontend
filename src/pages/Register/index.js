import { Image, ScrollView, Text, View,ToastAndroid } from 'react-native';
import React,{useEffect,useState,Component} from 'react';
import { Input } from '../../components/atoms';
import { colors } from '../../utils';
import ActionButtonRegister from './ActionButtonRegister';
import { Registeration } from '../../assets';
import { StatusBarPage } from '../../components';
import {connect} from 'react-redux';
import {register} from '../../config/redux/_actions/_auth/auth';
class Register extends Component {
constructor() {
    super();
    this.state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    disabled: true,
    submit: false,
    };
}
handleChange = (state, val) => {
    this.setState(
    {
        [state]: val,
    },
    () => this.validation(),
    );
};
validation = () => {
    const state = this.state;
    if (state.name == '') {
    this.setState({
        disabled: true,
    });
    return false;
    } else if (state.email == '') {
    this.setState({
        disabled: true,
    });
    return false;
    } else if (state.password == '' || state.password.length < 6) {
    this.setState({
        disabled: true,
    });
    return false;
    } else if (state.password_confirmation != state.password) {
    console.log('pw beda');
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
handleSubmit = () => {
    this.setState({
    submit: true,
    });
    setTimeout(() => this.sendSubmit(), 500);
    // this.sendSubmit();
};
sendSubmit = async () => {
    const state = this.state;
    const param = {
    name: state.name,
    email: state.email,
    password: state.password,
    password_confirmation: state.password_confirmation,
    };
    setTimeout(() => this.GoLogin(), 3000);
    try {
    // await this.props.register(param);
    this.props.register(param).then((res) => {
        console.log('RESULT', res.value);
    });
    } catch (error) {
    ToastAndroid.show('Register Gagal', ToastAndroid.BOTTOM);
    this.setState({
        submit: false,
    });
    console.log('ERROR', error);
    }
};
GoLogin = () => {
    this.props.navigation.navigate('Login');
};
render() {
    const {
        name,
        email,
        password,
        password_confirmation,
        submit,
        disabled,
        } = this.state;
        return(
            <View style={styles.wrapper.pages}>
                <StatusBarPage/>
                <Image source={Registeration} style={styles.illustration}/>
                <Text style={styles.Texts}>REGISTER</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.space(50)}/>
                    <Input 
                    pholder= "Nama Lengkap" 
                    value={name}  
                    onChangeText={this.handleChange} 
                    state="name" 
                    />
                    <View style={styles.space(50)}/>
                    <Input 
                    pholder= "Email" 
                    autoCapitalize={'none'} 
                    keyboardType={'email-address'}
                    value={email} 
                    onChangeText={this.handleChange} 
                    state="email"
                    />
                    <View style={styles.space(50)}/>
                    <Input 
                    pholder= "Password"
                    secureTextEntry 
                    value={password} 
                    onChangeText={this.handleChange} 
                    state="password" 
                    />
                    <View style={styles.space(50)}/>
                    <Input 
                    pholder= "Password Confirm" 
                    secureTextEntry 
                    value={password_confirmation} 
                    onChangeText={this.handleChange} 
                    state="password_confirmation" />
                    <View style={styles.space(50)}
                    />
                    <ActionButtonRegister 
                    title="Daftar" 
                    onPress={this.handleSubmit} 
                    disabled={disabled} 
                    submit={submit} 
                    />
                </ScrollView>
            </View>
        );
    };
}
const styles ={
wrapper:{
    pages:{
        backgroundColor:colors.background,
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
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
    marginTop:32,
    fontWeight:'normal',
    color:colors.text.textWrite,
    fontSize : 30,
}

};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => dispatch(register(data)),
  };
};
export default connect(null, mapDispatchToProps)(Register);
// export default Register;