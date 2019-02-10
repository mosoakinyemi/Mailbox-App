import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


type Props = {};
  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export default class Header extends Component<Props> {
  render() {
		const {title,rightIcon} = this.props;
    return (
		   <View style={styles.appBar}>
		      <View>
		          <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
		            <Icon name="bars" size={25} style= {styles.drawrIcon} />
		          </TouchableOpacity>
		      </View>

		      <View style={styles.headerText}>
		        <Text style={{fontSize:24,color:'white',marginLeft:30}}>{title}</Text>
            <TouchableOpacity>
		            <Icon name={rightIcon} size={25} style= {styles.drawrIcon} />
            </TouchableOpacity>
		      </View>
		   </View>
    );
  }
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


const styles = StyleSheet.create({

    appBar: {
      backgroundColor:'#c110a4',
      height: APPBAR_HEIGHT,
      width:'100%',
      flexDirection:'row',
      justifyContent:'flex-start',
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
