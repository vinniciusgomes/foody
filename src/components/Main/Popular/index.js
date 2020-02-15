import React from 'react';
import {
  Container,
  Image,
  LocationContainer,
  LocationIcon,
  RestaurantName,
  LocationContent,
  RatingContainer,
  RatingIcon,
  RatingText,
  PlateName,
  PriceContainer,
  Price,
  Person,
} from './styles';

const Popular = (props) => (
  <Container>
    <Image source={require('~/static/images/plate4.jpg')} />
    <LocationContainer>
      <LocationContent>
        <LocationIcon name="pin" color={props.restaurantColor} />
        <RestaurantName color={props.restaurantColor}>
          {props.restaurantName}
        </RestaurantName>
      </LocationContent>
      <RatingContainer>
        <RatingIcon name="star" />
        <RatingText>{props.rating}</RatingText>
      </RatingContainer>
    </LocationContainer>
    <PlateName numberOfLines={1}>{props.plateName}</PlateName>
    <PriceContainer>
      <Price>R${props.price}</Price>
    </PriceContainer>
  </Container>
);

export default Popular;
