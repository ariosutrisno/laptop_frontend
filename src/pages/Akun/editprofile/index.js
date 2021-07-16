import { Image, Text, View,ScrollView } from 'react-native';
import React from 'react';
import { Circles,ImageDummy } from '../../../assets';
import { useDispatch,useSelector} from 'react-redux';
import { colors } from '../../../utils';
// import { setForm } from '../../../redux';
import { Input } from '../../../components';
import { RadioButton } from 'react-native-paper';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

const EditProfile = ({navigation}) =>{
    const handleGoTo = (screen) =>{
        setTimeout(() => {
            navigation.navigate(screen);
            },3000);
    }
    const [value, setValue] = React.useState('first');
    //input text
    const {form} = useSelector(state => state.EditProfile)
    const dispatch = useDispatch();

    const onInputChange = (value,inputType) => {
        // dispatch(setForm(inputType,value));
    }
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
            <View style={styles.wrapper.components}>
                <Input placeholder= "Nama Lengkap" value={form.name} onChangeText = {value=>onInputChange(value,'name')} />
                <View style={styles.space(15)}/>
                <Input placeholder= "Email" value={form.email} onChangeText = {value=>onInputChange(value,'email')} />
                <View style={styles.space(15)}/>
                <Input placeholder= "Password" value={form.password} onChangeText = {value=>onInputChange(value,'password')} secureTextEntry />
                <View style={styles.space(15)}/>
                <Input placeholder= "Confirm Password" value={form.confirm_password} onChangeText = {value=>onInputChange(value,'confirm_password')} secureTextEntry />
                <View style={styles.space(15)}/>
                <View style={styles.textGender.page}>
                    <View style={styles.space(15)}/>
                    <Text style={styles.textGender.texts}>Jenis Kelamin :</Text>
                    <View style={styles.space(15)}/>
                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                            <View style={styles.fixToText}>
                                <View>
                                    <Text style={styles.textGender.texts}>Laki - Laki</Text>
                                    <RadioButton value="Laki" color={colors.Border_Default}/>
                                </View>
                                <View paddingLeft={100}>
                                    <Text style={styles.textGender.texts} >Perempuan</Text>
                                    <RadioButton value="Perempuan" color={colors.Border_Default}/>
                                </View>
                            </View>
                        </RadioButton.Group>
                </View>
                    <View style={styles.space(40)}/>
                <View style={{justifyContent:'center', padding: 10}}>
                    <AwesomeButtonRick type="primary"  progress onPress={() => handleGoTo('MainApp')} width={150}>SIMPAN</AwesomeButtonRick>
                </View>
            </View>
        </ScrollView>
        </View>
    );
};

const styles = {
    wrapper:{
        pages:{ 
            backgroundColor:colors.Font_Color_White,
            flex:1,
        },
        components:{
            justifyContent:'center',
            alignItems:'center',
            bottom:120,
        }
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
    textGender:{
        page:{
            right:20
        },
        texts:{
            fontWeight:'bold',
            fontSize:14,
            color:colors.InputText.Input_Color,
        }
    },
    fixToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        left:5,
    }

};
export default EditProfile;