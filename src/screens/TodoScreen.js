
import React from 'react'
import { Layout ,TopNavigation,Text, ButtonGroup, Button,Input, Icon,List, ListItem } from '@ui-kitten/components'
import { StyleSheet } from 'react-native';
const TodoScreen = () => {
  const data = new Array(8).fill({
    title: 'Title for Item',
    description: 'Description for Item',
  });
  const renderIcon = (nameIcon) => (
    <Icon  name={nameIcon}/>
  );
  const renderItemAccessory = ()=> (
    <Button size='tiny'>
FOLLOW
    </Button>
  );

  const renderItemIcon = (props)=> (
    <Icon
      {...props}
      name='person'
    />
  );

  const renderItem = ({ item, index })=> (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );
  return (
    <Layout
    style={{flex:1, padding:20}}
    >

<Input
      style={styles.input}
      placeholder={"search task that you need"}
      
  
      accessoryRight={renderIcon("search-outline")}
    />
  <Text category='s1' style={styles.todoText}>Todo List</Text>
  <List
      style={styles.container}
      data={data}
      renderItem={renderItem}
    />
    </Layout >
  )
}
const styles = StyleSheet.create({
  todoContainer :{
    maxHeight: 192,
  }, 
  input: {
    borderRadius: 20,
 
    paddingVertical: 10,

  }, todoText :{fontSize:20, marginTop:40}
});
export default TodoScreen