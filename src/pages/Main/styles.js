import styled from 'styled-components';
import * as Nativebase from 'native-base';

import colors from '~/static/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled(Nativebase.Header)`
  border-bottom-width: 0;
  background-color: ${colors.white};
  padding: 20px 20px 0px 20px;
`;

export const HeaderLeft = styled(Nativebase.Left)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderIcon = styled(Nativebase.Icon)`
  color: ${colors.black};
`;

export const HeaderButton = styled(Nativebase.Button)``;

export const Content = styled.ScrollView`
  padding: 0 0px 0 20px;
`;

export const PlatesContainer = styled.View`
  margin-top: 20px;
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
  font-weight: bold;
`;

export const ViewAllText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.grey};
`;

export const PlatesListContainer = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const PlateContainer = styled.View`
  margin-top: 15px;
  margin-right: 20px;
  width: 155px;
`;

export const PlateImage = styled.Image`
  width: 155px;
  height: 142px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const PlateRatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const PlateRating = styled(Nativebase.Icon)`
  color: ${props => (props.rated ? colors.yellow : colors.grey)};
  font-size: 20px;
  margin-right: 3px;
`;

export const PlateName = styled.Text`
  margin-top: 5px;
  font-size: 17px;
  font-weight: 600;
  color: ${colors.black};
`;

export const RestaurantName = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: ${colors.grey};
  font-weight: 400;
`;

export const RestaurantLocationContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
`;

export const RestaurantLocationIcon = styled(Nativebase.Icon)`
  color: ${colors.grey};
  font-size: 15px;
  margin-right: 5px;
`;

export const RestaurantDistance = styled.Text`
  font-size: 12px;
  color: ${colors.grey};
  font-weight: 400;
`;

export const SearchContainer = styled.View`
  width: 100%;
  padding-right: 20px;
  margin-top: 30px;
`;

export const Seacth = styled.View`
  width: 100%;
  height: 48px;
  background-color: ${colors.white};
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.15);
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
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px 0 10px;
`;

export const ShortcutItem = styled.TouchableOpacity`
  width: 70px;
  height: 25px;
  background-color: #f4f4f4;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShortcutText = styled.Text`
  font-size: 12px;
  color: ${colors.grey};
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
  font-weight: bold;
`;

export const PopularSubtitle = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey};
`;

export const PopularImageContainer = styled.View`
  width: 100%;
  padding-right: 20px;
`;

export const PopularImage = styled.Image`
  margin-top: 20px;
  width: 100%;
  height: 184px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const PopularItem = styled.View`
  width: 100% !important;
`;
