import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Alto_icon from './Alto_icon.png';
import Alto_0 from './Alto_0.png';

const data = {
    id: 0,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    description:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
    age: '9+',
    rating: 4.4,
    preview: Alto_0,
    backgroundColor: '#824671CC',
};


export default class UI extends Component {
     
    render() {
        return (
            <View style={styles.container}>
                <Image source={data.preview}/>
                 <View View style={styles.info}>
                 <Image source={data.icon} style={styles.icon}/>
                <View style={styles.infoContent}>
                    <Text style ={styles.textInfo}>{data.title}</Text>
                    <Text style ={styles.infoContent}>{data.subTitle}</Text>
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#343434',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius:10, 
    },
    info: {
        
        width: '90%',
        height: 100,
        marginTop: 20,
        borderRadius : 10,
        padding: 10, 
        backgroundColor: '#824671CC',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    infoContent: {
        width: '80%',
        fontSize: 10,
        color: 'white'
    },
    textInfo: {
        color: 'white',
        fontWeight: 'bold',
        
    }

})

