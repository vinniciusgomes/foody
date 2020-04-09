import React, {Component} from 'react';
import {Platform} from 'react-native';

import {
  Container,
  Header,
  HeaderLeft,
  HeaderBody,
  HeaderRight,
  HeaderButton,
  HeaderIcon,
  Content,
  FirstArea,
  FormContainer,
  Button,
  ButtonText,
  ButtonIcon,
  Title,
  Input,
} from '../styles';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: null,
    };
  }
  render() {
    const {emailAddress} = this.state;
    return (
      <Container>
        <Content
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled>
          <FirstArea>
            <Header
              noShadow
              androidStatusBarColor="#ffffff"
              iosBarStyle="dark-content">
              <HeaderLeft>
                <HeaderButton
                  onPress={() => this.props.navigation.navigate('Intro')}>
                  <HeaderIcon name="ios-arrow-round-back" />
                </HeaderButton>
              </HeaderLeft>
              <HeaderBody />
              <HeaderRight />
            </Header>
            <FormContainer>
              <Title>Qual seu email?</Title>
              <Input
                email
                placeholder="exemplo@foodyapp.com"
                placeholderTextColor="#D9DADB"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                autoCompleteType="off"
                onChangeText={emailAddress =>
                  this.setState({emailAddress: emailAddress})
                }
                value={emailAddress}
              />
            </FormContainer>
          </FirstArea>
          <Button
            onPress={() => this.props.navigation.navigate('SignInPassword')}
            disabled={emailAddress ? false : true}>
            <ButtonText disabled={emailAddress ? false : true}>
              Continuar
            </ButtonText>
            <ButtonIcon
              name="ios-arrow-round-forward"
              disabled={emailAddress ? false : true}
            />
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Email;
