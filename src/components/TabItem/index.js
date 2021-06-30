import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../utils';
import { IconHomesActive,IconHomes, List,ListActive,IconUser,IconUserActive,RankingActive,Ranking } from '../../assets';

const TabItem = ({label, isFocused,onLongPress,onPress}) => {

    const Icon = () =>{
        if (label === "Home") {
            return isFocused ? <IconHomesActive/> : <IconHomes/>; 
        }
        if (label === "List") {
            return isFocused ? <ListActive/> : <List/>;
        }
        if (label === "Akun") {
            return isFocused ? <IconUserActive/> : <IconUser/>
        }
        if (label === "Ranking") {
            return isFocused ? <RankingActive/> : <Ranking/>;
        }
    }
    return (
        <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={ styles.container }
    >
        <View style={styles.icons}>
            <Icon />
        </View>
        <Text style={ styles.text}>
        {label}
        </Text>
    </TouchableOpacity>
    )
}

export default TabItem;

const styles = {
    container:{
        alignContent:'center',
        padding:5,
    },
    text:{
        color: colors.default,
        textAlign:'center',
    },
    icons:{
        justifyContent: 'space-around',
        paddingLeft:1,
        paddingBottom:2,
    }
}
