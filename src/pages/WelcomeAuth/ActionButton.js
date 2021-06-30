import { Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import {ButtonWelcomeAuth } from '../../components';


const ActionButton = ({title,onPress}) =>{
    return(
    <View style={styles.wrapper.components} >
        <ButtonWelcomeAuth title={title} onPress={onPress} />
    </View>
    );
};

const styles = {
    wrapper:{
        components:{
            padding: 50,
            textAlign:'center',
        },
        
    },
    text:{
        descr:{
            fontSize: 18, 
            textAlign:'center',
        }
        
    },
};
export default ActionButton;