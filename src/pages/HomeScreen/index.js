import { Image, Text, View,Button,TextInput,ScrollView,Dimensions,TouchableOpacity,Alert,TouchableHighlight } from 'react-native';
import React,{ useEffect, useState }  from 'react';
import { colors } from '../../utils';
import { ImageDummy,SquarePng,
    DataAlternatif,
    DataKriteria,
    DataRekomenSVG,DataLaptopSVG } from '../../assets';
import { StatusBarPage } from '../../components';
import {connect} from 'react-redux';
import {
    User,
} from '../../config/redux/_actions/_auth/auth';


const { width, height } = Dimensions.get('screen');
const HomeScreen = ({navigation,state_user,list_user}) =>{
    const handleGoTo = (screen) =>{
        navigation.navigate(screen);
    }
    const [isloading,setloading] = useState(false)
    const [isError,setEror] = useState(false)
    const [isRefresh,setRefresh] = useState(false)

    const fetchData = async() =>{
        setloading(true)
        try {
            const response = await list_user()
        } catch (error) {
            setEror(true)
        }
        
        setloading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
    // console.log('response===========>>',state_user.data)
    /* ALERT BUTTON PERHITUNGAN DAN DATA KRITERI */
    const alertPerhitungan = () => {
        Alert.alert(
            "",
            "Apakah Anda ingin melihat informasi tentang perhitungan ?",
            [
                {
                text: "Cancel",
                cancelable: true,
                style: "cancel"
                },
                { text: "OK", onPress: () => handleGoTo('DataAlternatif') }
            ]
        )
    }
    const alertKriteria = () => {
        Alert.alert(
            "",
            "Apakah Anda ingin melihat informasi tentang kriteria laptop ?",
            [
                {
                text: "Cancel",
                cancelable: true,
                style: "cancel"
                },
                { text: "OK", onPress: () => handleGoTo('DataKriteria') }
            ]
        )
    }
    
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
                <View style={styles.lineText}>
                    <Image source={ImageDummy} style={styles.illustration}/>
                    <View style={styles.row}>
                        <Text style={styles.texts}>WELCOME !</Text>
                        <Text style={styles.texts}>{state_user.data.name}</Text>
                        <Text style={styles.texts}>{state_user.data.email}</Text>
                    </View>
                </View>
                
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper.components}>
                    <View style={{ flexDirection: "row" ,justifyContent: 'space-between', flexWrap: 'wrap',flex:1,}}>
                        <TouchableOpacity style={{ marginVertical:10,
                        width:200,
                        height:200,
                        }}onPress={()=> handleGoTo('List')}>
                            <Image source={SquarePng} style={styles.Images.illustrations}/>
                            <DataLaptopSVG style={styles.Images.SVG}/>
                            <Text style={styles.Images.texts}>DATA LAPTOP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginVertical:10,
                        width:200,
                        height:200,
                        }} onPress={()=> handleGoTo('RekomendasiLaptop')}>
                            <Image source={SquarePng} style={styles.Images.illustrations}/>
                            <DataRekomenSVG style={styles.Images.SVG1}/>
                            <Text style={styles.Images.texts1}>DATA </Text><Text style={styles.Images.textsSa}>REQUEST</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginVertical:10,
                        width:200,
                        height:200,
                        }}onPress={alertKriteria}>
                            <Image source={SquarePng} style={styles.Images.illustrations}/>
                            <DataKriteria style={styles.Images.SVG2}/>
                            <Text style={styles.Images.texts2}>KRITERIA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginVertical:10,
                        width:200,
                        height:200,
                        }} onPress={alertPerhitungan}>
                            <Image source={SquarePng} style={styles.Images.illustrations}/>
                            <DataAlternatif style={styles.Images.SVG3}/>
                            <Text style={styles.Images.texts3}>PERHITUNGAN</Text><Text style={styles.Images.texts}></Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={{ marginVertical:10,
                        width:200,
                        height:200,
                        }} onPress={()=> handleGoTo('DataPerhitungan')}>
                            <Image source={SquarePng} style={styles.Images.illustrations}/>
                            <Calculator style={styles.Images.SVG4}/>
                            <Text style={styles.Images.texts4}>DATA </Text><Text style={styles.Images.textsPer}> PERHITUNGAN </Text>
                        </TouchableOpacity> */}
                        {/* <TouchableOpacity style={{ marginVertical:10,
                        width:200,
                        height:200,
                        }} onPress={()=> handleGoTo('Utility')}>
                            <Image source={SquarePng} style={styles.Images.illustrations}/>
                            <Calculator style={styles.Images.SVG4}/>
                            <Text style={styles.Images.texts4}>DATA </Text><Text style={styles.Images.textsPer}> NILAI UTILITY </Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = {
    wrapper:{
        pages:{ 
            backgroundColor:colors.background,
            flex:1,
        },
        components:{
            backgroundColor:colors.Square_Dashboard,
            height:height,
            borderTopLeftRadius:50,
            borderTopRightRadius:50,
            alignItems: 'center',
            justifyContent:'center',
        }
    },
    lineText:{
        flexDirection: 'row',
        paddingVertical: 50,
        paddingHorizontal: 35,
    },
    texts:{
        fontWeight:'normal',
        fontSize: 14,
        
    },
    illustration:{
        width:75,
        height:75,
        marginTop:8,
        
    },
    
    row:{
        paddingLeft: 20,
        justifyContent:'center'
    },
    
    Images:{
        illustrations:{
            width:200,
            height:200,
        },
        //TEXT
        texts:{
            position: 'absolute',
            right: 50,
            bottom:20,
            fontSize:16,
            fontWeight:'bold',
            fontFamily:'times',
            textAlign: 'center'
        },
        texts1:{
            position: 'absolute',
            right: 80,
            top: 130,
            bottom:20,
            fontSize:16,
            fontWeight:'bold',
            fontFamily:'times',
            textAlign: 'center',
            
        },
        texts2:{
            position: 'absolute',
            right: 65,
            bottom:30,
            fontSize:16,
            fontWeight:'bold',
            fontFamily:'times',
            textAlign: 'center',
            
        },
        texts3:{
            position: 'absolute',
            right: 40,
            bottom:40,
            fontSize:16,
            fontWeight:'bold',
            fontFamily:'times',
            textAlign: 'center',
            
        },
        texts4:{
            position: 'absolute',
            right: 80,
            bottom:40,
            fontSize:16,
            fontWeight:'bold',
            fontFamily:'times',
            textAlign: 'center',
            
        },
        
        textsSa:{
            position: 'absolute',
            left: 64,
            bottom:20,
            fontSize:16,
            fontWeight:'bold',
            fontFamily:'times',
            textAlign: 'center',
            flexShrink: 2 

        },
        textsPer:{
            position: 'absolute',
            right: 38,
            bottom:20,
            fontSize:16,
            fontWeight:'bold',
            fontFamily:'times',
            textAlign: 'center',
        },
        SVG:{
            top:28,
            right:60,
            position: 'absolute',
        },
        SVG1:{
            top:25,
            right:45,
            position: 'absolute',
        },
        SVG2:{
            top:30,
            left:60,
            position: 'absolute',
        },
        SVG3:{
            top:20,
            right:45,
            position: 'absolute',
        },
        SVG4:{
            top:28,
            left:60,
            position: 'absolute',
        },
        SVG5:{
            top:28,
            left:50,
            position: 'absolute',
        },
        

    },
    
};

const mapDispatchToProps = (dispatch) => {
    return {
    list_user: () => dispatch(User()),
    };
};
const mapStateToProps = (state) =>{
    return {
        state_user: state.profile
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);