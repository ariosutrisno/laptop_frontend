import { Image, Text, View,ScrollView,Dimensions } from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import Carousel from './Corousel'
import { DummyData } from './Data/dummy'
import { StatusBarPage } from '../../components';

const { width, height } = Dimensions.get('screen');
const ViewData = ({navigation}) =>{
    
    return(
        <View style={styles.Pages.Container}>
            <StatusBarPage/>
            <View style={styles.Pages.ContentImg}>
            <Carousel data = {DummyData}/>
            </View>
            <View style={styles.Pages.ContentSpec}>
                <View style={styles.pagesText}>
                    <Text style={styles.Text.one}>Macbook pro 16</Text>
                    <Text style={styles.Text.two}>Apple</Text>
                    <Text style={styles.Text.three}>Rp 5.000.000</Text>
                    <Text style={styles.Text.four}>Spesifikasi</Text>
                    <Text style={styles.Text.five}>
                        - diplay layar : 4k
                        - storage : 1TBsadsafndskjfnkdsjndasjkdnsajnksndkjsdasdsaaskflnsdjkfnkjnfkaslkndskfnkdsxzc sdknfkdsjfnksjfnksxmcv dsbkdsjfjndslnfdsknfkdsnfdskfnksdnfkdsnfds cksdnfjdsnksnkdsnfdsm csdnckdslnfkndawwndkscxzcxmvdskfhkdsnfkdsnfksdfnds dsknfsadsjfksdjfksjdsaldjlsadjas
                    </Text>
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
            left:width - 150,
            top:20,
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
            maxWidth: 400,
            textAlign:'justify'
        },
    }

};
export default ViewData;