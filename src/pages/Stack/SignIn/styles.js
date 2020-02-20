import styled from 'styled-components';
import {Platform} from 'react-native';
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
`;

export const HeaderLeft = styled(Nativebase.Left)``;

export const HeaderBody = styled(Nativebase.Body)``;

export const HeaderRight = styled(Nativebase.Right)``;

export const HeaderIcon = styled(Nativebase.Icon)`
  color: #979899;
`;

export const HeaderButton = styled(Nativebase.Button)`
  background-color: rgba(0, 0, 0, 0);
  margin-left: -11px;
  elevation: 0;
`;

export const Content = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FirstArea = styled.View`
  background-color: #ffffff;
`;

export const SecondArea = styled.View`
  background-color: #ffffff;
`;

export const FormContainer = styled.View`
  width: 100%;
  padding: ${Platform.OS === 'ios'
    ? '20px 16px 0px 16px'
    : '0px 16px 0px 16px'};
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

export const InputActionClear = styled(Nativebase.Button)`
  background-color: rgba(0, 0, 0, 0);
  elevation: 0;
  margin-top: -20px;
`;

export const InputActionClearIcon = styled(Nativebase.Icon)`
  color: #cbcccd;
  font-size: 15px;
`;

export const InputActionShow = styled(Nativebase.Button)`
  background-color: rgba(0, 0, 0, 0);
  elevation: 0;
  margin-top: -20px;
`;

export const InputActionShowText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #494a4b;
`;

export const Input = styled.TextInput`
  width: ${props => (props.email ? '100%' : '75%')};
  margin-top: ${Platform.OS === 'ios' ? '20px' : '0px'};
  font-weight: 500;
  font-size: 20px;
  color: #494a4b;
`;

export const Button = styled(Nativebase.Button)`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.disabled ? '#F7F8F9' : colors.green)};
  border-top-width: 1px;
  border-top-color: ${props => (props.disabled ? '#eaebec' : colors.green)};
  elevation: 0;
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
  color: ${props => (props.disabled ? '#F7F8F9' : colors.white)};
`;

export const RecoveryPasswordContainer = styled(Nativebase.Button)`
  width: 100%;
  padding-left: 20px;
  margin-bottom: 30px;
  background-color: rgba(0, 0, 0, 0);
  elevation: 0;
`;

export const RecoveryPassword = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #494a4b;
`;
