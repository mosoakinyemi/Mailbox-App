import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,Dimensions,TouchableOpacity, Image} from 'react-native';

var wS = Dimensions.get('window');
var dh = wS.height;
var dw = wS.width;

export default class MessageItem extends Component {
  render() {
    const {id,
          title,
          senderName,
          senderEmail,
          src,
          content,
          time} = this.props.message;
    return (
      <View style={{flex:1,}}>
      <View style={styles.container}>
        <Image source={src} style={styles.thumb} />
        <View style={styles.textRow}>

            <View style={styles.rowOne}>
              <View style={styles.nameWrap}><Text  numberOfLines={1} style={{fontSize:17, color:'black',fontWeight: 'bold'}}>{senderName}</Text></View>
              <View style={styles.timeWrap}><Text  numberOfLines={1} style={{color:'red', fontSize:12}}>{time}</Text></View>
            </View>



            <View style={styles.rowTwo}>
              <Text style={{color:'#c110a4', fontSize:16}}>{title}</Text>
            </View>

            <View style={styles.rowThree}>
              <Text numberOfLines={1} style={styles.contentText}>{content}</Text>
            </View>

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
    height:dh/9,
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
    flex:1
    },
  rowOne:{
    justifyContent:'flex-end',
    alignItems:'baseline',
    flexDirection:'row',
    flex:1,

      },

  nameWrap:{
    flex:5,
    flexWrap:'wrap',
    },
  timeWrap:{
    flex:2,
      alignItems:'flex-end',
    flexWrap:'wrap'
    },
  rowTwo:{
    marginTop:5
    },
    rowThree:{
      flex:1,
      flexWrap:'wrap'
      },
  contentText:{
    fontSize:14,
    },
});
