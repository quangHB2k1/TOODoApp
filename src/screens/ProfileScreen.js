
import React, { useEffect } from 'react'
import { Avatar, Button, ButtonGroup, Divider, Layout, Text, TopNavigation } from '@ui-kitten/components'
import { Dimensions, StyleSheet } from 'react-native'
import { images } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLogout } from '../redux/action/action'
const ProfileScreen = ({ navigation }) => {
 const dispatch = useDispatch()
    const { email, userName, todoList } = useSelector(state => state.user)
    const LogOut = async () => {
        try {
            const resUser = await AsyncStorage.getItem('user');
            const tmapUser = JSON.parse(resUser)
            const user = {...tmapUser,     todoList:[...todoList]}
            console.log(user)
              await AsyncStorage.setItem('user', JSON.stringify(user));
              dispatch(setLogout())
        }
        catch (err) {

        }
  
    }


    const movingTodo = () => {
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
                style={{ marginBottom: 10 }}
                category='h5'
            >{userName}</Text>

            <Text category='s1'>{email}</Text>
            <ButtonGroup
                style={styles.btnContainer}
            >
                <Button
                    onPress={() => { LogOut()}}
                    style={styles.btn}>Log out</Button>
                <Button
                    onPress={() => { movingTodo() }}
                    style={styles.btn}>Your Tasks</Button>
            </ButtonGroup>

        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    avatar:
    {
        marginTop: Dimensions.get("window").height * 0.05,
        marginBottom: 10,
        width: 205, height: 204
    },
    btnContainer: {
        marginTop: 20,
        width: Dimensions.get("window").width * 0.8,
        justifyContent: "space-evenly"
    },
    btn: {
        flex: 1, marginHorizontal: 5,
    }
});
export default ProfileScreen