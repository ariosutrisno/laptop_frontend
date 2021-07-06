import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Splash,Login,Register,WelcomeAuth,HomeScreen,Akun,List,RankingLaptop,ViewData,InputData,RekomendasiLaptop,ViewDataScore,InputDataKebutuhan,DataKriteria,DataAlternatif,DataPerhitungan} from '../pages';
import { BottomTabNavigators } from '../components';
import EditProfile from '../pages/Akun/editprofile';
import AboutMe_s from '../pages/AboutMe';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
  
  return (
    <Tab.Navigator tabBar={props => <BottomTabNavigators {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Ranking" component={RankingLaptop} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
}

const Router = () => {
  
  return (
    
      <Stack.Navigator initialRouteName="Login">
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
        <Stack.Screen name="ViewData" component={ViewData} options={{
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
        <Stack.Screen name="RekomendasiLaptop" component={RekomendasiLaptop} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="DataKriteria" component={DataKriteria} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="DataAlternatif" component={DataAlternatif} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="DataPerhitungan" component={DataPerhitungan} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="AboutMe" component={AboutMe_s} options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="MainApp" component={MainApp} options={{
          headerShown:false,
        }}/>
      </Stack.Navigator>
    
  )
}

export default Router;