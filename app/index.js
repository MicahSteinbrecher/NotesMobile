
import React from 'react';
import {
    AppRegistry,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    AsyncStorage,
    ScrollView,
} from 'react-native';
import { TabNavigator, StackNavigator, TabRouter } from "react-navigation";
import Realm from 'realm';
import Styles from './Style';
import NewCase from './NewCase';
import CaseDetails from './CaseDetails';
import Home from './Home';
import { Case } from './models/Case';



const MainScreenNavigator = TabNavigator({
    Home: { screen: Home},
    NewCase: { screen: NewCase },
});

const SimpleApp = StackNavigator({
    Home: { screen: MainScreenNavigator },
    CaseDetails: { screen: CaseDetails }
});




AppRegistry.registerComponent('SimpleApp', () => SimpleApp);