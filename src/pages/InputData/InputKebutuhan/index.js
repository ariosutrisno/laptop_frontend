import React from 'react'
import { StyleSheet, Text, View,Dimensions,TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ADDSVG } from '../../../assets'
import { Button, StatusBarPage } from '../../../components';
import { colors } from '../../../utils';
import {Picker} from '@react-native-picker/picker';
import ButtonInputData from '../buttonInput';
import LinearGradient from 'react-native-linear-gradient';
/* 
import const
*/

const { width, height } = Dimensions.get('screen');


const InputKebutuhan = ({navigation}) => {
    const handleGoTo = (screen) =>{
        navigation.navigate(screen);
    }
    const [selectedLanguage, setSelectedLanguage] = React.useState();
    return (
        <View style={styles.pages.container}>
            <ScrollView
            style={{ flex:1 }}
            showsVerticalScrollIndicator={false}>
            <StatusBarPage/>
            <Button type="icon" name="back" onPress={() => navigation.goBack()} />
            <ADDSVG height={'20%'} marginHorizontal={'25%'} top={25}/>
            <View style={styles.pages.contentWhite}/>
                <LinearGradient colors={['#9CECFB', '#65C7F7','#0052D4']} style={styles.pages.squareData}>
                <Text style={styles.write}>INPUT DATA REQUEST CUSTOMER</Text>
                    <Picker
                        selectedValue={selectedLanguage}
                        style={styles.Picker}
                        prompt="Silahkan Pilih Merek"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="..." value={null} />
                        <Picker.Item label="Asus" value="js" />
                        <Picker.Item label="HP" value="js" />
                        <Picker.Item label="ACER" value="js" />
                        <Picker.Item label="DELL" value="js" />
                        <Picker.Item label="MACBOOK" value="js" />
                        <Picker.Item label="LENOVO" value="js" />
                        <Picker.Item label="MSI" value="js" />
                    </Picker>
                    <TextInput
                    style={styles.inputData} 
                    placeholder="HARGA LAPTOP"
                    />
                    <View style={styles.fixToText}>
                    <ButtonInputData title="Lanjut"/>
                    <ButtonInputData title="Batal" onPress={()=> navigation.goBack()}/>
                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
    )
}


const styles = ({
    pages:{
        container:{
            backgroundColor:colors.Background_Default,
            flex:1,
        },
        contentWhite:{
            backgroundColor:colors.Background_White,
            height:height + 300,
            flex:1,
        },
        squareData:{
            // backgroundColor:'#4169E1',
            position: 'absolute',
            height:height,
            width:'85%',
            left:'7.5%',
            marginVertical:'60%',
            borderRadius:30,
            paddingTop:10,
            paddingLeft: 30,
        }
    },
    Picker:{
        width:'70%',
    },
    inputData:{
        borderWidth:1,
        borderRadius:10,
        backgroundColor: colors.Background_White,
        width:250,
        color:colors.Font_Color_Black,
        marginBottom:10,
        marginTop:10,
    },
    fixToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 10,
    },
    write:{
        fontSize:20,
        fontWeight:'bold', 
        fontFamily:'times'
    }
})
export default InputKebutuhan
