import { Image, Text, View,Button,TextInput,ScrollView,FlatList,TouchableOpacity,Dimensions,Animated } from 'react-native';
import React,{ useEffect, useState,Component,useRef }  from 'react';
import { colors } from '../../utils';
import { StatusBarPage } from '../../components';
import DummyKriteria from './dummy';
import {connect, useDispatch} from 'react-redux';
import {
    Kriteria,
} from '../../config/redux/_actions/_list_data_hitung/data_hitung';

class DataKriteria extends Component {
    constructor() {
        super()
        this.state = {
            data_kriteria : [],
            loading : false,
        }
    }

    getData = async()=>{
        const datakriteria = await this.props.Kriteria()
        this.state({
            data_kriteria: datakriteria.value,
            refreshing:false,
            loading:false,
        })
    }
    componentDidMount() {
        this.setState({
            loading: true,
        });
        this.getData();
        }
        
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.getData({refreshing: false});
        };

        _scrollY = ()=>{
            this.state({
                scrollY:useRef(new Animated.Value(8)).current
            })
        }
        render() {
            const{
                data_kriteria,
                loading,
                scrollY,
            } = this.state
            return (
                <View style={styles.wrapper.pages}>
                    <StatusBarPage/>
                        <View style={styles.lineText}>
                            <View style={styles.row}>
                            <Text style={styles.texts}>DATA KRITERIA</Text>
                            </View>
                        </View>
                        <View style={styles.wrapper.components}>
                            <Animated.FlatList
                                data={DummyKriteria}
                                // keyExtractor={item=>item.key}
                                onScroll={Animated.event(
                                    [{nativeEvent: {contentOffset:{y:this._scrollY}}}],
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

                                    const scale = this._scrollY.interpolate({
                                        inputRange,
                                        outputRange:[1,1,1,0]
                                    })

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
                                        <Text style={{fontSize:14, fontWeight:'700'}}> </Text>
                                        <Text style={{fontSize:14, opacity:.7, fontWeight:'700'}}></Text>
                                        <Text style={{fontSize:14, opacity:.7,fontWeight:'700',color:'black'}}></Text>
                                    </View>
                                    </Animated.View>
                                }}
                            />
                            
                        </View>
                </View>
            )
        }
}


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
// const scrollYY = React.useRef(new Animated.Value(8)).current;
const mapDispatchToProps = (dispatch) => {
    return {
    list_kriteria: () => dispatch(Kriteria()),
    };
};

export default connect(null, mapDispatchToProps)(DataKriteria);