import React, { Component } from "react";
import {Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

export default class index extends Component {
    
    
    state = {
        name : 'RN 03',
        isLogin : false ,
    };
    

    onPressButton= () => {
        if(this.state.isLogin){
            this.setState({ isLogin : false }, ()=>{
                this.setState({ name : 'RN 03'})

            });
        }
        else{
            this.setState({ isLogin : true }, ()=>{
                this.setState({ name : 'Logged'});
            });
        }
        console.log(this.state.isLogin);
        
    }

    renderHaha(){     
         return <Text>{this.state.name}</Text>   
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
                
                
                {this.renderHaha()}
                <TouchableOpacity style={styles.btn} onPress={this.onPressButton}>
                
                    <Text style={{fontSize: 18}}>Hello</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    btn: {
        backgroundColor:'#bfb',
        // title="Sign In",
        width:100,
        height:50, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    }
})

