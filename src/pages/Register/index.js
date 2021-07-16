import { Image, ScrollView, Text, View } from 'react-native';
import React from 'react';
import { Input } from '../../components/atoms';
import { colors } from '../../utils';
import { useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import ActionButtonRegister from './ActionButtonRegister';
import { Registeration } from '../../assets';
import { StatusBarPage } from '../../components';
import { setFormRegister } from '../../redux';


const Register = ({navigation}) =>{
    /* REDUX */
    const {formRegister}= useSelector(state=>state.RegisterReducer)
    const dispatch = useDispatch();
    /* ON INPUTCHANGE */
    const onInputChange = (value, inputType) => {
        dispatch(setFormRegister(inputType,value))
    }
    /* POST DATA REGISTER */
    const register = ()=>{
        console.log('data : ', formRegister)
       
    }
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
            <Image source={Registeration} style={styles.illustration}/>
            <Text style={styles.Texts}>REGISTER</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.space(50)}/>
                <Input placeholder= "Nama Lengkap" value={formRegister.nama} onChangeText={value => onInputChange(value,'nama')} />
                <View style={styles.space(50)}/>
                <Input placeholder= "Email" value={formRegister.email} onChangeText={value => onInputChange(value,'email')} autoCapitalize={'none'} keyboardType={'email-address'} />
                <View style={styles.space(50)}/>
                <Input placeholder= "Password"  value={formRegister.password}  onChangeText={value => onInputChange(value,'password')} secureTextEntry/>
                <View style={styles.space(50)}/>
                <Input placeholder= "Password Confirm" value={formRegister.password_confirm}   onChangeText={value => onInputChange(value,'password_confirm')} secureTextEntry/>
                <View style={styles.space(50)}/>
                <ActionButtonRegister title="Daftar" onPress={()=>{register()}} />
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