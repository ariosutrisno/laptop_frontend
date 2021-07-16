import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { colors } from '../../../utils';

const input = ({
    onChangeText,
    state,
    secureTextEntry,
    keyboardType,
    value,
    pholder,
    multiline,
    numberOfLines,
    editable,
  }) => {
    return (
            <TextInput style={styles.input} 
            value={value}
            keyboardType={keyboardType}
            onChangeText={(val) => onChangeText(state, val)}
            placeholder={pholder}
            secureTextEntry={secureTextEntry}
            multiline={multiline}
            numberOfLines={numberOfLines}
            editable={editable}
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