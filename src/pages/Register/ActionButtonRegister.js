import React from 'react';
import {Text} from 'react-native';
import { useDispatch,useSelector} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../utils';


const ActionButtonRegister = ({title,onPress}) =>{
    const [errors,setErrors] = React.useState({})
    return (
        <TouchableOpacity style={styles.wrapper.components} onPress={onPress} >
            <Text style={styles.text.titles} >{title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    wrapper:{
        components:{
            backgroundColor:colors.colorButton, 
            borderRadius:10,
            height: 35,
            width:300,
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
export default ActionButtonRegister;