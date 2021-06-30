import { Image, Text, View,ScrollView,Dimensions } from 'react-native';
import React from 'react';
import Carousel from '../Corousel'
import { DummyData } from '../Data/dummy'
import { StatusBarPage } from '../../../components';
import { colors } from '../../../utils';

const { width, height } = Dimensions.get('screen');
const ViewDataScore = ({navigation}) =>{
    
    return(
        <View style={styles.Pages.Container}>
            <StatusBarPage/>
            <View style={styles.Pages.ContentImg}>
            <Carousel data = {DummyData}/>
            </View>
            <View style={styles.Pages.ContentSpec}>
                <Text>sajdasklj</Text>
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
    }

};
export default ViewDataScore;