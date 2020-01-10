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
  color: ${colors.black};
`;

export const HeaderButton = styled(Nativebase.Button)``;

export const LoadingContainer = styled.View`
  height: 65%;
  width: 65%;
`;

export const Content = styled.View`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
