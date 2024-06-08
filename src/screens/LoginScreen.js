import React, { useState } from 'react';
import { ApplicationProvider, Layout, Text, TopNavigation, Avatar, Input, Button, ButtonGroup, Icon, IconRegistry } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { images } from '../assets/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/action/action';

const LoginScreen = ({navigation}) => {
const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const movingRegister =()=>{
navigation.navigate("Register")
}
const solvingLogin = async () => {
    try {
       const resUser = await AsyncStorage.getItem('user');
console.log(JSON.parse(resUser).email)
      if(resUser){
   const tmapUser= JSON.parse(resUser)  
   if (tmapUser.email === email && tmapUser.password === password.trim()) 
      {

      dispatch(setUser(tmapUser))
      }
      else {
        console.log("Email or password wrong!");
    }
    
    }
       
    } catch (error) {
        console.log("Error occurred while login: ", error);
    }
};
  const SocialBtn = ({ name }) => (

    <Avatar
      style={{ width: 39, height: 39 }}
      source={images[name]} />
  )
  return (
    <Layout
    >
          <TopNavigation

title={evaProps => <Text {...evaProps} style={{ fontSize: 24 }}>Login</Text>} alignment='center' />

      <Avatar
        style={{
          width: 365,
          height: 147,
          margin: 6
        }}
        size='giant'
        source={images.Login} />
      <Text
        style={{ textAlign: 'center' ,marginBottom: 10}}
      >Please log in to experience this great app</Text>
      <Layout
        style={{
          paddingVertical: 20,
          paddingHorizontal: 25

        }}
      >
        <Input

          value={email}
          placeholder='your email'
          onChangeText={text => setEmail(text)}
        />

        <Input

          value={password}
          style={{ marginTop: 10 }}
          placeholder='password'
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <Layout
          style={{ flexDirection: "row", justifyContent: "space-between" }}

        >

          <Button
            onPress={() => movingRegister()}
            appearance='ghost'
            size='small'
          >
            {evaProps => <Text category='p2' status='info'>Register ?</Text>}
          </Button>
          <Button
            size='small'
            appearance='ghost'
          >
            {evaProps => <Text category='p2' status='info'>forgot password</Text>}
          </Button>
        </Layout>
        <Button
          style={{ marginTop: 30 }}
          onPress={()=> solvingLogin()}
        >
          Sign in
        </Button>
        <Text style={{ marginTop: 10, textAlign: 'center' }} category='p2'>or connect with</Text>
        <Layout>

        </Layout>
        <ButtonGroup
          style={{
            justifyContent: 'space-evenly'
            , marginTop: 10
          }}
        >
          <SocialBtn name={"facebook"} />
          <SocialBtn name={"linkedin"} />
          <SocialBtn name={"pinterest"} />
          <SocialBtn name={"instagram"} />

        </ButtonGroup>
        <Avatar
          style={{
            width: 361,
            height: 312,
            margin: 6
          }}
          size='giant'
          source={images.BottomLogin} />

      </Layout>

    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {

    padding: 20,
  },
  headerText: {
    fontSize: 24,
  },
  avatar: {
    width: 365,
    height: 147,
    margin: 6,
    alignSelf: 'center',
  },
  description: {
    textAlign: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  signInButton: {
    marginTop: 30,
  },
  connectText: {
    textAlign: 'center',
    marginTop: 10,
  },
  socialButtonGroup: {
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  socialIcon: {
    width: 39,
    height: 39,
  },
});

export default LoginScreen