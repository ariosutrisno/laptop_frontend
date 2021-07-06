import { Image, Text, View,ScrollView,Alert } from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import { Circles,ImageDummy } from '../../assets';
import { useDispatch,useSelector} from 'react-redux';
import { User,LogOut,AboutMe } from '../../assets';
import { AuthContext } from '../../components/context';


const Akun = ({navigation}) =>{
    const handleGoTo = (screen) =>{
        navigation.navigate(screen);
    }
    // const {Out} = React.useContext(AuthContext) ;
    return(
        <View style={styles.wrapper.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={Circles} style={styles.illustration}/>
                <Image source={ImageDummy} style={styles.Images}/>
                <View style={styles.indexx}>
                <View style={styles.box}>
                    <Text style={{color:'grey',fontSize:10, marginLeft:10}}>Name</Text>
                    <Text style={{color:'black',fontSize:12,marginLeft:10}}>Ario Sutrisno</Text>
                </View>
                <View style={styles.space(20)}/>
                <View style={styles.box}>
                    <Text style={{color:'grey',fontSize:10, marginLeft:10,}}>Email</Text>
                    <Text style={{color:'black',fontSize:12, marginLeft:10}}>Sutrisno@gmail.com</Text>
                </View>
            </View>
            <View style={styles.sets}>
                <View style={{flexDirection: 'row'}}>
                    <User width={25} height={25}/>
                    <Text  onPress={()=> handleGoTo('EditProfile')} style={{color:'black',fontSize:16, marginLeft:10}}> Edit Profile </Text>
                </View>
                <View style={styles.space(50)}/>
                <View style={{flexDirection: 'row'}}>
                    <AboutMe width={25} height={25}/>
                    <Text  onPress={()=> handleGoTo('AboutMe')} style={{color:'black',fontSize:16, marginLeft:10}}> About Me </Text>
                </View>
                <View style={styles.space(50)}/>
                <View style={{flexDirection: 'row', right:8}}>
                    <LogOut width={25} height={25}/>
                    <Text title="Logout"  onPress={() => {}} style={{color:'black',fontSize:16, marginLeft:10}}> Logout </Text>
                </View>
            </View>
        </ScrollView>
        </View>
    );
};

const styles = {
    wrapper:{
        pages:{ 
            backgroundColor:colors.White,
            flex:1,
        },
    },
    lineText:{
        flexDirection: 'row',
        paddingVertical: 50,
        paddingHorizontal: 35,
    },
    texts:{
        fontWeight:'normal',
        fontSize: 14,
        
    },
    illustration:{
        width:500,
        height:500,
        bottom:160,
        right:50,
    },
    Images:{
        width:88,
        height:88,
        marginVertical:60,
        marginHorizontal:25,
        position:'absolute',
    },
    indexx:{
        marginLeft:16,
        position:'absolute',
        marginHorizontal:25,
        marginVertical:60,
        left:120,
        justifyContent:'center',
    },
    box:{
        width:192,
        height:35,
        borderRadius:12,
        padding:3,
        borderColor:'black',
        backgroundColor:'white',
    },
    space:value =>{
        return{
            height:value,
        };
    },
    sets:{
        alignItems:'center',
        bottom:75,
    }
};
export default Akun;