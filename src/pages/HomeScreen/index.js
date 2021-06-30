import { Image, Text, View,Button,TextInput,ScrollView,Dimensions,TouchableOpacity,Alert,TouchableHighlight } from 'react-native';
import React,{ useEffect, useState }  from 'react';
import { colors } from '../../utils';
import { ImageDummy,SquarePng,Calculator,
    DataAlternatif,
    DataKriteria,
    DataRekomenSVG,DataKebutuhan,DataLaptopSVG } from '../../assets';
import { StatusBarPage } from '../../components';
import { Card } from 'react-native-elements/dist/card/Card';
import axios from 'axios';


const { width, height } = Dimensions.get('screen');
const HomeScreen = ({navigation}) =>{
    const handleGoTo = (screen) =>{
        navigation.navigate(screen);
    }
    
    
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
                <View style={styles.lineText}>
                    <Image source={ImageDummy} style={styles.illustration}/>
                    <View style={styles.row}>
                    <Text style={styles.texts}>WELCOME !</Text>
                    <Text style={styles.texts}>ARIO SUTRISNO </Text>
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
                        }}onPress={()=> handleGoTo('DataKriteria')}>
                            <Image source={SquarePng} style={styles.Images.illustrations}/>
                            <DataKriteria style={styles.Images.SVG2}/>
                            <Text style={styles.Images.texts2}>DATA KRITERIA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginVertical:10,
                        width:200,
                        height:200,
                        }} onPress={()=> handleGoTo('DataAlternatif')}>
                            <Image source={SquarePng} style={styles.Images.illustrations}/>
                            <DataAlternatif style={styles.Images.SVG3}/>
                            <Text style={styles.Images.texts3}>DATA</Text><Text style={styles.Images.texts}>ALTERNATIF</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginVertical:10,
                        width:200,
                        height:200,
                        }} onPress={()=> handleGoTo('DataPerhitungan')}>
                            <Image source={SquarePng} style={styles.Images.illustrations}/>
                            <Calculator style={styles.Images.SVG4}/>
                            <Text style={styles.Images.texts4}>DATA </Text><Text style={styles.Images.textsPer}> PERHITUNGAN </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginVertical:10,
                        width:200,
                        height:200,
                        }} onPress={()=> handleGoTo('DataPerhitungan')}>
                            <Image source={SquarePng} style={styles.Images.illustrations}/>
                            <Calculator style={styles.Images.SVG4}/>
                            <Text style={styles.Images.texts4}>DATA </Text><Text style={styles.Images.textsPer}> NILAI UTILITY </Text>
                        </TouchableOpacity>
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
            right: 40,
            bottom:30,
            fontSize:16,
            fontWeight:'bold',
            fontFamily:'times',
            textAlign: 'center',
            
        },
        texts3:{
            position: 'absolute',
            right: 80,
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
export default HomeScreen;