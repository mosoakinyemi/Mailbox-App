import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Mails from './MailDB.js';
import Header from './Header.js';
import ContactItem from './ContactItem.js';


type Props = {};
  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export class Outbox extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Outbox" rightIcon="user-circle" navigation={this.props.navigation} />
        <View style={styles.body}>
            <View>
                <Icon name="envelope-open" size={dh/4} style= {styles.drawrIcon} />
                <Text style={styles.infoTxt}>No Messages Sent</Text>
            </View>
          <TouchableOpacity style={styles.fab}>
            <Text style={styles.fabTxt}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  fabTxt:{
    fontSize: 40,
    color: '#fff'
  },

  fab:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c15510',
    width:dh/12,
    height:dh/12,
    borderRadius:dh/6,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding:3,
    marginVertical: 30
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d2d2d2',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  infoTxt:{
      fontSize: 30,
      textAlign: 'center'
  },
  statusBar: {
      height: STATUSBAR_HEIGHT,
    },

    drawrIcon:{
      color:'#949292',
      margin:15,
      },

});
