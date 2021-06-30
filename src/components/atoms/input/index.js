import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { colors } from '../../../utils';

const input = ({placeholder,...rest}) => {
    return (
            <TextInput style={styles.input} 
            placeholder={placeholder} 
            placeholderTextColor={styles.input}
            {...rest}
            />
    )
}


const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderRadius:25,
        paddingVertical:12,
        paddingHorizontal:18,
        fontSize:12,
        width:300,
        backgroundColor:colors.inputColor,
        borderColor:colors.border,
        fontWeight: 'bold',
        
    },
    
}); 

    export default input;