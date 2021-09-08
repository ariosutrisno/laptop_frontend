import React, { useEffect } from 'react'
import { StyleSheet, Text, View,Dimensions,TextInput,Alert,ToastAndroid } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ADDSVG } from '../../../assets'
import { Button, StatusBarPage } from '../../../components';
import { colors } from '../../../utils';
import ButtonInputData from '../buttonInput';
import {connect} from 'react-redux';
import {
    add_req,
} from '../../../config/redux/_actions/_rekomen/rekomen';
import LinearGradient from 'react-native-linear-gradient';
/* 
import const
*/

const { width, height } = Dimensions.get('screen');


const InputKebutuhan = ({navigation,rekomenAdd}) => {
    const handleGoTo = (screen) =>{
        navigation.navigate(screen);
    }
    const [input, setInput] = React.useState({
        merek:'',
        harga:'',
        disabled: true,
        submit: false,
    });
    const onHandleChange = (stateProps) => (text) => {
        setInput((oldState)=>({
            ...oldState,
            [stateProps]:text,
        }
        ))
    }
    const Sendsubmit = async() =>{
        const state = input;
        const param = {
        merek_laptop: state.merek,
        harga_laptop: state.harga,
        };
        setTimeout(() => data(), 3000);
        try {
            await rekomenAdd(param).then((res) => {
                console.log('RESULT', res.value);
            });
            ToastAndroid.show('Data Berhasil Ditambahkan', ToastAndroid.BOTTOM);
        } catch (error) {
            ToastAndroid.show('Data Gagal Ditambahkan', ToastAndroid.BOTTOM);
            setInput({
                submit:false,
            })
            console.log('ERROR', error);
        }
    } 
    const validation = () =>{
        const state = input;
        if (state.merek == '') {
        setInput({
            disabled: true,
        });
        return false;
        } else if (state.harga == '') {
        setInput({
            disabled: true,
        });
        return false;
        }  else {
        setInput({
            disabled: false,
        }); 
        return true;
        }
    }
    const handleSubmit = () =>{
        setInput({
            submit: true,
        },validation());
        setTimeout(() =>Sendsubmit(), 500);
    }
    const data = () =>{
        handleGoTo('RekomendasiLaptop')
    }
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
                <View style={styles.space(20)}/>
                <Text style={styles.fixToText2} >MEREK LAPTOP</Text>
                    <TextInput
                    style={styles.inputData} 
                    placeholder="Merek laptop"
                    value={input.merek}
                    onChangeText={onHandleChange("merek")}
                    />
                    <View style={styles.space(20)}/>
                    <Text style={styles.fixToText2} >HARGA LAPTOP</Text>
                    <TextInput
                    style={styles.inputData} 
                    placeholder="HARGA LAPTOP"
                    value={input.harga}
                    onChangeText={onHandleChange("harga")}
                    />
                    <View style={styles.fixToText}>
                    <ButtonInputData title="Lanjut" onPress={handleSubmit} 
                    disabled={input.disabled}
                    submit={input.submit}
                    />
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
    },
    fixToText2:{
        fontWeight:'bold', 
        color:colors.Font_Color_Black,
    },
    space:value =>{
        return{
            height:value,
        };
    },
})
const mapDispatchToProps = (dispatch) => {
    return {
      rekomenAdd: (data) => dispatch(add_req(data)),
    };
  };
export default connect(null, mapDispatchToProps)(InputKebutuhan);
