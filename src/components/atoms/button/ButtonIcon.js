import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconBack } from '../../../assets'

const ButtonIcon = ({...rest}) => {
    return (
    <TouchableOpacity {...rest}> 
        {rest.name === 'back' && <IconBack style={styles.button}/>}
    </TouchableOpacity>
    );
}

const styles = {
    button:{
        left:20,
        marginTop:25,
    }
}
export default ButtonIcon;


