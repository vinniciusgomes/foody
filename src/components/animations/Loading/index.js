import React, {Component} from 'react';
import LottieView from 'lottie-react-native';

import {Container, LoadingContainer} from './styles';

export default class Loading extends Component {
  render() {
    return (
      <Container>
        <LoadingContainer>
          {this.props.success ? (
            <LottieView
              autoPlay
              loop
              source={require('~/animations/confirmation.json')}
            />
          ) : (
            <LottieView
              autoPlay
              loop
              source={require('~/animations/loader-bar.json')}
            />
          )}
        </LoadingContainer>
      </Container>
    );
  }
}
