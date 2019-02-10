import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer,createDrawerNavigator} from "react-navigation";
import {Inbox} from './Inbox.js';
import {Outbox} from './Outbox.js'
import {Trash} from './Trash.js'
import {People} from './People.js'
import {Settings} from './Settings.js'
import {HelpAndFeedback} from './HelpAndFeedback.js'
import {SideMenu} from "./SideMenu.js";


export const DrawerNavigator = createDrawerNavigator (
  {
    Inbox:{screen:Inbox},
    Outbox:{screen:Outbox},
    People:{screen:People},
    Trash:{screen:Trash},
		Settings:{screen:Settings},
		HelplAndFeedback:{screen:HelpAndFeedback},
  },
  {
  contentComponent:(props) => <SideMenu {...props} />,
  contentOptions: {
      inactiveTintColor: "#ffffff",
      activeTintColor: '#d61394',
      activeBackgroundColor: "#ba7b93",
    },
  drawerWidth: (Dimensions.get('window').width)*0.6,
	}
);
const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;
