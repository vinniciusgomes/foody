import React, {Component} from 'react';

import {
  Container,
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderButton,
  HeaderIcon,
  Content,
  BottomContainer,
  TitleContainer,
  Title
} from './styles';

export default class Plate extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container
        source={require('~/static/images/plate1.jpg')}
        resizeMode="cover">
        <Header iosBarStyle="light-content">
          <HeaderLeft>
            <HeaderButton onPress={() => navigate('Tabs')} transparent>
              <HeaderIcon name="arrow-back" />
            </HeaderButton>
          </HeaderLeft>
          <HeaderRight>
            <HeaderButton onPress={() => navigate('Tabs')} transparent>
              <HeaderIcon name="ios-heart-empty" />
            </HeaderButton>
          </HeaderRight>
        </Header>
        <Content>
          <BottomContainer>
            <TitleContainer>
              <Title>Torradas com blueberry</Title>
            </TitleContainer>
          </BottomContainer>
        </Content>
      </Container>
    );
  }
}
