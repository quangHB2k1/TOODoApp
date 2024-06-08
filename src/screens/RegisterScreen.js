import { Layout, Text, TopNavigation, Avatar, Input, Button, ButtonGroup } from '@ui-kitten/components'
import React, { useState } from 'react'
import { images } from '../assets/index'
import SimpleToast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const [errors, setErrors] = useState({ email: '', password: '', userName: '' })

  const movingLogin = () => {
    navigation.navigate("Login")
  }

  const Validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Empty email';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = 'Invalid email';
      isValid = false;
    }

    if (!userName) {
      newErrors.userName = 'Empty userName';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Empty password';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const solvingRegister = async () => {

    try {
      const user = {
        userName: userName,
        email: email,
        password: password,
        todoList:[{id:122, 
          title:"action", 
          des:"to do sth amazing !"
          
        }]
      }
      await AsyncStorage.setItem('user', JSON.stringify(user));
     
      SimpleToast.show('Your account has been successfully registered');
    } catch (e) {
      SimpleToast.show('Your account registration failed'+e);
    }
  }

  const SocialBtn = ({ name }) => (
    <Avatar
      style={{ width: 39, height: 39 }}
      source={images[name]}
    />
  )

  return (
    <Layout>
      <TopNavigation

        title={evaProps => <Text {...evaProps} style={{ fontSize: 24 }}>Register</Text>} alignment='center' />

      <Avatar
        style={{ width: 365, height: 147, margin: 6 }}
        size='giant'
        source={images.Login}
      />

      <Text style={{ textAlign: 'center', marginBottom: 10 }}>Let's create an account !</Text>

      <Layout style={{
        paddingVertical: 20,
        paddingHorizontal: 25
      }}>
        <Input
          value={email}
          placeholder='Your email'
          onChangeText={text => setEmail(text)}
        />
        {errors.email ? <Text status='danger' category='p2'>{errors.email}</Text> : null}

        <Input
          value={userName}
          style={{ marginTop: 10 }}
          placeholder='Your name'
          onChangeText={text => setUserName(text)}
        />
        {errors.userName ? <Text status='danger' category='p2'>{errors.userName}</Text> : null}

        <Input
          value={password}
          style={{ marginTop: 10 }}
          placeholder='Password'
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        {errors.password ? <Text status='danger' category='p2'>{errors.password}</Text> : null}
        <Layout
          style={{ flexDirection: "row", justifyContent: "space-between" }}

        >

          <Button
            onPress={() => movingLogin()}
            appearance='ghost'
            size='small'
          >
            {evaProps => <Text category='p2' status='info'>Register ?</Text>}
          </Button>
        </Layout>
        <Button
          style={{ marginTop: 20 }}
          onPress={() => Validate() ? solvingRegister() : null}
        >
          Sign up
        </Button>

        <Text style={{ marginTop: 10, textAlign: 'center' }} category='p2'>or connect with</Text>

        <ButtonGroup style={{ justifyContent: 'space-evenly', marginTop: 10 }}>
          <SocialBtn name={"facebook"} />
          <SocialBtn name={"linkedin"} />
          <SocialBtn name={"pinterest"} />
          <SocialBtn name={"instagram"} />
        </ButtonGroup>

        <Avatar
          style={{ width: 361, height: 312, margin: 6 }}
          size='giant'
          source={images.BottomLogin}
        />
      </Layout>
    </Layout>
  )
}

export default RegisterScreen
