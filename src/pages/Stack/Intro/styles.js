import styled from 'styled-components';
import {Platform} from 'react-native';
import * as Nativebase from 'native-base';

import colors from '~/static/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
`;

export const Header = styled(Nativebase.Header)`
  border-bottom-width: 0;
  background-color: ${colors.white};
  margin-top: -20px;
`;

export const Content = styled.ScrollView`
  padding: 0 20px 0 20px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ImageShadow = styled.View`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: rgba(45, 187, 84, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
`;

export const WelcomeTextContainer = styled.View`
  margin-top: 20px;
  width: 100%;
`;

export const WelcomeText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #494a4b;
  text-align: center;
`;

export const SubtitleContainer = styled.View`
  margin-top: 15px;
  width: 100%;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: #979899;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const Button = styled(Nativebase.Button)`
  width: 325px;
  height: 53px;
  elevation: 0;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  margin-bottom: 20px;
  border-radius: 2px;
  border: ${props => (props.outline ? '1px' : 0)};
  border-color: #eaebec;
`;

export const ButtonContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ButtonImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

export const ButtonIcon = styled(Nativebase.Icon)`
  font-size: 30px;
  margin-right: 15px;
  color: ${props => (props.color ? props.color : colors.white)};
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${props => (props.color ? props.color : colors.grey)};
`;

export const CreateAccountContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'ios' ? '20px' : '10px'};
`;

export const CreateAccount = styled(Nativebase.Button)`
  elevation: 0;
  background-color: rgba(0, 0, 0, 0);
`;

export const CreateAccountText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #494a4b;
`;
