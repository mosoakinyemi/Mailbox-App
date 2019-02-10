import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,Dimensions,TouchableOpacity, Image} from 'react-native';

var wS = Dimensions.get('window');
var dh = wS.height;
var dw = wS.width;

export default class ContactItem extends Component {
  render() {
    const {
          senderName,
          senderEmail,
          src,
        } = this.props.contact;
    return (
      <View style={{flex:1,}}>
      <View style={styles.container}>
        <Image source={src} style={styles.thumb} />
        <View style={styles.textRow}>
              <Text style={styles.rowOne}>{senderName}</Text>
              <Text style={styles.rowTwo}>{senderEmail}</Text>
       </View>
      </View>
      <View style={{width:'100%',height:2, backgroundColor:'#d1cccc'}} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:dw*0.95,
    height:dh/11,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'baseline',
    padding:5,
    marginVertical:8
  },
  thumb:{
    width:dh/12,
    height:dh/12,
    borderRadius:dh/6,
    resizeMode: 'contain',
    alignSelf:'flex-start',
    padding:3,
    },
  textRow:{
    flexDirection:'column',
    padding:5,
    flex:1,
    justifyContent: 'flex-start'
    },
  rowTwo:{
    marginTop:5,
    color:'#c15510',
    fontSize:16
    },
rowOne:{
      fontWeight: 'bold',
      fontSize:18,
       color:'black',
      },
  contentText:{
    fontSize:14,
    },
});
