import React, {Component} from 'react';

import {
  Container,
  Header,
  HeaderLeft,
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
        <Content behavior="padding" enabled>
          <FirstArea>
            <Header noShadow>
              <HeaderLeft>
                <HeaderButton
                  onPress={() => this.props.navigation.navigate('Intro')}
                  transparent>
                  <HeaderIcon name="ios-arrow-round-back" />
                </HeaderButton>
              </HeaderLeft>
            </Header>
            <FormContainer>
              <Title>Qual seu email?</Title>
              <Input
                placeholder="exemplo@foodyapp.com"
                placeholderTextColor="#D9DADB"
                selectionColor="#2DBB54"
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
          <Button onPress={() => this.props.navigation.navigate("SignInPassword")} disabled={emailAddress ? false : true}>
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
