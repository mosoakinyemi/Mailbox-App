/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,Image,
  StyleSheet,TextInput,
  Text,TouchableOpacity,ImageBackground,
  View,Dimensions, ActivityIndicator,
} from 'react-native';

type Props = {};
  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width
export class HelpAndFeedback extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Screen3 component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
