import React, {Component} from 'react';
import LottieView from 'lottie-react-native';

import {Container} from './styles';

export default class BasicExample extends Component {
  componentDidMount() {
    this.animation.play();
    this.animation.play(30, 120);
  }

  render() {
    return (
      <Container>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('~/animations/location.json')}
        />
      </Container>
    );
  }
}
