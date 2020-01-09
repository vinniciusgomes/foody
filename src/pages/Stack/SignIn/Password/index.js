import React, {Component} from 'react';
import {Keyboard} from 'react-native'

import Loading from '~/components/animations/Loading';
import Confirmation from '~/components/animations/Confirmation';
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
      hidePassword: true,
      loading: false,
      success: false,
    };
  }

  requestSignIn = () => {
    Keyboard.dismiss()
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({success: true, loading: false});
    }, 2000);
    setTimeout(() => {
      this.setState({success: false, loading: false});
      this.props.navigation.navigate("Tabs")
    }, 3150);
  };

  render() {
    const {password, hidePassword, loading, success} = this.state;
    return (
      <Container>
        {success ? <Confirmation /> : loading ? <Loading /> : null}
        <Content behavior="padding" enabled>
          <FirstArea>
            <Header noShadow>
              <HeaderLeft>
                <HeaderButton
                  onPress={() => this.props.navigation.navigate('SignInEmail')}
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
                  secureTextEntry={hidePassword}
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
                        this.setState({hidePassword: !hidePassword})
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
              onPress={() => this.requestSignIn()}
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
