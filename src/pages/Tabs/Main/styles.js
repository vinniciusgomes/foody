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
  width: 100%;
  padding: 0 0px 0 16px;
`;

export const PlatesContainer = styled.View`
  margin-top: ${Platform.OS === 'ios' ? '20px' : '0px'};
  width: 100%;
`;

export const SectionTitleContainer = styled.View`
  width: 100%;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  color: ${colors.black};
  font-weight: ${Platform.OS === 'ios' ? 600 : 'bold'};
`;

export const ViewAllButton = styled(Nativebase.Button)`
  background-color: transparent;
  elevation: 0;
  border: 0;
  padding: 0;
`;

export const ViewAllText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.black};
`;

export const PlatesListContainer = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const SectionSubtitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.black};
  margin-bottom: 15px;
`;

// Plate Section
export const PlateContainer = styled.View`
  flex: 1;
  background-color: ${colors.white};
  width: 155px;
  margin-right: 16px;
`;

export const PlateButton = styled(Nativebase.Button)`
  width: 155px;
  height: auto;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  border: 0;
  elevation: 0;
`;

export const PlateImage = styled.Image`
  width: 155px;
  height: 142px;
  border-radius: 4px;
  margin-top: 15px;
`;

export const PlateLocationContainer = styled.View`
  width: 155px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const PlateLocationContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PlateLocationIcon = styled(Nativebase.Icon)`
  font-size: 11px;
  color: ${props => props.color};
  margin-left: 0px;
  margin-right: 5px;
`;

export const PlateRestaurantName = styled.Text`
  width: 90%;
  font-size: 10px;
  font-weight: bold;
  margin-right: -30%;
  color: ${props => props.color};
`;

export const PlateRatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PlateRatingIcon = styled(Nativebase.Icon)`
  font-size: 11px;
  color: ${colors.yellow};
  margin-right: 5px;
`;

export const PlateRatingText = styled.Text`
  font-size: 10px;
  color: ${colors.black};
`;

export const PlateName = styled.Text`
  font-size: 15px;
  color: ${colors.black};
  font-weight: 700;
  width: 100%;
`;

export const PlatePriceContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PlatePrice = styled.Text`
  font-size: 12px;
  color: ${colors.black};
`;

// Restaurant section
export const RestaurantSectionContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
`;

export const RestaurantListContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding-right: 0px;
  justify-content: space-between;
`;

export const RestaurantItem = styled.View`
  width: 50%;
  padding-right: 16px;
  margin-top: 20px;
`;

export const RestaurantImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 4px;
`;

export const RestaurantButton = styled(Nativebase.Button)`
  width: 250px;
  height: auto;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  border: 0;
  elevation: 0;
`;

export const RestaurantLocationContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const RestaurantLocationContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RestaurantLocationIcon = styled(Nativebase.Icon)`
  font-size: 11px;
  color: ${props => props.color};
  margin-left: 0px;
  margin-right: 5px;
`;

export const RestaurantRestaurantName = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: ${props => props.color};
`;

export const RestaurantRatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RestaurantRatingIcon = styled(Nativebase.Icon)`
  font-size: 11px;
  color: ${colors.yellow};
  margin-right: 5px;
`;

export const RestaurantRatingText = styled.Text`
  font-size: 10px;
  color: ${colors.black};
`;

export const RestaurantName = styled.Text`
  font-size: 15px;
  color: ${colors.black};
  font-weight: 700;
  width: 100%;
`;

export const RestaurantPriceContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RestaurantPrice = styled.Text`
  font-size: 12px;
  color: ${colors.black};
`;
