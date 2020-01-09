import styled from 'styled-components';
import * as Nativebase from 'native-base';

import colors from '~/static/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  display: flex;
`;

export const Header = styled(Nativebase.Header)`
  border-bottom-width: 0;
  background-color: ${colors.white};
  padding: 20px 20px 0px 20px;
`;

export const HeaderLeft = styled(Nativebase.Left)``;

export const HeaderIcon = styled(Nativebase.Icon)`
  color: #979899;
`;

export const HeaderButton = styled(Nativebase.Button)``;

export const Content = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FirstArea = styled.View``;

export const SecondArea = styled.View``;

export const FormContainer = styled.View`
  width: 100%;
  padding: 20px 20px 0 20px;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-size: 24px;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputActionsContainer = styled.View`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 23px;
`;

export const InputActionClear = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const InputActionClearIcon = styled(Nativebase.Icon)`
  color: #cbcccd;
  font-size: 15px;
`;

export const InputActionShow = styled.TouchableOpacity``;

export const InputActionShowText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #494a4b;
`;

export const Input = styled.TextInput`
  width: 75%;
  margin-top: 20px;
  font-weight: 500;
  font-size: 20px;
  color: #494a4b;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.disabled ? '#F7F8F9' : colors.green)};
  border-top-width: 1px;
  border-top-color: ${props => (props.disabled ? '#eaebec' : colors.green)};
`;

export const ButtonText = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: ${props => (props.disabled ? '#979899' : colors.white)};
  padding-left: 20px;
`;

export const ButtonIcon = styled(Nativebase.Icon)`
  font-size: 40px;
  margin-right: 20px;
  color: ${props => (props.disabled ? '#979899' : colors.white)};
`;

export const RecoveryPasswordContainer = styled.TouchableOpacity`
  width: 100%;
  padding-left: 20px;
  margin-bottom: 30px;
`;

export const RecoveryPassword = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #494a4b;
`;
