import React from 'react';
import { createStackNavigator } from 'react-navigation';
import GenerateQR from './GenerateQR';
import ScanQR from './ScanQR';
import HomeScreen from './HomeScreen';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <RootStack />
        )
    }
}

const RootStack = createStackNavigator(
    {
    Home: { screen: HomeScreen },
    generate: { screen: GenerateQR },
    scan: { screen: ScanQR}
    },
    {
        initialRouteName: 'Home',
    }
);