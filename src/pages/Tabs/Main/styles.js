import styled from 'styled-components';
import {Platform} from 'react-native';
import * as Nativebase from 'native-base';

import colors from '~/static/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled(Nativebase.Header)`
  border-bottom-width: 0;
  background-color: ${colors.white};
  padding-left: ${Platform.OS === 'ios' ? '20px' : '12px'};
`;

export const HeaderLeft = styled(Nativebase.Left)``;

export const HeaderBody = styled(Nativebase.Body)``;

export const HeaderRight = styled(Nativebase.Right)``;

export const HeaderIcon = styled(Nativebase.Icon)`
  color: ${colors.black};
`;

export const HeaderButton = styled(Nativebase.Button)``;

export const Content = styled.ScrollView`
  width: 100%;
  padding: 0 0px 0 20px;
`;

export const PlatesContainer = styled.View`
  margin-top: ${Platform.OS === 'ios' ? '20px' : '0px'};
  width: 100%;
`;

export const PlatesTitleContainer = styled.View`
  width: 100%;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const PlatesTitle = styled.Text`
  font-size: 24px;
  color: #222222;
  font-weight: ${Platform.OS === 'ios' ? 600 : 'bold'};
`;

export const ViewAllText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #222222;
`;

export const PlatesListContainer = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const PlateContainer = styled.TouchableOpacity`
  margin-top: 15px;
  margin-right: 20px;
  width: 155px;
`;

export const PlateImage = styled.Image`
  width: 155px;
  height: 142px;
  border-radius: 5px;
`;

export const PopularContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
`;

export const PopularTitleContainer = styled.View`
  width: 100%;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const PopularTitle = styled.Text`
  font-size: 24px;
  font-weight: ${Platform.OS === 'ios' ? 600 : 'bold'};
  color: #222222;
`;

export const PopularSubtitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #222222;
  margin-bottom: 15px;
`;

export const PopularPlatesContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding-right: 0px;
  justify-content: space-between;
`;
