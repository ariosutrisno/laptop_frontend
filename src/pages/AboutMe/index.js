import React from 'react'
import {  View,Text } from 'react-native'
import { Success } from '../../assets';
import { Button } from '../../components';
import { colors } from '../../utils';

const AboutMe_s = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button type="icon" name="back" onPress={() => navigation.goBack()} />
            <Success style={styles.img2}/>
            <View style={styles.Setting.set}>
                <Text style={styles.Setting.text}>ABOUT ME</Text>
            </View>
        </View>
    )
}


const styles = {
    container:{
        backgroundColor:colors.Background_Default,
        height:465,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    img2:{
        width:240,
        height:240,
        marginHorizontal:230,
        top:70,
    },
    Setting:{
        set:{
            top:90,
            left:20,
        },
        text:{
            fontSize:32,
            fontWeight:'bold',
            fontFamily:'times',
            color:colors.Font_Color_White,
        }
    }
}
export default AboutMe_s;
