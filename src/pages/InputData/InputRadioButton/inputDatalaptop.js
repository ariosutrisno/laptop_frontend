import React ,{ useEffect, useState } from 'react'
import { StyleSheet, Text, View,Dimensions,TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ADDSVG } from '../../../assets'
import { Button, StatusBarPage } from '../../../components';
import { colors } from '../../../utils';
import ButtonInputData from '../buttonInput';
import LinearGradient from 'react-native-linear-gradient';
import {  RadioButton } from 'react-native-paper';
import {connect} from 'react-redux';
import {
    filter,
} from '../../../config/redux/_actions/_laptop/filter';

/* 
import const
*/

const { width, height } = Dimensions.get('screen');


const inputDatalaptop = ({navigation,filter_laptop,state_filter}) => {
    const handleGoTo = (screen) =>{
        navigation.navigate(screen);
    }
    const [isloading,setloading] = useState(false)
    const [isError,setEror] = useState(false)
    const [isRefresh,setRefresh] = useState(false)
    const fetchData = async() =>{
        setloading(true)
        try {
            const response = await filter_laptop()
        } catch (error) {
            setEror(true)
        }
        
        setloading(false)
    } 
    useEffect(() => {
        fetchData()
    }, [])
    
    const [value, setValue] = React.useState({merek:'',ram:'',processor:'',harga:''});
    // console.log('response===================>>>>', value)
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
                <Text style={styles.write}>Pemilihan laptop</Text>
                <View style={styles.space(20)}/>
                <Text style={styles.write1}>Pilih merek laptop</Text>
                <View style={styles.space(10)}/>
                
                    <RadioButton.Group onValueChange={newValue => setValue(prev=> ({...prev,merek:newValue}))} value={value.merek}>
                        <View style={styles.fixToText1}>
                        <RadioButton value='asus'></RadioButton>
                        <Text style={styles.fixToText2} >ASUS</Text>
                        </View>
                        <View style={styles.fixToText1}>
                        <RadioButton value='hp'></RadioButton>
                        <Text style={styles.fixToText2} >HP</Text>
                        </View>
                        <View style={styles.fixToText1}>
                        <RadioButton value='acer'></RadioButton>
                        <Text style={styles.fixToText2} >ACER</Text>
                        </View>
                        <View style={styles.fixToText1}>
                        <RadioButton value='macbook'></RadioButton>
                        <Text style={styles.fixToText2} >MACBOOK</Text>
                        </View>
                        <View style={styles.fixToText1}>
                        <RadioButton value='lenovo'></RadioButton>
                        <Text style={styles.fixToText2} >LENOVO</Text>
                        </View>
                        <View style={styles.fixToText1}>
                        <RadioButton value='dell'></RadioButton>
                        <Text style={styles.fixToText2} >DELL</Text>
                        </View>
                    </RadioButton.Group>
                <View style={styles.space(20)}/>
                <Text style={styles.write1}>Pilih Ram laptop</Text>
                <View style={styles.space(10)}/>
                    <RadioButton.Group onValueChange={newValue => setValue(prev=> ({...prev,ram:newValue}))} value={value.ram}>
                        <View style={styles.fixToText1}>
                        <RadioButton value='4gb'></RadioButton>
                        <Text style={styles.fixToText2}>4GB</Text>
                        </View>
                        <View style={styles.fixToText1}>
                        <RadioButton value='8gb'></RadioButton>
                        <Text style={styles.fixToText2}>8GB</Text>
                        </View>
                        <View style={styles.fixToText1}>
                        <RadioButton value='16gb'></RadioButton>
                        <Text style={styles.fixToText2}>16GB</Text>
                        </View>
                    </RadioButton.Group>
                <View style={styles.space(20)}/>
                <Text style={styles.write1}>Pilih Processor laptop</Text>
                <View style={styles.space(10)}/>
                    <RadioButton.Group onValueChange={newValue => setValue(prev=> ({...prev,processor:newValue}))} value={value.processor}>
                        <View style={styles.fixToText1}>
                        <RadioButton value='corei5'></RadioButton>
                        <Text style={styles.fixToText2}>Core i5</Text>
                        </View>
                        <View style={styles.fixToText1}>
                        <RadioButton value='corei7'></RadioButton>
                        <Text style={styles.fixToText2}>Core i7</Text>
                        </View>
                    </RadioButton.Group>
                <View style={styles.space(20)}/>
                <Text style={styles.write1}>Pilih Harga laptop</Text>
                <View style={styles.space(10)}/>
                    <RadioButton.Group onValueChange={newValue => setValue(prev=> ({...prev,harga:newValue}))} value={value.harga}>
                        <View style={styles.fixToText1}>
                        <RadioButton value='5jt'></RadioButton>
                        <Text style={styles.fixToText2}>Rp 5 - 8jt</Text>
                        </View>
                        <View style={styles.fixToText1}>
                        <RadioButton value='11jt'></RadioButton>
                        <Text style={styles.fixToText2}>Rp 11 - 15jt</Text>
                        </View>
                        <View style={styles.fixToText1}>
                        <RadioButton value='15jt'></RadioButton>
                        <Text style={styles.fixToText2}>Rp {'>='} 15jt </Text>
                        </View>
                    </RadioButton.Group>
                
                <View style={styles.fixToText}>
                <ButtonInputData title="Hasil" onPress={()=>navigation.navigate('RankingLaptop',{
                    filter:value.merek,
                    dataram:value.ram,
                    dataprocessor:value.processor,
                    dataharga:value.harga,
                })} />
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
    fixToText1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 1,
    },
    fixToText2:{
        right: width - 200,
        top: 8,
    },
    fixToText3:{
        right: width - 200,
        top: 8,
    },
    write:{
        fontSize:20,
        fontWeight:'bold', 
        fontFamily:'times'
    },
    write1:{
        fontSize:14,
        fontWeight:'bold', 
        fontFamily:'times'
    },
    space:value =>{
        return{
            height:value,
        };
    },
})
const mapDispatchToProps = (dispatch) => {
    return {
    filter_laptop: () => dispatch(filter()),
    };
};
const mapStateToProps = (state) =>{
    return {
        state_filter: state.filter
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(inputDatalaptop)