
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
import { Case } from './models/Case'



export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Your Cases',
    };

    constructor(props) {
        super(props);
        this.realm = new Realm({schema: [Case]});
    };


    render() {
        const { navigate } = this.props.navigation;
        const listItems = this.props.screenProps.cases.map((data, index) =>
            <View style={ (index == 0) ? Styles.firstListItem : Styles.listItem}
                  key={index}>
                <Text onPress={ () => navigate('CaseDetails', { data: data }) }>
                    {data.name}
                </Text>
            </View>
        );
        return (
            <View>
                <ScrollView>
                    { listItems }
                </ScrollView>
            </View>
        );
    }
}