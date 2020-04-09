import React, {Component} from 'react';
import LottieView from 'lottie-react-native';

import {Container, ConfirmationContainer} from './styles';

export default class Confirmation extends Component {
  render() {
    return (
      <Container>
        <ConfirmationContainer>
          <LottieView
            autoPlay
            source={require('~/animations/confirmation.json')}
          />
        </ConfirmationContainer>
      </Container>
    );
  }
}
