import { Image, Text, View,ScrollView,Dimensions,ActivityIndicator } from 'react-native';
import React,{useState,useEffect} from 'react';
import { colors } from '../../utils';
import Carousel from './Corousel'
import { DummyData } from '../ViewData/Data/dummy'
// import {DummyData} from './DataDummy/dummy'
import {imageAPI} from './image'
import { StatusBarPage } from '../../components';
const { width, height } = Dimensions.get('screen');
const DetailLaptop = ({route}) =>{
    console.log('data keluar dari database=======>', route.params)
    return(
        <View style={styles.Pages.Container}>
            <StatusBarPage/>
            <View style={styles.Pages.ContentImg}>
            <Carousel data = {DummyData}/>
            </View>
            <View style={styles.Pages.ContentSpec}>
                <View style={styles.pagesText}>
                    <Text style={styles.Text.one}>{route.params.tipe}</Text>
                    <Text style={styles.Text.two}>{route.params.merek_laptop}</Text>
                    <Text style={styles.Text.three}>{route.params.harga}</Text>
                    <Text style={styles.Text.four}>Spesifikasi</Text>
                    <Text style={styles.Text.five}>Ram : {route.params.ram}</Text>
                    <Text style={styles.Text.five}>Processor : {route.params.processor}</Text>
                    <Text style={styles.Text.five}>Display : {route.params.display}</Text>
                    <Text style={styles.Text.five}>Storage : {route.params.storage}</Text>
                    <Text style={styles.Text.five}>Vga Card : {route.params.vga_card}</Text>
                    <Text style={styles.Text.five}>Harga : {route.params.harga}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = {
    Pages:{
        Container:{
            backgroundColor: colors.Background_White,
            flex:1,
        },
        ContentImg:{
            // backgroundColor: 'yellow',
            justifyContent:'center',
            height:'35%',
        },
        ContentSpec:{
            position: 'absolute',
            borderWidth: 2,
            borderTopLeftRadius:50,
            borderTopRightRadius:50,
            alignItems: 'center',
            justifyContent:'center',
            height:height,
            width:width,
            marginVertical: '60%',
            backgroundColor:colors.Background_White
        }
    },
    pagesText:{
        height:height-50,
    },
    Text:{
        one:{
            textAlign:'center',
            fontSize:25,
            fontWeight:'bold',
            fontFamily:'times',
            right:60,
        },
        two:{
            textAlign:'center',
            fontSize:25,
            fontWeight:'bold',
            fontFamily:'times',
            right:110,
            opacity:.6,
        },
        three:{
            textAlign:'center',
            fontSize:20,
            fontWeight:'bold',
            fontFamily:'times',
            left:width - 240,
            top:40,
            position: 'absolute',
            opacity:.6,
        },
        four:{
            textAlign:'center',
            fontSize:25,
            fontWeight:'bold',
            fontFamily:'times',
            right:90,
            top:20,
        },
        five:{
            textAlign:'center',
            fontSize:20,
            fontWeight:'bold',
            fontFamily:'times',
            top:40,
            right:10,
            textAlign:'justify'
        },
    }

};


export default DetailLaptop;