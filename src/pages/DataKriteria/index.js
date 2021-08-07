import { Image, Text, View,Button,TextInput,ScrollView,FlatList,TouchableOpacity,Dimensions,Animated } from 'react-native';
import React,{ useEffect, useState }  from 'react';
import { colors } from '../../utils';
import { StatusBarPage } from '../../components';
import {connect} from 'react-redux';
import {
    Kriteria,
} from '../../config/redux/_actions/_list_data_hitung/data_hitung';
import {createAppContainer} from 'react-navigation'

const DataKriteria = ({list_kriteria,dd}) =>{
    /* 
    * data
    * isLoading
    * isEror
    * isRefresh
    */
    const [isloading,setloading] = useState(false)
    const [isError,setEror] = useState(false)
    const [isRefresh,setRefresh] = useState(false)
    const scrollY = React.useRef(new Animated.Value(8)).current;
    
    
    const fetchData = async() =>{
            setloading(true)
            try {
                const response = await list_kriteria()
            } catch (error) {
                setEror(true)
            }
            
            setloading(false)
        }
        useEffect(() => {
        
            fetchData()
        }, [])
        // console.log('response============>>>>',dd)
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
                <View style={styles.lineText}>
                    <View style={styles.row}>
                    <Text style={styles.texts}>DATA KRITERIA</Text>
                    </View>
                </View>
                <View style={styles.wrapper.components}>
                    <Animated.FlatList
                        data={dd?.data}
                        keyExtractor={item=>item.idx_kriteria.toString()}
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset:{y:scrollY}}}],
                            {useNativeDriver:true}
                        )}
                        contentContainerStyle={{ 
                            padding:SPACING,
                        }}
                        renderItem={({item, index}) => {
                            const inputRange = [
                                -1,
                                0,
                                ITEM_SIZE * index,
                                ITEM_SIZE * (index + 2)
                            ]

                            const scale =scrollY.interpolate({
                                inputRange,
                                outputRange:[1,1,1,0]
                            })

                            return <Animated.View style={{flexDirection:'row', padding:SPACING, marginBottom:SPACING, backgroundColor:'#00FF7F', borderRadius:25, 
                            top:25,
                            transform: [{scale}]
                            }}>
                            <Image
                                source={require('../../assets/illustrations/statistics.png')}
                                style={{ 
                                    width: AVATAR_SIZE, 
                                    height: AVATAR_SIZE, 
                                    borderRadius: AVATAR_SIZE,
                                    marginRight: SPACING / 2,
                                }}
                            />
                            <View>
                                <Text style={{fontSize:14, fontWeight:'700'}}> ID KRITERIA : {item.kriteria_id} </Text>
                                <Text style={{fontSize:14, opacity:.7, fontWeight:'700'}}> NAMA KRITERIA : {item.nama_kriteria}</Text>
                                <Text style={{fontSize:14, opacity:.7,fontWeight:'700',color:'black'}}> BOBOT : {item.bobot}</Text>
                            </View>
                            </Animated.View>
                        }}
                    />
                    
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

// const { width, height } = Dimensions.get('screen');


const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING *3;

const mapDispatchToProps = (dispatch) => {
    return {
    list_kriteria: () => dispatch(Kriteria()),
    };
};
const mapStateToProps = (state) =>{
    return {
        dd: state.datakriteria
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataKriteria);