import React, { Component } from 'react';
import {
    Content, Card, CardItem, Body, Text
} from 'native-base';

function cardList(){
    return (
        <Content>
            { new Array(100).fill().map((x, i) => {
                return (
                <Card>
                    <CardItem>
                        <Body>
                            <Text>
                            Will It Scroll? - {i}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                );
            })}
        </Content>
    );
}

export default cardList;
