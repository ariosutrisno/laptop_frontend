import React from 'react';
import {Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const buttonWelcomeAuth = ({title,onPress}) =>{
    return (
        <TouchableOpacity style={styles.wrapper.components} onPress={onPress}>
            <Text style={styles.text.title} >{title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    wrapper:{
        components:{
            backgroundColor:colors.colorButton, 
            borderRadius:16,
            width: 196, 
            height: 32,
        },
    },
    text:{
        title:{
            fontSize:12, 
            fontWeight:'bold', 
            color:colors.text.Textbutton, 
            textTransform:'uppercase',
            textAlign:'center',
            padding:'4%',
        },
    },
};
export default buttonWelcomeAuth;