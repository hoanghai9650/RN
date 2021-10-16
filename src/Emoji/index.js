import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import angry from './angry.png'
import care from './care.png'
import haha from './haha.png'
import like from './like.png'
import love from './love.png'
import sad from './sad.png'

export default class Emoji extends Component {
    listEmoji = [
        {icon: angry },
        {icon: care },
        {icon: haha },
        {icon: like },
        {icon: love },
        {icon: sad },
    ];
    state = {
        main : this.listEmoji[0].icon
    }
    onPressEmoji = (prop) =>{
        this.setState({ main: this.listEmoji[prop].icon});
    }

    renderImg(){
        return <Image source={this.state.main}></Image>
    }

    renderListEmoji = () =>{
        const result = this.listEmoji.map((emo, index) =>{
            return (
        
            <TouchableHighlight  onPress={() =>this.onPressEmoji(index)} >
            <Image style={styles.Emoji} source={emo.icon}></Image>
            </TouchableHighlight>
            
            )
        });
        return result;

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Bạn cảm thấy thế nào</Text>
                <Image style={styles.img} source={this.state.main}></Image>
                
                <View style={styles.listEmoji}>
                    {this.renderListEmoji()}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flexDirection: 'column',
        flex: 1,
        
    },
    img: {
        margin: 20,
        width: '57%',
        height: '26%',
    },
    listEmoji: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#824671CC',
        width : '90%',
        borderRadius: 30,
        padding: 10,


    },
    Emoji: {
        width : 40,
        height: 40,
        
    }

})
