import React, {Component} from 'react';

import {
  Container,
  Header,
  HeaderLeft,
  HeaderBody,
  HeaderRight,
  HeaderButton,
  HeaderIcon,
  Content,
  BottomContainer,
  TitleContainer,
  Title,
  Price,
  PlateRatingContainer,
  PlateRating,
  RatingCounter,
  ShortcutContainer,
  ShortcutItem,
  ShortcutText,
  InfoContainer,
  InfoItem,
  InfoIcon,
  InfoText,
  DescriptionContainer,
  DescriptionTitle,
  DescriptionContent,
} from './styles';

export default class Plate extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container
        source={require('~/static/images/plate1.jpg')}
        resizeMode="cover">
        <Header
          noShadow
          androidStatusBarColor="#2DBB54"
          iosBarStyle="light-content">
          <HeaderLeft>
            <HeaderButton
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
              onPress={() => navigate('Tabs')}
              transparent>
              <HeaderIcon name="arrow-back" />
            </HeaderButton>
          </HeaderLeft>
          <HeaderBody />
          <HeaderRight>
            <HeaderButton
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
              transparent>
              <HeaderIcon name="ios-heart-empty" />
            </HeaderButton>
          </HeaderRight>
        </Header>
        <Content>
          <ShortcutContainer>
            <ShortcutItem>
              <ShortcutText>Café</ShortcutText>
            </ShortcutItem>
            <ShortcutItem>
              <ShortcutText>Local</ShortcutText>
            </ShortcutItem>
            <ShortcutItem>
              <ShortcutText>1 Pessoa</ShortcutText>
            </ShortcutItem>
          </ShortcutContainer>
          <BottomContainer>
            <TitleContainer>
              <Title>Torradas com blueberry</Title>
              <Price>R$12,50</Price>
            </TitleContainer>
            <PlateRatingContainer>
              <PlateRating name="star" rated />
              <PlateRating name="star" rated />
              <PlateRating name="star" rated />
              <PlateRating name="star" rated />
              <PlateRating name="star" />
              <RatingCounter>258 avaliações</RatingCounter>
            </PlateRatingContainer>
            <InfoContainer>
              <InfoItem>
                <InfoIcon name="user" type="EvilIcons" />
                <InfoText>Serve 1 pessoa</InfoText>
              </InfoItem>
              <InfoItem>
                <InfoIcon name="location" type="EvilIcons" />
                <InfoText>
                  Av. João Pessoa, 312 - Pedregulho, Guaratinguetá - SP
                </InfoText>
              </InfoItem>
            </InfoContainer>
            <DescriptionContainer>
              <DescriptionTitle>Descrição</DescriptionTitle>
              <DescriptionContent>
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.
                Pellentesque gravida, elit a gravida maximus, risus tortor
                molestie urna, eget elementum est nisi in magna.
              </DescriptionContent>
            </DescriptionContainer>
          </BottomContainer>
        </Content>
      </Container>
    );
  }
}
