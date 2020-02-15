import styled from 'styled-components';
import * as Nativebase from 'native-base';

import colors from '~/static/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  width: 250px;
  margin-right: 20px;
`;

export const Button = styled(Nativebase.Button)`
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

export const Image = styled.Image`
  width: 250px;
  height: 150px;
  border-radius: 4px;
  margin-top: 15px;
`;

export const LocationContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;


export const LocationContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LocationIcon = styled(Nativebase.Icon)`
  font-size: 11px;
  color: ${props => props.color};
  margin-left: 0px;
  margin-right: 5px;
`;

export const RestaurantName = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: ${props => props.color};
`;

export const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RatingIcon = styled(Nativebase.Icon)`
  font-size: 11px;
  color: #f4ca00;
  margin-right: 5px;
`;

export const RatingText = styled.Text`
  font-size: 10px;
  color: #222222;
`;

export const PlateName = styled.Text`
  font-size: 15px;
  color: #222222;
  font-weight: 700;
  margin-top: 7px;
  width: 100%;
`;

export const PriceContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const Price = styled.Text`
  font-size: 13px;
  color: #222222;
`;

export const Person = styled.Text`
  font-size: 15px;
  color: #222222;
  font-weight: 300;
`;
