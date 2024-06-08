
import React, { useState } from 'react'
import { Layout, TopNavigation, Text, ButtonGroup, Button, Input, Icon, List, ListItem, Datepicker,Divider,TopNavigationAction } from '@ui-kitten/components'
import Modal from 'react-native-modal';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import { addTodo, delTodo } from '../redux/action/action';
import uuid from 'react-native-uuid';
const TodoScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const todoList = useSelector(state => state.user.todoList)
  const [tittle, setTittle] = useState("");
  const [des, setDes] = useState("");
  const [date, setDate] = useState(new Date());
  const [visible ,setVisible]= useState(false)

  const renderIcon = (nameIcon, Props) => (
    <Icon {...Props} name={nameIcon} />
  );
  
  const RemoveButton = ({ onPress }) => (
    <Button
      size='tiny' 
      status='danger'
      onPress={onPress}
    >
      remove
    </Button>
  );
  
  
  const renderItemIcon = (props) => (
    <Icon
      {...props}
      name='person'
    />
  );
  const movingTaskDetail = (selectedWork) => {
    navigation.navigate("TaskDetail", selectedWork)
  }
  const addTask =()=>{
    if (!tittle.trim() || !des.trim()) {
      SimpleToast.show("cannot be empty");
      return; 
    }
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    const task = {
      id: uuid.v4(),
      title:tittle ,
      des:des,
      deadline:formattedDate.toString(),
    }
    dispatch(addTodo(task))
    SimpleToast.show("added")
    
  }
  const BackAction = () => (
    <TopNavigationAction
    icon={() => renderIcon("arrow-back-outline", { width: 45, height: 45 })}
    onPress={() => { navigation.goBack() }}
  />
);
  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} `}
      description={`${item.des.slice(0, 15)}....`}
      accessoryLeft={renderItemIcon}
      accessoryRight={() => (
        <RemoveButton 
          onPress={() => {dispatch(delTodo(item.id))}}
        />
      )}
      onPress={() => movingTaskDetail(item)}
  
    />
  );
  return (
    <Layout
      style={{ flex: 1, padding: 20 }}
    >

           <TopNavigation
                accessoryRight={()=>(<TouchableOpacity 
                  onPress={()=>{ setVisible(true)}}
                  style={styles.btnPluss
                  }>
                    <Text category='h1'>+</Text>
                  </TouchableOpacity>)}
                  accessoryLeft={BackAction}
          
            />

      <Text category='s1' style={styles.todoText}>Todo List</Text>
      <List
        style={styles.container}
        data={todoList}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
      <Modal
        visible={visible}
        style={{ width: "100%", marginLeft: 0, marginBottom: 0 }}
        onBackdropPress={() => setVisible(false)}
      >
    
        <Layout style={styles.formContainer}>
        <View style={{flex:1, backgroundColor:"red"}}></View>
          <Input
          style={styles.input}
            placeholder='title'
            value={tittle}
            onChangeText={nextValue => setTittle(nextValue)}
          />
          <Datepicker

        placeholder='Pick Date'
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        accessoryRight={renderIcon("calendar")}
        style={styles.datePicker}
      />
          <Input
            placeholder='description'
            onChangeText={nextValue => setDes(nextValue)}
            style={styles.input}
          />
          <Button
          onPress={()=>{setVisible(false)}}
          status='warning' size='small' style={styles.closeBtn}>close</Button>
          <Button
          onPress={()=>addTask()}
          status='success' size='small' style={styles.savebtn}>Save</Button>
        </Layout>
      </Modal>
    </Layout >
  )
}
const styles = StyleSheet.create({

  todoText: { fontSize: 20, marginTop: 40 },
  btnPluss: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    // position: 'absolute',
    // right: 20,
    // top: 20
  },
  formContainer: {
    width: Dimensions.get("window").width,
    height: 250,
    backgroundColor: "white",
    position: 'absolute',
    bottom: 0,
    right:0, left:0,
    alignItems: 'center',
    padding: 10,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,

  },
  input: {
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  datePicker: {
    width: '100%',
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },closeBtn:{
    position:"absolute", top:10, right:20, 

  }, savebtn:{position:"absolute", top:10, left:20, }
});
export default TodoScreen