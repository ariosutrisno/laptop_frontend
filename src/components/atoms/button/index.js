import React from 'react';
import {Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';
import ButtonIcon from './ButtonIcon';

const button = ({title,onPress,type,name}) =>{
    if(type === 'icon'){
        return <ButtonIcon name={name} onPress={onPress} />
    }
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
            borderRadius:10,
            width: 150, 
            height: 30,
        },
    },
    text:{
        title:{
            fontSize:12, 
            fontWeight:'bold', 
            color:colors.text.Textbutton, 
            textTransform:'uppercase',
            textAlign:'center',
            padding:'5%',
        },
    },
};
export default button;