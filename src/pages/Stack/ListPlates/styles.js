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
  padding-left: ${Platform.OS === 'ios' ? '16px' : '8px'};
`;

export const HeaderLeft = styled(Nativebase.Left)``;

export const HeaderBody = styled(Nativebase.Body)``;

export const HeaderRight = styled(Nativebase.Right)``;

export const HeaderIcon = styled(Nativebase.Icon)`
  color: ${colors.black};
`;

export const HeaderButton = styled(Nativebase.Button)``;

export const Content = styled.ScrollView`
  padding: 0px 16px 0px 16px;
  width: 100%;
`;

export const TitleContainer = styled.View`
  width: 100%;
  margin-top: ${Platform.OS === 'ios' ? '20px' : '0px'};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.black};
  font-weight: ${Platform.OS === 'ios' ? 600 : 'bold'};
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: #707070;
`;

export const PlatesContainer = styled.View`
  width: 100%;
  margin-top: 25px;
`;

export const PlateItem = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const PlateImageContainer = styled.View`
  width: 40%;
`;

export const PlateImage = styled.Image`
  width: ${Platform.OS === 'ios' ? '155px' : '145px'};
  height: ${Platform.OS === 'ios' ? '142px' : '132px'};
  border-radius: 5px;
`;

export const PlateInfo = styled.View`
  height: ${Platform.OS === 'ios' ? '142px' : '132px'};
  width: 45%;
  margin-left: ${Platform.OS === 'ios' ? '15px' : '25px'};
`;

export const PlateTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PlateTitle = styled.Text`
  font-size: 20px;
  font-weight: ${Platform.OS === 'ios' ? 600 : 'bold'};
  color: ${colors.black};
`;

export const PlateVerificationIcon = styled(Nativebase.Icon)`
  font-size: 15px;
  margin-left: 10px;
  color: #0e9ef9;
`;

export const PlateRatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const PlateRating = styled(Nativebase.Icon)`
  color: ${colors.yellow};
  font-size: 17px;
  margin-right: 3px;
`;

export const PlateInfoItem = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const PlateInfoIcon = styled(Nativebase.Icon)`
  font-size: 17px;
  margin-right: 2px;
  color: ${colors.grey};
`;

export const PlateInfoText = styled.Text`
  font-size: 12px;
  color: ${colors.grey};
`;

export const PlatePriceContainer = styled.View`
  width: 100%;
`

export const PlatePrice = styled.Text`
  color: #2DBB54;
  font-size: 16px;
  font-weight: bold
`
