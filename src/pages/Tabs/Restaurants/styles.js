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
  color: ${colors.black};
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
  padding: 0px 20px 0px 20px;
  width: 100%;
`;

export const TitleContainer = styled.View`
  width: 100%;
  margin-top: ${Platform.OS === 'ios' ? '20px' : '0px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const MoreOptions = styled(Nativebase.Icon)`
  font-size: 24px;
  font-weight: bold;
`;

export const RestaurantsContainer = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const RestaurantItem = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const RestaurantImageContainer = styled.View`
  width: 40%;
`;

export const RestaurantImage = styled.Image`
  width: ${Platform.OS === 'ios' ? '155px' : '145px'};
  height: ${Platform.OS === 'ios' ? '142px' : '132px'};
  border-radius: 10px;
`;

export const RestaurantInfo = styled.View`
  height: ${Platform.OS === 'ios' ? '142px' : '132px'};
  width: 45%;
  margin-left: ${Platform.OS === 'ios' ? '15px' : '25px'};
`;

export const RestaurantTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RestaurantTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const RestaurantVerificationIcon = styled(Nativebase.Icon)`
  font-size: 15px;
  margin-left: 10px;
  color: #0e9ef9;
`;

export const RestaurantRatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const RestaurantRating = styled(Nativebase.Icon)`
  color: ${props => (props.rated ? colors.yellow : colors.grey)};
  font-size: 20px;
  margin-right: 3px;
`;

export const RestaurantInfoItem = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const RestaurantInfoIcon = styled(Nativebase.Icon)`
  font-size: 17px;
  margin-right: 2px;
  color: ${colors.grey};
`;

export const RestaurantInfoText = styled.Text`
  font-size: 12px;
  color: ${colors.grey};
`;
