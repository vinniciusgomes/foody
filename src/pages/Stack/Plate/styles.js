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
  height: 51%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${colors.white};
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.15);
  padding: 40px 20px 20px 20px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: ${colors.black};
`;

export const Price = styled.Text`
  font-size: 19px;
  font-weight: 500;
  color: ${colors.green};
`;

export const PlateRatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const PlateRating = styled(Nativebase.Icon)`
  color: ${props => (props.rated ? colors.yellow : colors.grey)};
  font-size: 20px;
  margin-right: 3px;
`;

export const RatingCounter = styled.Text`
  font-size: 12px;
  margin-left: 5px;
  color: ${colors.grey};
`;

export const ShortcutContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30px 0 20px;
`;

export const ShortcutItem = styled.TouchableOpacity`
  width: 70px;
  height: 25px;
  background-color: rgba(35, 40, 46, 0.75);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const ShortcutText = styled.Text`
  font-size: 12px;
  color: ${colors.white};
`;

export const InfoContainer = styled.View`
  width: 100%;
  margin-top: 10px;
`;

export const InfoItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const InfoIcon = styled(Nativebase.Icon)`
  font-size: 20px;
  margin-right: 2px;
  color: ${colors.grey};
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: ${colors.grey};
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const DescriptionTitle = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: ${colors.black};
`;

export const DescriptionContent = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: ${colors.grey};
`;
