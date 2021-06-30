import { Text, View,StatusBar,Image,Dimensions } from 'react-native';
import React from 'react';
import ActionButton from './ActionButton';
import { colors } from '../../utils';
import { StatusBarPage } from '../../components';
import { BackgroundWelcome } from '../../assets';
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window');

const WelcomeAuth = ({navigation}) =>{
    const handleGoTo = (screen) =>{
        navigation.navigate(screen);
    }
    return(
        <LinearGradient colors={['#2980B9','#6DD5FA']} style={styles.wrapper.pages}>
            <StatusBarPage/>
            <View style={{justifyContent:'center',alignItems:'center', bottom:'30%',}}>
                <Image source={BackgroundWelcome} style={styles.illustration}/>
                <Text style={styles.text.welcome}> Selamat Datang di laptop </Text>
                <Text style={styles.text.welcome1}> Merekomendasi Laptop Sesuai Pilihan Anda </Text>
            </View>
            <View style={styles.fixToText}>
                <ActionButton  title="Masuk" onPress={()=> handleGoTo('Login')}/>
                <ActionButton  title="Daftar" onPress={()=> handleGoTo('Register')}/>
            </View>
        </LinearGradient>
    );
};

const styles = {
    wrapper:{
        pages:{
            alignItems:'center', 
            flex:1, 
            justifyContent:'center',
        },
    },
    text:{
        welcome:{
            fontSize:18, 
            fontWeight: 'bold', 
            bottom: 25,
        },
        welcome1:{
            fontSize:18, 
            fontWeight: 'bold',
            bottom: 15,
        },
    },
    fixToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: '30%',
    },
    illustration:{
        width:width ,
        height:height /3,
        margin: 10,
        top: 50,
        borderRadius:20
    },
};
export default WelcomeAuth;