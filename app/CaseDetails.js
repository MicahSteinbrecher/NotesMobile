import React from 'react';
import {
    Text,
    View,
    Button,
    TextInput,
    AsyncStorage,
    ScrollView
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import Realm from 'realm';
import Styles from './Style';
import { Case } from './models/Case'

export default class CaseDetails extends React.Component {

    static navigationOptions = {
        title: (navigation) => {
            return navigation.state.params.data.name + "'s Case Details";
        },
    };

    render() {
        return (
            <Text>
                DUMMY DATA...
            </Text>
        );
    }
}