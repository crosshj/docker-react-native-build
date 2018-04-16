/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

//import React, { Component } from 'react';
// import {
//  Platform,
//  StyleSheet,
//  Text,
//  View
// } from 'react-native';

import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const App = () => (
  <Container>
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right />
    </Header>
  </Container>
);

export default App;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     flex: 1
//   },
//   header: {
//     backgroundColor: "#c0392b ",
//     height: 56,
//     paddingTop: 10
//   },
//   headerText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: 600
//   },
//   content: {
//     backgroundColor: "white",
//     padding: 20,
//   },
//   footer: {
//     backgroundColor: "#c0392b ",
//     height: 70
//   },
//   footerText: {
//     color: "#fff",
//     fontSize: 16
//   }
//  });