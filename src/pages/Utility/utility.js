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
        const response = await list_Utility()
    } catch (error) {
        setEror(true)
    }
    
    setloading(false)
}
useEffect(() => {
    fetchData()
}, [])
// console.log('respons data========>>>>', utility_state.data.min1)
// const [page, setPage] = React.useState(alternatif_state.data[0]);
// const [itemsPerPage, setItemsPerPage] = React.useState(alternatif_state.data[0]);

//   React.useEffect(() => {
//     setPage(0);
//   }, [itemsPerPage]);
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
                                <DataTable.Title >c1</DataTable.Title>
                                <DataTable.Title >c2</DataTable.Title>
                                <DataTable.Title >c3</DataTable.Title>
                                <DataTable.Title >c4</DataTable.Title>
                                <DataTable.Title >c5</DataTable.Title>
                                <DataTable.Title >c6</DataTable.Title>
                            </DataTable.Header>
                            {utility_state.data.alternatif.map((item, key) => (
                            <DataTable.Row key={key}>
                                <DataTable.Cell> { item.alternatif} </DataTable.Cell>
                                <DataTable.Cell> {((item.c1 - utility_state.data.min1) / (utility_state.data.max1 - utility_state.data.min1)).toFixed(3) } </DataTable.Cell>
                                <DataTable.Cell> {((item.c2 - utility_state.data.min2) / (utility_state.data.max2 - utility_state.data.min2)).toFixed(3) } </DataTable.Cell>
                                <DataTable.Cell> {((item.c3 - utility_state.data.min3) / (utility_state.data.max3 - utility_state.data.min3)).toFixed(3) } </DataTable.Cell>
                                <DataTable.Cell> {((item.c4 - utility_state.data.min4) / (utility_state.data.max4 - utility_state.data.min4)).toFixed(3) } </DataTable.Cell>
                                <DataTable.Cell> {((item.c5 - utility_state.data.min5) / (utility_state.data.max5 - utility_state.data.min5)).toFixed(3) } </DataTable.Cell>
                                <DataTable.Cell> {((item.c6 - utility_state.data.min6) / (utility_state.data.max6 - utility_state.data.min6)).toFixed(3) } </DataTable.Cell>
                            </DataTable.Row>
                            ))}
                            {/* <DataTable.Pagination
                                // page={page}
                                // numberOfPages={3}
                                // onPageChange={(page) => setPage(page)}
                                // label="1-2 of 6"
                                // optionsPerPage={optionsPerPage}
                                // itemsPerPage="2"
                                // setItemsPerPage={setItemsPerPage}
                                // showFastPagination
                                // optionsLabel={'Rows per page'}
                            /> */}
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