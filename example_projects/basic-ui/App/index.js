import React, { Component } from 'react';
import {
  Container, Button, Icon,
  Header, Left, Right, Body, Title,
  Tabs, Tab, TabHeading,
  Content, Text,
  Footer, FooterTab,
  StyleProvider
} from 'native-base';

import getTheme from './native-base-theme/components';

import CardList from './CardList';

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
    <StyleProvider  style={getTheme()}>
     <Container>
       {/* <Header style={{ backgroundColor: "#8BC34A" }}>
         <Left>
           <Button transparent>
             <Icon name='menu' />
           </Button>
         </Left>
         <Body>
           <Title>Basic UI with NativeBase</Title>
         </Body>
         <Right />
       </Header> */}

        <Tabs>
          <Tab heading={ <TabHeading><Text>DEBTS</Text></TabHeading>}>
            <CardList />
          </Tab>
          <Tab heading={ <TabHeading><Text>TOTALS</Text></TabHeading>}>
            <CardList />
          </Tab>
          <Tab heading={ <TabHeading><Text>ASSETS</Text></TabHeading>}>
            <CardList />
          </Tab>
        </Tabs>

        {/* <Footer style={{ backgroundColor: "#8BC34A" }}>
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
        </Footer> */}
     </Container>
     </StyleProvider>
   );
 }
}
