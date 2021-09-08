import { Image, Text, View,Button,TextInput,ScrollView,FlatList,TouchableOpacity,Dimensions,Animated } from 'react-native';
import React,{ useEffect, useState }  from 'react';
import { colors } from '../../utils';
import { StatusBarPage } from '../../components';
import { DataTable } from 'react-native-paper';
import {
    UTILITY,
} from '../../config/redux/_actions/_list_data_hitung/data_hitung';

import {connect} from 'react-redux';




const Utility = ({list_Utility,utility_state}) =>{
    /*
    *
    * DATA GET Utility 
    */
   
// const optionsPerPage = [alternatif_state.data];
const [isloading,setloading] = useState(false)
const [isError,setEror] = useState(false)
const [isRefresh,setRefresh] = useState(false)
const fetchData = async() =>{
    setloading(true)
    try {
        await list_Utility()
    } catch (error) {
        setEror(true)
    }
    
    setloading(false)
}
useEffect(() => {
    let isSubscribed = true
    if (isSubscribed) {
        fetchData()
      }
      return () => isSubscribed = false
}, [])

console.log('data res========================>>',utility_state.data.alternatif)
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
                <View style={styles.lineText}>
                    <View style={styles.row}>
                    <Text style={styles.texts}>NILAI UTILITY</Text>
                    </View>
                </View>
                <View style={styles.wrapper.components}>
                    <View style={styles.tables}> 
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title >Alternatif</DataTable.Title>
                                <DataTable.Title >RAM</DataTable.Title>
                                <DataTable.Title >PROCESSOR</DataTable.Title>
                                <DataTable.Title >DISPLAY</DataTable.Title>
                                <DataTable.Title >STORAGE</DataTable.Title>
                                <DataTable.Title >VGA CARD</DataTable.Title>
                                <DataTable.Title >HARGA</DataTable.Title>
                            </DataTable.Header>
                            {utility_state?.data?.alternatif?.map((item,key) => (
                            <DataTable.Row key={key.toString()}>
                                <DataTable.Cell> { item.alternatif} </DataTable.Cell>
                                <DataTable.Cell> {((item.nilai_ram - utility_state.data.min1) / (utility_state.data.max1 - utility_state.data.min1)).toFixed(3) } </DataTable.Cell>
                                <DataTable.Cell> {((item.nilai_processor - utility_state.data.min2) / (utility_state.data.max2 - utility_state.data.min2)).toFixed(3) } </DataTable.Cell>
                                <DataTable.Cell> {((item.nilai_display - utility_state.data.min3) / (utility_state.data.max3 - utility_state.data.min3)).toFixed(3) } </DataTable.Cell>
                                <DataTable.Cell> {((item.nilai_storage - utility_state.data.min4) / (utility_state.data.max4 - utility_state.data.min4)).toFixed(3) } </DataTable.Cell>
                                <DataTable.Cell> {((item.nilai_vga - utility_state.data.min5) / (utility_state.data.max5 - utility_state.data.min5)).toFixed(3) } </DataTable.Cell>
                                <DataTable.Cell> {((item.nilai_harga - utility_state.data.min6) / (utility_state.data.max6 - utility_state.data.min6)).toFixed(3) } </DataTable.Cell>
                            </DataTable.Row>
                            ))}
                        </DataTable>
                    </View>
                </View>
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
            flex:1,
            borderTopLeftRadius:50,
            borderTopRightRadius:50,
            justifyContent:'center',
        }
    },
    tables:{
        bottom:150,
    },
    lineText:{
        flexDirection: 'row',
        paddingVertical: 50,
        paddingHorizontal: 35,
    },
    texts:{
        fontWeight:'bold',
        fontSize: 20,
        fontFamily:'times',
        color:colors.White,

        
    },
    illustration:{
        width:75,
        height:75,
        marginTop:8,
        
    },
    
    row:{
        justifyContent:'center'
    },
    
    Images:{
        illustrations:{
            width:100,
            height:100,
            position:'absolute',
            top:10,
            left:10,
        
            
        },
        
        //TEXT
        texts:{
            position: 'absolute',
            top:100,
            left:100,
            fontSize:14,
            fontWeight:'bold',
            fontFamily:'times',
        },
        

    },
    
};
const mapDispatchToProps = (dispatch) => {
    return {
    list_Utility: () => dispatch(UTILITY()),
    };
};
const mapStateToProps = (state) =>{
    return {
        utility_state: state.utility
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Utility);