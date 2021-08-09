import { Image, Text, View,Button,TextInput,ScrollView,FlatList,TouchableOpacity,Dimensions,Animated } from 'react-native';
import React,{ useEffect, useState } from 'react';
import { colors } from '../../utils';
import { StatusBarPage } from '../../components';
import {connect} from 'react-redux';
import {
    PERHITUNGAN,
} from '../../config/redux/_actions/_list_data_hitung/data_hitung';
import {API, setAuthToken} from '../../config/Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('screen');


const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING *3;



const RankingLaptop = ({route,perhitungan, perhitungan_state}) =>{
    const [isloading,setloading] = useState(false)
    const [isError,setEror] = useState(false)
    const [isRefresh,setRefresh] = useState(false)
    const {filter,dataram,dataprocessor,dataharga} = route.params
    const [datarank,setDatarank] = useState()
    const fetchData = async() =>{
            setloading(true)
            try {
                const token = await AsyncStorage.getItem('token');
                setAuthToken(token);
                const dataRAnk = await API.get(`user/ranking?filter=${filter}&ram=${dataram}&processor=${dataprocessor}&harga=${dataharga}`)
                console.log('response data=====>>>>', dataRAnk.data.data)
                setDatarank(dataRAnk.data.data)
                return dataRAnk.data.data;
            } catch (error) {
                console.log(error)
                setEror(true)
            }
            
            setloading(false)
        }
        useEffect(() => {
            fetchData()
            
        }, [])
        
        console.log('response dataranking==========================>>>>>>',datarank)
const scrollY = React.useRef(new Animated.Value(8)).current;
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
                <View style={styles.lineText}>
                    <View style={styles.row}>
                    <Text style={styles.texts}>DATA RANKING</Text>
                    </View>
                </View>

                <View style={styles.wrapper.components}>
            
                    <Animated.FlatList
                        data={datarank}
                        keyExtractor={item=>item.idx_perhitungan.toString()}
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
                            
                            // const rank = perhitungan_state?.data?.rank
                            // const value = rank.sort(function(a, b){return b-a})
                            // console.log('resp=======>>>>' ,value)
                            // const rank = perhitungan_state?.data?.rank
                            // const value = rank.sort(function(a, b){return b-a})
                            // // Math.max(rank)
                            // console.log(value);
                            // const add = {
                            //     a: 2,
                            //     b: 2,
                            //     c: 3
                            //   }
                            
                            //   const total = Object.values(add).reduce((t, n) => t + n)
                            // const rank = [perhitungan_state?.data?.rank]
                            // function checkAdult(result) {
                            //     return result > current;
                            // }
                            // const test =current.findIndex(checkAdult)
                            // console.log(test);
                            // const current = [...datarank?.rank].sort(function(a, b){return b-a})
                            // console.log('respon score=====>',current)
                            return <Animated.View style={{flexDirection:'row', padding:SPACING, marginBottom:SPACING, backgroundColor:'#00FF7F', borderRadius:25, 
                            top:25,
                            transform: [{scale}]
                            }}>
                            <Image
                                source={item.imageUrl}
                                style={{ 
                                    width: AVATAR_SIZE, 
                                    height: AVATAR_SIZE, 
                                    borderRadius: AVATAR_SIZE,
                                    marginRight: SPACING / 2,
                                }}
                                
                            />
                            <View>
                                <Text style={{fontSize:22, fontWeight:'700'}}> No : {item.alternatif}  </Text>
                                <Text style={{fontSize:18, opacity:.7}}> Nama Laptop : {item.datalaptop} </Text>
                                <Text style={{fontSize:18, opacity:.7}}> Ram : {item.ram} </Text>
                                <Text style={{fontSize:18, opacity:.7}}> Processor : {item.processor} </Text>
                                <Text style={{fontSize:18, opacity:.7}}> Harga : {item.harga} </Text>
                                <Text style={{fontSize:18, opacity:.7}} > Score : {item.hasil_akhir} </Text>
                                {/* <Text style={{fontSize:18, opacity:.7}} > Ranking : {current.indexOf(perhitungan_state?.data?.rank[index])+1} </Text>
                                {/* <Text style={{fontSize:18, opacity:.8, color:'#0099cc'}} onPress={()=> handleGoTo('ViewData')}>
                                    selengkapnya...
                                </Text> */}
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
const mapDispatchToProps = (dispatch) => {
    return {
    perhitungan: () => dispatch(PERHITUNGAN()),
    };
};
const mapStateToProps = (state) =>{
    return {
        perhitungan_state: state.perhitungan
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RankingLaptop);