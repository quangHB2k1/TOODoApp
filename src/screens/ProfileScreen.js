
import React from 'react'
import { Avatar, Button, ButtonGroup, Divider, Layout, Text,TopNavigation } from '@ui-kitten/components'
import { Dimensions, StyleSheet } from 'react-native'
import { images } from '../assets'
import { useSelector } from 'react-redux'
const ProfileScreen = ({navigation}) => {
    const todoList = useSelector(state =>state.user.todoList)

    const movingTodo =()=>{
        navigation.navigate("Todo")
    }
  return (
    <Layout

    style={styles.container}
    >
       
<Avatar
style={styles.avatar}
source={images.User}

/>
<Text
style= {{marginBottom:10}}
category='h5'
>{JSON.stringify(todoList)}</Text>

<Text category='s1'>Quang@gmail.com</Text>
<ButtonGroup
style={styles.btnContainer}
>
    <Button style={styles.btn}>Log out</Button>
    <Button
   onPress={()=>{movingTodo()}}
     style={styles.btn}>Your Tasks</Button>
</ButtonGroup>

    </Layout>
  )
}
const styles = StyleSheet.create({
    container :{
        flex:1, 
        alignItems:'center'
    },
avatar :
{
    marginTop:Dimensions.get("window").height*0.05,
    marginBottom:10,
    width:205, height:204} ,
    btnContainer :{
        marginTop:20,
        width:Dimensions.get("window").width*0.8, 
         justifyContent:"space-evenly"
    },
     btn:{
        flex:1 ,   marginHorizontal: 5,
     }
});
export default ProfileScreen