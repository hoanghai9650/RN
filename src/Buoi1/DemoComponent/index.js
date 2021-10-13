/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { View, Text } from 'react-native';
 
//  Stateful Component
 export default class App extends Component {
 
   render() {
     return(
              <View style={{marginTop: 50}}>
           <Text style={{fontSize: 18, fontWeight: '700'}}>DemoComponentDefault</Text>
         </View>
     );
       
     
   }
 }
 
 // Stateless
 // const App = () => (
   
 //     <View style={{marginTop: 50}}>
 //     <Text style={{fontSize: 18}}>Welcome</Text>
 //     </View>
   
 // )
 
//  const App = function (){
//    return(
//          <View style={{marginTop: 50}}>
//            <Text style={{fontSize: 18, fontWeight: '700'}}>DemoComponentNonDefault</Text>
//          </View>
//    );
//  };
 
 
 
 