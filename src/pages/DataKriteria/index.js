import { Image, Text, View,Button,TextInput,ScrollView,FlatList,TouchableOpacity,Dimensions,Animated } from 'react-native';
import React,{ useEffect, useState }  from 'react';
import { colors } from '../../utils';
import { StatusBarPage } from '../../components';
import faker from 'faker';
import DummyKriteria from './dummy';
import { FloatingAction } from "react-native-floating-action";
import axios from 'axios';

const actions = [
        {
        text: "create data",
        icon: require("../../assets/illustrations/create.png"),
        name: "create",
        position: 1
        },
    
    ];
const { width, height } = Dimensions.get('screen');
faker.seed(10); 
const DATA = [...Array(30).keys()].map(( Dummy) => {
    return {
        key: faker.random.uuid(),
        image: '',
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    };
});

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING *3;

const DataKriteria = ({navigation}) =>{

    const handleGoTo = (screen) =>{
        navigation.navigate(screen);
    }
    const scrollY = React.useRef(new Animated.Value(8)).current;

    /* 
    *
    *GET DATA KRITERIA
    * 
    */
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://adminproject.site/api/user/dataKriteria')
            .then(function (response) {
                // handle success
                console.log(response);
            })
    }, [])
    
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
                        data={data}
                        keyExtractor={item=>item.key}
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
                                source={item.imageUrl}
                                style={{ 
                                    width: AVATAR_SIZE, 
                                    height: AVATAR_SIZE, 
                                    borderRadius: AVATAR_SIZE,
                                    marginRight: SPACING / 2,
                                }}
                            />
                            <View>
                                <Text style={{fontSize:14, fontWeight:'700'}}>{item.nama_kriteria} </Text>
                                <Text style={{fontSize:14, opacity:.7, fontWeight:'700'}}></Text>
                                <Text style={{fontSize:14, opacity:.7,fontWeight:'700',color:'black'}}></Text>
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
export default DataKriteria;