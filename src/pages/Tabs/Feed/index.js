import React, {Component} from 'react';
import LottieView from 'lottie-react-native';

import {
  Container,
  Header,
  HeaderLeft,
  HeaderBody,
  HeaderRight,
  HeaderButton,
  HeaderIcon,
  LoadingContainer,
  Content,
} from './styles';

export default class Feed extends Component {
  render() {
    return (
      <Container>
        <Header
          noShadow
          androidStatusBarColor="#ffffff"
          iosBarStyle="dark-content">
          <HeaderLeft>
            <HeaderButton transparent>
              <HeaderIcon name="menu" />
            </HeaderButton>
          </HeaderLeft>
          <HeaderBody />
          <HeaderRight />
        </Header>
        <Content>
          <LoadingContainer>
            <LottieView
              autoPlay
              loop
              source={require('~/animations/profile-loading.json')}
            />
          </LoadingContainer>
        </Content>
      </Container>
    );
  }
}