import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Splash,Login,Register,WelcomeAuth,HomeScreen,Akun,List,RankingLaptop,ViewData,InputData,RekomendasiLaptop,ViewDataScore,InputDataKebutuhan,DataKriteria,DataAlternatif,DataPerhitungan,AppNavigator,Utility,AppNavigatorAlternatif,inputDatalaptop,DetailLaptop} from '../pages';
import { BottomTabNavigators } from '../components';
import EditProfile from '../pages/Akun/editprofile';
import AboutMe_s from '../pages/AboutMe';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
  
  return (
    <Tab.Navigator tabBar={props => <BottomTabNavigators {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Ranking" component={inputDatalaptop} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
}

const Router = ({auth}) => {
  
  return (
    <>
    {auth.authenticated ? (
      <Stack.Navigator initialRouteName="MainApp" >
        
        <Stack.Screen name="MainApp" component={MainApp} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="InputData" component={InputData} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="InputDataKebutuhan" component={InputDataKebutuhan} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="Ranking" component={inputDatalaptop} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="ViewData" component={ViewData} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="DetailLaptop" component={DetailLaptop} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="ViewDataScore" component={ViewDataScore} options={{
          headerShown:false,
        }}
        />
        
        <Stack.Screen name="List" component={List} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="RankingLaptop" component={RankingLaptop} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="RekomendasiLaptop" component={RekomendasiLaptop} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="DataKriteria" component={AppNavigator} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="DataAlternatif" component={AppNavigatorAlternatif} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="DataPerhitungan" component={DataPerhitungan} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="Utility" component={Utility} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="AboutMe" component={AboutMe_s} options={{
          headerShown:false,
        }}
        />
        
      </Stack.Navigator>
      ):(
        <Stack.Navigator initialRouteName="Splash" >
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
          <Stack.Screen name="Login" component={Login} options={{
            headerShown:false,
          }}/>
          <Stack.Screen name="Register" component={Register} options={{
            headerShown:false,
          }}/>
          <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} options={{
            headerShown:false,
          }}
          />
        </Stack.Navigator>
      )}
      </>
  )
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, null)(Router);