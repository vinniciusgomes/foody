import styled from 'styled-components';
import * as Nativebase from 'native-base';

import colors from '~/static/colors';

export const Container = styled.ImageBackground`
  background-color: ${colors.white};
`;

export const Header = styled(Nativebase.Header)`
  border-bottom-width: 0;
  background-color: transparent;
  padding: 20px 20px 0px 20px;
`;

export const HeaderLeft = styled(Nativebase.Left)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderRight = styled(Nativebase.Right)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderIcon = styled(Nativebase.Icon)`
  color: ${colors.white};
`;

export const HeaderButton = styled(Nativebase.Button)``;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const BottomContainer = styled.View`
  width: 100%;
  height: 500px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${colors.white};
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.15);
  padding: 40px 20px 20px 20px;
`;

export const TitleContainer = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: ${colors.black};
`;
