import React, { Component } from 'react';
import { Container, Header,Text, Left, Body, Right,
  Button, Icon, Title ,Tab,Content,Tabs,List,ListItem,Thumbnail} from 'native-base';
import AssetList from './AssetList';
import {StyleSheet,TouchableOpacity} from "react-native";
import {StackNavigator} from 'react-navigation'
import {AssetItem}from './AssetItem';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import FABExample from './fab'
import AddAsset from './AddAsset'
import AddWorkOrder from './AddWorkOrder'
import { Constants } from 'expo';

 class AssetHome extends Component{
  static navigationOptions = {
header: null,
};
  render() {
    machines={
      "desc" : "Durable dual headed alumunium anodized dull chestpiece, built in non chill ring",
      "id" : "DI02020",
      "name" : "Deluxe dual head stethoscope",
      "src" : "",
      "tag" : "stethoscope",
      "type" : "DI"
      }
      var items = machines;
    return (
      <Container style={{marginTop:Constants.statusBarHeight,}}>
      <Header style={styles.header} hasTabs>
          <Left>
            <Button transparent success>
              <Icon name='arrow-back' style={{color:'white'}}  />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Assets</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' style={{color:'white'}} />
            </Button>
          </Right>
        </Header>
        <Content>
          <List  dataArray={items}
              renderRow={(item) =>

               <AssetList navigation={this.props.navigation}  machine={item} />
                }>
            </List>
        </Content>
         <FABExample navigation={this.props.navigation} to='AddAsset' />
      </Container>
    );
  }
  }

const styles={
  header:{backgroundColor:'#28B7D3'},
};


const AppNavigator = StackNavigator({
  HomeScreen: { screen: AssetHome },
  DetailsScreen: { screen: AssetItem },
  AssetStack:{screen:AssetList},
  AddAsset:{screen:AddAsset},
  AddWorkOrder:{screen:AddWorkOrder}
  });

export default class AssetsTab extends Component {
  render(){
    return(

      <AppNavigator />);
  }
}
