import React from 'react';
import { Layout, TopNavigationAction, TopNavigation, Icon, Text ,Divider} from '@ui-kitten/components';
import { Dimensions, ScrollView,StyleSheet } from 'react-native';

const TaskDetailScreen = ({navigation, route}) => {
    const selectedWork = route.params
console.log("quang oi"+JSON.stringify(selectedWork))
    const BackIcon = (props) => (
        <Icon
          {...props}
          name='arrow-back-outline'
        />
    );

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon}  onPress={()=>{ navigation.goBack()}}/>
    );

    return (
        <Layout style={{  flex:1}}>
            <TopNavigation
                accessoryLeft={BackAction}
                title='Task Details'
            />
          <ScrollView>
          <Layout style={styles.titleContainer}>
                <Text category='p1' style={{ marginRight: 10,fontSize:20 }}>{selectedWork.title}</Text> 
                <Icon  name="github-outline"  fill='#FFFFFF' style={{ width: 26, height: 26 }}/>
            </Layout>
            <Layout
            style={styles.deadlineContainer}
            >
                 <Icon  name="clock-outline"  fill='#FFFFFF'  style={{ width: 20, height: 20  ,marginRight:10}}/>
                <Text>{selectedWork.deadline}</Text>
            </Layout>
            <Divider style={{ backgroundColor: '#FFFFFF' ,width:Dimensions.get("window").width*0.9 , alignSelf:'center' }} />

            <Text category='p1' style={{ paddingHorizontal: 20, paddingTop: 10 }}>
               {selectedWork.des}
            </Text>
          </ScrollView>
        </Layout>
    );
};
const styles = StyleSheet.create({
titleContainer:{ paddingHorizontal:20, flexDirection: 'row', alignItems: 'center', marginTop:Dimensions.get("window").height*0.1 },
deadlineContainer:{ paddingHorizontal:20, flexDirection:"row", marginTop:5, marginBottom:20}
  }
)
export default TaskDetailScreen;
