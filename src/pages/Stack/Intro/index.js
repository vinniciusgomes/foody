import React, {Component} from 'react';

import {
  Container,
  Header,
  HeaderLeft,
  HeaderButton,
  HeaderIcon,
  Content,
  ImageShadow,
  ImageContainer,
  Image,
  WelcomeTextContainer,
  WelcomeText,
  SubtitleContainer,
  Subtitle,
  ButtonContainer,
  Button,
  ButtonContentContainer,
  ButtonImage,
  ButtonText,
  ButtonIcon,
  CreateAccountContainer,
  CreateAccount,
  CreateAccountText,
} from './styles';

class Intro extends Component {
  render() {
    return (
      <Container>
        <Header noShadow />
        <Content>
          <ImageContainer>
            <ImageShadow>
              <Image source={require('~/static/images/foody_rounded.png')} />
            </ImageShadow>
          </ImageContainer>
          <WelcomeTextContainer>
            <WelcomeText>Bem vindo</WelcomeText>
            <WelcomeText>Novamente!</WelcomeText>
          </WelcomeTextContainer>
          <SubtitleContainer>
            <Subtitle>Acesse sua conta para encontrar</Subtitle>
            <Subtitle>os melhores restaurantes</Subtitle>
          </SubtitleContainer>
          <ButtonContainer>
            <Button
              onPress={() => this.props.navigation.navigate('Tabs')}
              backgroundColor="#3554A3">
              <ButtonContentContainer>
                <ButtonIcon
                  color="#ffffff"
                  name="facebook"
                  type="MaterialCommunityIcons"
                />
                <ButtonText color="#ffffff">Entrar com Facebook</ButtonText>
              </ButtonContentContainer>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Tabs')}
              outline>
              <ButtonContentContainer>
                <ButtonImage source={require('~/static/images/google.png')} />
                <ButtonText color="#1D1D1D">Entrar com Google</ButtonText>
              </ButtonContentContainer>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('SignInEmail')}
              backgroundColor="#2DBB54">
              <ButtonContentContainer>
                <ButtonIcon color="#ffffff" name="mail" type="Octicons" />
                <ButtonText color="#ffffff">Entrar com Email</ButtonText>
              </ButtonContentContainer>
            </Button>
          </ButtonContainer>
          <CreateAccountContainer>
            <CreateAccount>
              <CreateAccountText>Criar conta</CreateAccountText>
            </CreateAccount>
          </CreateAccountContainer>
        </Content>
      </Container>
    );
  }
}

export default Intro;
