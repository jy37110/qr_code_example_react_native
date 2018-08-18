import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';


export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <View style={styles.container}>
              <TouchableOpacity
                  style={styles.myButton}
                  onPress={() => {this.props.navigation.navigate('generate')}}
                  underlayColor='#2F4C67'>
                  <Text style={styles.myText}>Generate a QR code</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.myButton}
                  onPress={() => {this.props.navigation.navigate('scan')}}
                  underlayColor='#2F4C67'>
                  <Text style={styles.myText}>Open Scanner</Text>
              </TouchableOpacity>
          </View>
        );
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
        borderColor: '#6099C0'
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