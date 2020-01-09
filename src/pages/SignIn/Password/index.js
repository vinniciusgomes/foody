import React, {Component} from 'react';

import {
  Container,
  FirstArea,
  Header,
  HeaderLeft,
  HeaderButton,
  HeaderIcon,
  Content,
  InputContainer,
  InputActionsContainer,
  InputActionClear,
  InputActionClearIcon,
  InputActionShow,
  InputActionShowText,
  FormContainer,
  Button,
  ButtonText,
  ButtonIcon,
  Title,
  Input,
  SecondArea,
  RecoveryPasswordContainer,
  RecoveryPassword,
} from '../styles';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      showPassword: true,
    };
  }
  render() {
    const {password, showPassword} = this.state;
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
              <Title>Senha</Title>
              <InputContainer>
                <Input
                  placeholder="************"
                  placeholderTextColor="#D9DADB"
                  selectionColor="#2DBB54"
                  keyboardType="email-address"
                  autoCorrect={false}
                  clearTextOnFocus={false}
                  autoCapitalize="none"
                  autoCompleteType="off"
                  secureTextEntry={showPassword}
                  onChangeText={password => this.setState({password: password})}
                  value={password}
                />
                {password ? (
                  <InputActionsContainer>
                    <InputActionClear
                      onPress={() => this.setState({password: null})}>
                      <InputActionClearIcon name="md-close-circle" />
                    </InputActionClear>
                    <InputActionShow
                      onPress={() =>
                        this.setState({showPassword: !showPassword})
                      }>
                      <InputActionShowText>Mostrar</InputActionShowText>
                    </InputActionShow>
                  </InputActionsContainer>
                ) : null}
              </InputContainer>
            </FormContainer>
          </FirstArea>
          <SecondArea>
            <RecoveryPasswordContainer>
              <RecoveryPassword>Recuperar senha</RecoveryPassword>
            </RecoveryPasswordContainer>
            <Button
              onPress={() => this.props.navigation.navigate('Tabs')}
              disabled={password ? false : true}>
              <ButtonText disabled={password ? false : true}>
                Continuar
              </ButtonText>
              <ButtonIcon
                name="ios-arrow-round-forward"
                disabled={password ? false : true}
              />
            </Button>
          </SecondArea>
        </Content>
      </Container>
    );
  }
}

export default Password;
