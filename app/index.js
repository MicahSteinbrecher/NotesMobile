
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
import { TabNavigator, StackNavigator } from "react-navigation";
import Realm from 'realm';
import Styles from './Style';
import NewCase from './NewCase';
import CaseDetails from './CaseDetails';
import Home from './Home';
import { Case } from './models/Case';

const HomeScreen = TabNavigator({
    Home: { screen: Home},
    NewCase: { screen: NewCase },
});

const MainScreenNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    CaseDetails: { screen: CaseDetails }
});

function createComponent(instance, props) {
    return () => React.createElement(instance, props);
}

class SimpleApp extends React.Component {
    constructor(props) {
        super(props);
        this.realm = new Realm({schema: [Case]});
        this.state = {
            cases: this.realm.objects('Case').sorted('dateTimeCreated', true),
        }
        this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
    }

    onNavigationStateChange(prevState, currentState){
        console.log(currentState);
        console.log(currentState.index);
        if ( (currentState.index) == 0 && (prevState.index == 0) && (currentState.routes[0].index == 0) ) {
            this.setState({
                cases: this.realm.objects('Case').sorted('dateTimeCreated', true),
            })
        }
    }
    render() {
        return (
            <MainScreenNavigator screenProps={this.state} onNavigationStateChange={this.onNavigationStateChange}/>
        );
    }
}

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);