import React, { Component } from 'react';
import {
  Container, Button, Icon,
  Header, Left, Right, Body, Title,
  Content, Text,
  Footer, FooterTab
} from 'native-base';

export default class HeaderExample extends Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      //'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
  }

  render() {
   return (
     <Container>
       <Header style={{ backgroundColor: "red" }}>
         <Left>
           <Button transparent>
             <Icon name='menu' />
           </Button>
         </Left>
         <Body>
           <Title>Basic UI with NativeBase</Title>
         </Body>
         <Right />
       </Header>

       <Content>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
          <Text>Will It Scroll?</Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
     </Container>
   );
 }
}