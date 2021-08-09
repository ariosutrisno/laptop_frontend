import { Image, Text, View,Button,TextInput,ScrollView,FlatList,TouchableOpacity,Dimensions,Animated } from 'react-native';
import { Card } from 'react-native-elements';
import React,{ useEffect, useState }  from 'react';
import { colors } from '../../utils';
import { StatusBarPage } from '../../components';
import {connect} from 'react-redux';
import {
    getlistlaptop,
} from '../../config/redux/_actions/_laptop/laptop';
const { width, height } = Dimensions.get('screen');

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING *3;


const List = ({navigation,list_laptop,state_laptop}) =>{
    const handleGoTo = (screen,item) =>{
        navigation.navigate(screen,item);
    }

    const detail_laptop = (item) =>{
        handleGoTo('DetailLaptop',item)
        // console.log('data laptop perID ====>',item)
    }
    const [isloading,setloading] = useState(false)
    const [isError,setEror] = useState(false)
    const [isRefresh,setRefresh] = useState(false)
    const fetchData = async() =>{
        setloading(true)
        try {
            const response = await list_laptop()
            // console.log('daataa==>',response)
        } catch (error) {
            setEror(true)
        }
        
        setloading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
const scrollY = React.useRef(new Animated.Value(8)).current;
    return(
        <View style={styles.wrapper.pages}>
            <StatusBarPage/>
                <View style={styles.lineText}>
                    <View style={styles.row}>
                    <Text style={styles.texts}>DATA LAPTOP</Text>
                    </View>
                </View>

                <View style={styles.wrapper.components}>
                    <Animated.FlatList
                        data={state_laptop?.data}
                        keyExtractor={item=>item.idx_datalaptop.toString()}
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
                                source={{ uri:`https://adminproject.site/${item.gambar}` }}
                                style={{ 
                                    width: AVATAR_SIZE, 
                                    height: AVATAR_SIZE, 
                                    borderRadius: AVATAR_SIZE,
                                    marginRight: SPACING / 2,
                                }}
                            />
                            <View>
                                <Text style={{fontSize:22, fontWeight:'700'}}> Nama Laptop :  {item.merek_laptop} </Text>
                                <Text style={{fontSize:18, opacity:.7}}> harga laptop : {item.harga} </Text>
                                <Text style={{fontSize:18, opacity:.8, color:'#0099cc'}} onPress={()=> detail_laptop(item)}> selengkapnya... </Text>
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
    list_laptop: () => dispatch(getlistlaptop()),
    };
};
const mapStateToProps = (state) =>{
    return {
        state_laptop: state.datalaptop
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);