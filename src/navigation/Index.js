import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TodoScreen from "../screens/TodoScreen";
import { useSelector } from "react-redux";
import TaskDetailScreen from "../screens/TaskDetailScreen";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator()
const AppStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen  name="TaskDetail" component={TaskDetailScreen}/>
      </Stack.Navigator>
    ); 
  };
const AuthStack = () => {
    return (
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    ); 
  };
  const Index =()=>{
    const login = useSelector(state => state.user.login)
 
    return(
        <NavigationContainer>
         {login ?   <AppStack/> :<AuthStack/> }
   
        </NavigationContainer>
    )
  }

  export default Index