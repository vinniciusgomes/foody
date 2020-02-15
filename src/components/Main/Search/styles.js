import styled from 'styled-components';
import * as Nativebase from 'native-base';

import colors from '~/static/colors';

export const Container = styled.View`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const SearchContainer = styled.View`
  width: 100%;
  padding-right: 20px;
  margin-top: 30px;
`;

export const Seacth = styled.View`
  width: 100%;
  height: 48px;
  background-color: ${colors.white};
  border: 1px;
  border-color: #eaebec;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInputContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;

export const SearchIcon = styled(Nativebase.Icon)`
  color: ${colors.black};
  font-size: 22px;
`;

export const FieldContainer = styled.View`
  display: flex;
  width: 81%;
  flex-direction: row;
  align-items: center;
`;

export const Field = styled.TextInput`
  width: 100%;
  margin-left: 20px;
`;

export const ShortcutContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px 0 10px;
`;

export const ShortcutItem = styled(Nativebase.Button)`
  width: 70px;
  height: 25px;
  background-color: #f4f4f4;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  elevation: 0;
`;

export const ShortcutText = styled.Text`
  font-size: 12px;
  color: ${colors.grey};
`;
