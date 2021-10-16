/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DemoComponent from './src/Buoi1/DemoComponent';
import {DemoComponentNonDefault} from './src/Buoi1/DemoCompNonDefault';
import DemoStyle from './src/Buoi1/DemoStyle';
import Binding from './src/Buoi3/BindingData';
import UI from './src/BaiTapUI'
import Emoji from './src/Emoji';

// Stateful Component
class App extends Component {

  render() {
    return <Emoji/>;
      
    
  }
}




export default App;
