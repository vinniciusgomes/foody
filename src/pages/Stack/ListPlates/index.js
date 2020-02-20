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
  TitleContainer,
  Title,
  PlatesContainer,
  PlateItem,
  PlateImage,
  PlateInfo,
  PlateTitleContainer,
  PlateTitle,
  PlateVerificationIcon,
  PlateImageContainer,
  PlateRatingContainer,
  PlateRating,
  PlateInfoItem,
  PlateInfoIcon,
  PlateInfoText,
  Subtitle,
  PlatePriceContainer,
  PlatePrice,
} from './styles';

export default class BasicExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <Container>
        <Header
          noShadow
          androidStatusBarColor="#ffffff"
          iosBarStyle="dark-content">
          <HeaderLeft>
            <HeaderButton
              onPress={() => this.props.navigation.navigate('Main')}
              transparent>
              <HeaderIcon name="arrow-back" />
            </HeaderButton>
          </HeaderLeft>
          <HeaderBody />
          <HeaderRight />
        </Header>
        <Content showsVerticalScrollIndicator={false}>
          <TitleContainer>
            <Title>Café da manhã</Title>
            <Subtitle>Encontramos os seguintes pratos para você:</Subtitle>
          </TitleContainer>
          <PlatesContainer>
            <PlateItem>
              <PlateImageContainer>
                <PlateImage source={require('~/static/images/plate13.jpg')} />
              </PlateImageContainer>
              <PlateInfo>
                <PlateTitleContainer>
                  <PlateTitle numberOfLines={1}>
                    Eggs baked in potatos
                  </PlateTitle>
                </PlateTitleContainer>
                <PlateRatingContainer>
                  <PlateRating name="star" rated />
                  <PlateInfoText numberOfLines={1}>4,84 (252)</PlateInfoText>
                </PlateRatingContainer>
                <PlateInfoItem>
                  <PlateInfoIcon name="location" type="EvilIcons" />
                  <PlateInfoText numberOfLines={1}>
                    1 Central Park West, New York
                  </PlateInfoText>
                </PlateInfoItem>
                <PlateInfoItem>
                  <PlateInfoIcon name="clock" type="EvilIcons" />
                  <PlateInfoText numberOfLines={1}>15 min</PlateInfoText>
                </PlateInfoItem>
                <PlateInfoItem>
                  <PlatePriceContainer>
                    <PlatePrice>R$7,99</PlatePrice>
                  </PlatePriceContainer>
                </PlateInfoItem>
              </PlateInfo>
            </PlateItem>
            <PlateItem>
              <PlateImageContainer>
                <PlateImage source={require('~/static/images/plate16.png')} />
              </PlateImageContainer>
              <PlateInfo>
                <PlateTitleContainer>
                  <PlateTitle numberOfLines={1}>American pancake</PlateTitle>
                </PlateTitleContainer>
                <PlateRatingContainer>
                  <PlateRating name="star" rated />
                  <PlateInfoText numberOfLines={1}>4,84 (252)</PlateInfoText>
                </PlateRatingContainer>
                <PlateInfoItem>
                  <PlateInfoIcon name="location" type="EvilIcons" />
                  <PlateInfoText numberOfLines={1}>
                    1 Central Park West, New York
                  </PlateInfoText>
                </PlateInfoItem>
                <PlateInfoItem>
                  <PlateInfoIcon name="clock" type="EvilIcons" />
                  <PlateInfoText numberOfLines={1}>15 min</PlateInfoText>
                </PlateInfoItem>
                <PlateInfoItem>
                  <PlatePriceContainer>
                    <PlatePrice>R$12,00</PlatePrice>
                  </PlatePriceContainer>
                </PlateInfoItem>
              </PlateInfo>
            </PlateItem>
            <PlateItem>
              <PlateImageContainer>
                <PlateImage source={require('~/static/images/plate15.png')} />
              </PlateImageContainer>
              <PlateInfo>
                <PlateTitleContainer>
                  <PlateTitle numberOfLines={1}>
                    Belgian waffles with blueberrys
                  </PlateTitle>
                </PlateTitleContainer>
                <PlateRatingContainer>
                  <PlateRating name="star" rated />
                  <PlateInfoText numberOfLines={1}>4,84 (252)</PlateInfoText>
                </PlateRatingContainer>
                <PlateInfoItem>
                  <PlateInfoIcon name="location" type="EvilIcons" />
                  <PlateInfoText numberOfLines={1}>
                    1 Central Park West, New York
                  </PlateInfoText>
                </PlateInfoItem>
                <PlateInfoItem>
                  <PlateInfoIcon name="clock" type="EvilIcons" />
                  <PlateInfoText numberOfLines={1}>15 min</PlateInfoText>
                </PlateInfoItem>
                <PlateInfoItem>
                  <PlatePriceContainer>
                    <PlatePrice>R$15,50</PlatePrice>
                  </PlatePriceContainer>
                </PlateInfoItem>
              </PlateInfo>
            </PlateItem>
            <PlateItem>
              <PlateImageContainer>
                <PlateImage source={require('~/static/images/plate14.png')} />
              </PlateImageContainer>
              <PlateInfo>
                <PlateTitleContainer>
                  <PlateTitle numberOfLines={1}>
                    Salad Napois with tomatos
                  </PlateTitle>
                </PlateTitleContainer>
                <PlateRatingContainer>
                  <PlateRating name="star" rated />
                  <PlateInfoText numberOfLines={1}>4,84 (252)</PlateInfoText>
                </PlateRatingContainer>
                <PlateInfoItem>
                  <PlateInfoIcon name="location" type="EvilIcons" />
                  <PlateInfoText numberOfLines={1}>
                    1 Central Park West, New York
                  </PlateInfoText>
                </PlateInfoItem>
                <PlateInfoItem>
                  <PlateInfoIcon name="clock" type="EvilIcons" />
                  <PlateInfoText numberOfLines={1}>15 min</PlateInfoText>
                </PlateInfoItem>
                <PlateInfoItem>
                  <PlatePriceContainer>
                    <PlatePrice>R$19,90</PlatePrice>
                  </PlatePriceContainer>
                </PlateInfoItem>
              </PlateInfo>
            </PlateItem>
          </PlatesContainer>
        </Content>
      </Container>
    );
  }
}
