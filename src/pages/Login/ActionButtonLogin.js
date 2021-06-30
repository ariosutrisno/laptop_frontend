import React from 'react';
import {Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../utils';


const ActionButtonLogin = ({title,onPress}) =>{
    return (
        <TouchableOpacity style={styles.wrapper.components} onPress={onPress}>
            <Text style={styles.text.titles} >{title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    wrapper:{
        components:{
            backgroundColor:colors.colorButton, 
            borderRadius:16,
            width:300,
            height: 32,
            borderColor:colors.border,
        },
    },
    text:{
        titles:{
            fontSize:12, 
            fontWeight:'bold', 
            color:colors.text.Textbutton,
            textTransform:'uppercase',
            textAlign:'center',
            padding:10,
        },
    },
};
export default ActionButtonLogin;