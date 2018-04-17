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
                            Tab 2: Will It Scroll? - {i}
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
