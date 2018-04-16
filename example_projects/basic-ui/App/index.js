import React, { Component } from 'react';
import {
  Container, Button, Icon,
  Header, Left, Right, Body, Title,
  Tabs, Tab, TabHeading,
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
            <Content>
              { new Array(100).fill().map((x, i) => {
                return <Text>Tab 1: Will It Scroll? - {i}</Text>
              })}
            </Content>
          </Tab>
          <Tab heading={ <TabHeading><Text>TOTALS</Text></TabHeading>}>
            <Content>
              { new Array(100).fill().map((x, i) => {
                return <Text>Tab 2: Will It Scroll? - {i}</Text>
              })}
            </Content>
          </Tab>
          <Tab heading={ <TabHeading><Text>ASSETS</Text></TabHeading>}>
            <Content>
              { new Array(100).fill().map((x, i) => {
                return <Text>Tab 3: Will It Scroll? - {i}</Text>
              })}
            </Content>
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
   );
 }
}
