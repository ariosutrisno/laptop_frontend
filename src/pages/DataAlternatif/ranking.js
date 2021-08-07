import { Image, Text, View,Button,TextInput,ScrollView,FlatList,TouchableOpacity,Dimensions,Animated } from 'react-native';
import React,{ useEffect, useState } from 'react';
import { colors } from '../../utils';
import { StatusBarPage } from '../../components';
import {connect} from 'react-redux';
import {
    RANKING_ALL,
} from '../../config/redux/_actions/_list_data_hitung/data_hitung';

const { width, height } = Dimensions.get('screen');


const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING *3;



const Ranking = ({ranking, ranking_state}) =>{


    const [isloading,setloading] = useState(false)
    const [isError,setEror] = useState(false)
    const [isRefresh,setRefresh] = useState(false)
    
    const fetchData = async() =>{
            setloading(true)
            try {
                const response = await ranking()
                // console.log('respon ===========>', response)
            } catch (error) {
                setEror(true)
            }
            
            setloading(false)
        }
        useEffect(() => {
            fetchData()
        }, [])
        
        console.log('respon ===========>>', ranking_state.data.alternatif)
        
const scrollY = React.useRef(new Animated.Value(8)).current;
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
                <View style={styles.lineText}>
                    <View style={styles.row}>
                    <Text style={styles.texts}>DATA RANKING ALL</Text>
                    </View>
                </View>

                <View style={styles.wrapper.components}>
               
                    <Animated.FlatList
                        data={ranking_state?.data.alternatif}
                        keyExtractor={item=>item.idx_alternatif.toString()}
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
                            
                            const current = [...ranking_state?.data?.rank].sort(function(a, b){return b-a})
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
                                <Text style={{fontSize:18, opacity:.7}} > Score : {ranking_state?.data?.rank[index]} </Text>
                                <Text style={{fontSize:18, opacity:.7}} > Ranking : {current.indexOf(ranking_state?.data?.rank[index])+1} </Text>
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
    ranking: () => dispatch(RANKING_ALL()),
    };
};
const mapStateToProps = (state) =>{
    return {
        ranking_state: state.rankingAll
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ranking);