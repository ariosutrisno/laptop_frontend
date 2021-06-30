import React, { useEffect } from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View,StatusBar,Button,Image,ImageBackground,Dimensions } from 'react-native'
import { colors } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { SplashScreen,VectorScreen,Animasi } from '../../assets';

const { width, height } = Dimensions.get('window');

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeAuth');
        },3000);
    });
    const [hidden, setHidden] = useState(false);

    return (
            <LinearGradient colors={['#005C97', '#2c3e50']} style={styles.container}  >
                        <StatusBar hidden/>
                    <View >
                        <Image source={VectorScreen} style={styles.image}/>
                        <Image source={VectorScreen} style={styles.image1}/>
                    </View>
                        <Image source={Animasi} style={styles.illustration}/>
            </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        width:width,
        marginVertical: '3%',
        bottom: '4%',
      },
    image1: {
        resizeMode: "cover",
        justifyContent: "center",
        width:width,
        top:'2%'
      },
      illustration:{
        position:'absolute',
        left:'12%',
        bottom:'50%'
      },
     
})
export default Splash;
