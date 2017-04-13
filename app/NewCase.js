import React from 'react';
import {
    AppRegistry,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    AsyncStorage,
    ScrollView
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import Realm from 'realm';
import Styles from './Style';
import { Case } from './models/Case';
import Home from './index';



class NewCase extends React.Component {
    static navigationOptions = {
        title: 'New Case',
    };

    constructor(props) {
        super(props);
        this.state = { text: '' };

        this.handleButtonPress = this.handleButtonPress.bind(this);
    };

    handleButtonPress() {
        realm = new Realm({schema: [Case]});
        if (this.state.text != '') {
            realm.write(() => {
                let newCase = realm.create('Case', {
                    name: this.state.text,
                    dateTimeCreated: Date.now()
                });

                // you can access and set all properties defined in your model
                console.log('new case for patient: ' + newCase.name);
            });
        }
        this.nameInput.setNativeProps({text: ''});
        this.state.text = '';
    }

    render() {
        return (
            <View>
                <Text>Name</Text>
                <TextInput
                    ref={(input) => { this.nameInput = input; }}
                    style={Styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                    onPress={this.handleButtonPress}
                    title="Save"
                />
            </View>
        )
    }
}

export default NewCase