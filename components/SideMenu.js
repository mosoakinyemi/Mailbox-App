import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


var wS = Dimensions.get('window');
var dh = wS.height;
var dw = wS.width;

export class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }



  render ()
   {
    return (
      <View style={{backgroundColor: '#f0f0f0', flex: 1}}>
          <View style={styles.sideHeader}>
              <Image source={require('../assets/osibanjo.jpg')} style={styles.profileImg}/>
              <Text style={{fontSize: 18}}>Yemi Osibanjo</Text>
              <Text sytle={{color:'rgb(215, 106, 5)'}}>yemiosbj@gmail.com</Text>
          </View>

          <TouchableOpacity style={styles.menuBtn} onPress={this.navigateToScreen('Inbox')}>
              <Icon name="envelope" size={24}
              style= {[styles.drawrIcon && this.props.activeItemKey === 'Inbox' ? styles.currentIcon : styles.drawrIcon ]} />
              <Text style={[styles.menuTxt && this.props.activeItemKey === 'Inbox' ? styles.currentText : styles.menuTxt ]}>
              Inbox</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.menuBtn} onPress={this.navigateToScreen('Outbox')}>
                <Icon name="external-link-square" size={24}
                style= {[styles.drawrIcon && this.props.activeItemKey === 'Outbox' ? styles.currentIcon : styles.drawrIcon ]} />
                <Text style={[styles.menuTxt && this.props.activeItemKey === 'Outbox' ? styles.currentText : styles.menuTxt ]}>
                Outbox</Text>
           </TouchableOpacity>

           <TouchableOpacity   style={styles.menuBtn}   onPress={this.navigateToScreen('People')}>
                <Icon name="address-book" size={22}
                style= {[styles.drawrIcon && this.props.activeItemKey === 'People' ? styles.currentIcon : styles.drawrIcon ]} />
                <Text style={[styles.menuTxt && this.props.activeItemKey === 'People' ? styles.currentText : styles.menuTxt ]}>
                People</Text>
           </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    sideHeader:{
      height: (dh*0.3),
      alignItems:'center',
      justifyContent: 'center'
    },
    profileImg:{
      height: (dh*0.2),
      width: (dh*0.2),
      borderRadius:dh*0.1,
    },

   menuBtn:{
     paddingVertical: 12,
     borderColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection:'row',
    justifyContent: 'flex-start'
      },
  drawrIcon:{
  marginHorizontal: 30},
  menuTxt:{
  fontSize: 20},

  currentText:{
    color: '#c110a4',
    fontSize: 21
  },
  currentIcon:{
    color: '#c110a4',
    marginHorizontal: 30
  },
});
