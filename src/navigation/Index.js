import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TodoScreen from "../screens/TodoScreen";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator()
const AppStack = () => {
    return (
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
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