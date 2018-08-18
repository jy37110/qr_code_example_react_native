import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode';

export default class GenerateQR extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            qrCodeText: '',
            renderQR: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '80%'}}
                    onChangeText={(text) => this.setState({qrCodeText: text})}
                    value={this.state.qrCodeText}
                    placeholder={"type thing to encode in the QR code"}
                />
                <TouchableOpacity
                    style={styles.myButton}
                    onPress={() => {this.setState({renderQR:true})}}
                    underlayColor='#2F4C67'>
                    <Text style={styles.myText}>Generate QR code</Text>
                </TouchableOpacity>

                {this.state.renderQR ?
                    <QRCode
                        value={this.state.qrCodeText}
                        size={200}
                        bgColor='purple'
                        fgColor='white'/> : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    myButton:{
        marginTop:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#6099C0',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#6099C0',
        marginBottom: 20,
    },
    myText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    }
});