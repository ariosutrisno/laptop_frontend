import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'
import LinearGradient from 'react-native-linear-gradient';

const ButtonInputData = ({title,onPress}) => {
    return (
        
        <TouchableOpacity style={styles.wrapper.components} onPress={onPress}>
            <Text style={styles.text.titles} >{title}</Text>
        </TouchableOpacity>
    )
}


const styles = ({
    wrapper:{
        components:{
            backgroundColor:colors.colorButton,
            marginTop:15,
            borderRadius:20,
            width:100,
            height: 35,
            borderColor:colors.border,
            marginRight:50,
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
})
export default ButtonInputData
