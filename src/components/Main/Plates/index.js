import React, {useEffect} from 'react';

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
  Button,
} from './styles';

export default function Plates(props) {
  return (
    <Container>
      <Button>
        <Image source={require('~/static/images/plate1.jpg')} />
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
      </Button>
    </Container>
  );
}
