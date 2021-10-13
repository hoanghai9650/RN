import React, { Component } from "react";
import {Text, View, StyleSheet } from "react-native";

export default class DemoStyle extends Component{
    render() {
        return(
            <View style={{flex: 1, marginTop: 30, marginLeft: 50, marginRight: 50}}>
              <View style={styles}>
                <Text>Purple: #C9C9FF</Text>
              </View>
              <View style={[styles,styles.blue]}>
                <Text>Blue: #3D85C6</Text>
              </View>
              <View style={[styles,styles.green]}>
                <Text>Green: #96CC96</Text>
              </View>
              <View style={[styles,styles.yellow]}>
                <Text>Yellow: #F4B940</Text>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    flexDirection: 'column',
    backgroundColor: '#C9C9FF', 
    Height: 200,
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop:10,
    flex: 1,
    borderRadius: 15,
    
    blue: {
        backgroundColor: '#3D85C6',
    },
    green: {
        backgroundColor: '#96CC96',
    },
    yellow: {
        backgroundColor: '#F4B940',
    }
    
})