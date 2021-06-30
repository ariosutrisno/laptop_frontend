import { Image, ScrollView, Text, View } from 'react-native';
import React from 'react';
import { Input } from '../../components/atoms';
import { colors } from '../../utils';
import { useDispatch,useSelector} from 'react-redux';
import { setForm } from '../../redux';
import axios from 'axios';
import ActionButtonRegister from './ActionButtonRegister';
import { Registeration } from '../../assets';
import { StatusBarPage } from '../../components';


const Register = ({navigation}) =>{
    const {form} = useSelector(state => state.RegisterReducer);
    const dispatch = useDispatch();
    
    const POSTDATA = (screen)=>{
        const dataForAPI ={
            name:(form.name),
            email:(form.email),
            password:(form.password),
            password_confirmation:(form.password_confirmation)
        }
        axios.post('https://adminproject.site/api/user/register',dataForAPI)
        .then(function (response) {
            alert('registrasi success')
            console.log(response);
            navigation.navigate(screen)
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    const onInputChange = (value,inputType) => {
        dispatch(setForm(inputType,value));
    };
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
            <Image source={Registeration} style={styles.illustration}/>
            <Text style={styles.Texts}>REGISTER</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.space(50)}/>
                <Input placeholder= "Nama Lengkap" value={form.name} onChangeText = {value=>onInputChange(value,'name')} />
                <View style={styles.space(50)}/>
                <Input placeholder= "Email" value={form.email} onChangeText = {value=>onInputChange(value,'email')}/>
                <View style={styles.space(50)}/>
                <Input placeholder= "Password" value={form.password} onChangeText = {value=>onInputChange(value,'password')} secureTextEntry/>
                <View style={styles.space(50)}/>
                <Input placeholder= "Password Confirm" value={form.password_confirmation} onChangeText = {value=>onInputChange(value,'password_confirmation')} secureTextEntry/>
                <View style={styles.space(50)}/>
                <ActionButtonRegister title="Daftar" onPress={()=>POSTDATA('Login')} />
            </ScrollView>
            
        </View>
    );
};
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
export default Register;