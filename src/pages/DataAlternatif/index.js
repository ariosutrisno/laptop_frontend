import { Image, Text, View,Button,TextInput,ScrollView,FlatList,TouchableOpacity,Dimensions,Animated } from 'react-native';
import React,{ useEffect, useState }  from 'react';
import { colors } from '../../utils';
import { StatusBarPage } from '../../components';
import { DataTable } from 'react-native-paper';
import {
    Alternatif,
} from '../../config/redux/_actions/_list_data_hitung/data_hitung';

import {connect} from 'react-redux';




const DataAlternatif = ({list_Alternatif,alternatif_state}) =>{
    /*
    *
    * DATA GET ALTERNATIF 
    */
   
// const optionsPerPage = [alternatif_state.data];
const [isloading,setloading] = useState(false)
const [isError,setEror] = useState(false)
const [isRefresh,setRefresh] = useState(false)
const fetchData = async() =>{
    setloading(true)
    try {
        const response = await list_Alternatif()
    } catch (error) {
        setEror(true)
    }
    
    setloading(false)
}
useEffect(() => {
    fetchData()
}, [])
// console.log('response=====>>>>',alternatif_state)
const [page, setPage] = React.useState(alternatif_state.data[0]);
const [itemsPerPage, setItemsPerPage] = React.useState(alternatif_state.data[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
                <View style={styles.lineText}>
                    <View style={styles.row}>
                    <Text style={styles.texts}>DATA ALTERNATIF</Text>
                    </View>
                </View>
                <View style={styles.wrapper.components}>
                    <View style={styles.tables}> 
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title >Alternatif</DataTable.Title>
                                <DataTable.Title >Merk Laptop</DataTable.Title>
                                <DataTable.Title >c1</DataTable.Title>
                                <DataTable.Title >c2</DataTable.Title>
                                <DataTable.Title >c3</DataTable.Title>
                                <DataTable.Title >c4</DataTable.Title>
                                <DataTable.Title >c5</DataTable.Title>
                                <DataTable.Title >c6</DataTable.Title>
                            </DataTable.Header>
                            {alternatif_state.data.map((item, key) => (
                            <DataTable.Row key={key}>
                                <DataTable.Cell>{item.alternatif}</DataTable.Cell>
                                <DataTable.Cell>{item.datalaptop}</DataTable.Cell>
                                <DataTable.Cell>{item.c1}</DataTable.Cell>
                                <DataTable.Cell>{item.c2}</DataTable.Cell>
                                <DataTable.Cell>{item.c3}</DataTable.Cell>
                                <DataTable.Cell>{item.c4}</DataTable.Cell>
                                <DataTable.Cell>{item.c5}</DataTable.Cell>
                                <DataTable.Cell>{item.c6}</DataTable.Cell>
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
    list_Alternatif: () => dispatch(Alternatif()),
    };
};
const mapStateToProps = (state) =>{
    return {
        alternatif_state: state.alternatif
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataAlternatif);