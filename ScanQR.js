import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import { BarCodeScanner, Permissions } from 'expo';


export default class ScanQR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QRType:'',
            QRData:'',
            hasCameraPermission: null
        }
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    _handleBarCodeRead = ({ type, data }) => {
        this.setState({
            QRType:type,
            QRData:data,
        });
    };

    render () {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return(
                <View style={{ flex: 1 }}>
                    <BarCodeScanner
                        onBarCodeRead={this._handleBarCodeRead}
                        style={[StyleSheet.absoluteFill, {flex: 1, flexDirection: 'column'}]}
                    >
                    <View style={{flex: 2}} >
                        <Text style={{fontWeight:'bold', fontSize:24, color:'red'}}>Bar code with type of "{this.state.QRType}" and data "{this.state.QRData}" has been scanned!</Text>
                    </View>
                    </BarCodeScanner>
                </View>
            )
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});