/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList} from 'react-native';
import Mails from './MailDB.js';
import MessageItem from './MessageItem.js'
import MessageDetail from './MessageDetail.js'
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};
  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export class Inbox extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.appBar}>
      <View>
          <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
            <Icon name="bars" size={25} style= {styles.drawrIcon} />
          </TouchableOpacity>
      </View>

      <View style={styles.headerText}>
        <Text style={{fontSize:24,color:'white',marginLeft:30}}>Inbox</Text>
        <Icon name="search" size={25} style= {styles.drawrIcon} />
      </View>
      </View>
       <View style={styles.body}>
             <FlatList
               data={Mails}
                keyExtractor={(item, index) => item.id}
               renderItem={({item}) => <MessageItem message={item}/>}
              />
           </View>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusBar: {
      height: STATUSBAR_HEIGHT,
    },
  appBar: {
      backgroundColor:'#c110a4',
      height: APPBAR_HEIGHT,
      width:'100%',
      flexDirection:'row',
      justifyContent:'flex-start'
      },

  headerText:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'baseline',
      flex:1
      },

  drawrIcon:{
      color:'#fff',
      margin:15,
      },

});
