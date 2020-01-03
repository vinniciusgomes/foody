import React, {Component} from 'react';

import {
  Container,
  Header,
  HeaderLeft,
  HeaderButton,
  HeaderIcon,
  Content,
  PlatesContainer,
  PlatesTitleContainer,
  PlatesTitle,
  ViewAllText,
  PlatesListContainer,
  PlateContainer,
  PlateImage,
  PlateRatingContainer,
  PlateRating,
  PlateName,
  RestaurantName,
  RestaurantLocationContainer,
  RestaurantLocationIcon,
  RestaurantDistance,
  SearchContainer,
  Seacth,
  SearchInputContainer,
  SearchIcon,
  Field,
  FieldContainer,
  ShortcutContainer,
  ShortcutItem,
  ShortcutText
} from './styles';

class Main extends Component {
  render() {
    return (
      <Container>
        <Header>
          <HeaderLeft>
            <HeaderButton transparent>
              <HeaderIcon name="menu" />
            </HeaderButton>
          </HeaderLeft>
        </Header>
        <Content>
          <PlatesContainer>
            <PlatesTitleContainer>
              <PlatesTitle>Café da manhã</PlatesTitle>
              <ViewAllText>Ver todos</ViewAllText>
            </PlatesTitleContainer>
            <PlatesListContainer
              horizontal
              showsHorizontalScrollIndicator={false}>
              <PlateContainer>
                <PlateImage source={require('~/static/images/plate1.jpg')} />
                <PlateRatingContainer>
                  <PlateRating name="star" rated />
                  <PlateRating name="star" rated />
                  <PlateRating name="star" rated />
                  <PlateRating name="star" />
                  <PlateRating name="star" />
                </PlateRatingContainer>
                <PlateName numberOfLines={1}>Torradas com blueberry</PlateName>
                <RestaurantName numberOfLines={1}>
                  Panificadora Keromais
                </RestaurantName>
                <RestaurantLocationContainer>
                  <RestaurantLocationIcon name="pin" />
                  <RestaurantDistance numberOfLines={1}>
                    3km de distância
                  </RestaurantDistance>
                </RestaurantLocationContainer>
              </PlateContainer>
              <PlateContainer>
                <PlateImage source={require('~/static/images/plate2.jpg')} />
                <PlateRatingContainer>
                  <PlateRating name="star" rated />
                  <PlateRating name="star" rated />
                  <PlateRating name="star" rated />
                  <PlateRating name="star" rated />
                  <PlateRating name="star" />
                </PlateRatingContainer>
                <PlateName numberOfLines={1}>Ovos benedict</PlateName>
                <RestaurantName numberOfLines={1}>
                  StarBucks Coffee
                </RestaurantName>
                <RestaurantLocationContainer>
                  <RestaurantLocationIcon name="pin" />
                  <RestaurantDistance numberOfLines={1}>
                    4.2km de distância
                  </RestaurantDistance>
                </RestaurantLocationContainer>
              </PlateContainer>
              <PlateContainer>
                <PlateImage source={require('~/static/images/plate3.jpg')} />
                <PlateRatingContainer>
                  <PlateRating name="star" rated />
                  <PlateRating name="star" rated />
                  <PlateRating name="star" />
                  <PlateRating name="star" />
                  <PlateRating name="star" />
                </PlateRatingContainer>
                <PlateName numberOfLines={1}>Café com croissant</PlateName>
                <RestaurantName numberOfLines={1}>
                  Panificadora Aeroclub
                </RestaurantName>
                <RestaurantLocationContainer>
                  <RestaurantLocationIcon name="pin" />
                  <RestaurantDistance numberOfLines={1}>
                    5.1km de distância
                  </RestaurantDistance>
                </RestaurantLocationContainer>
              </PlateContainer>
            </PlatesListContainer>
          </PlatesContainer>
          <SearchContainer>
            <Seacth>
              <SearchInputContainer>
                <FieldContainer>
                  <SearchIcon name="search" />
                  <Field placeholder="Pesquisar..." />
                </FieldContainer>
                <SearchIcon name="close" />
              </SearchInputContainer>
            </Seacth>
          </SearchContainer>
          <ShortcutContainer>
            <ShortcutItem>
              <ShortcutText>Café</ShortcutText>
            </ShortcutItem>
            <ShortcutItem>
              <ShortcutText>Almoço</ShortcutText>
            </ShortcutItem>
            <ShortcutItem>
              <ShortcutText>Doce</ShortcutText>
            </ShortcutItem>
            <ShortcutItem>
              <ShortcutText>Jantar</ShortcutText>
            </ShortcutItem>
          </ShortcutContainer>
        </Content>
      </Container>
    );
  }
}

export default Main;
