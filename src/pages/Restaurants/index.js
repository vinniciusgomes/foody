import React, {Component} from 'react';
import LottieView from 'lottie-react-native';

import {
  Container,
  Header,
  HeaderLeft,
  HeaderButton,
  HeaderIcon,
  Content,
  TitleContainer,
  Title,
  MoreOptions,
  RestaurantsContainer,
  RestaurantItem,
  RestaurantImage,
  RestaurantInfo,
  RestaurantTitleContainer,
  RestaurantTitle,
  RestaurantVerificationIcon,
  RestaurantImageContainer,
  RestaurantRatingContainer,
  RestaurantRating,
  RestaurantInfoItem,
  RestaurantInfoIcon,
  RestaurantInfoText,
} from './styles';

export default class BasicExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 4000);
  }

  render() {
    const {loading} = this.state;
    return (
      <Container>
        <Header noShadow>
          <HeaderLeft>
            <HeaderButton transparent>
              <HeaderIcon name="menu" />
            </HeaderButton>
          </HeaderLeft>
        </Header>
        {loading ? (
          <LottieView
            autoPlay
            loop
            source={require('~/animations/location.json')}
          />
        ) : (
          <Content>
            <TitleContainer>
              <Title>Restaurantes</Title>
              <MoreOptions name="more-vertical" type="Feather" />
            </TitleContainer>
            <RestaurantsContainer showsVerticalScrollIndicator={false}>
              <RestaurantItem>
                <RestaurantImageContainer>
                  <RestaurantImage
                    source={require('~/static/images/restaurant1.jpg')}
                  />
                </RestaurantImageContainer>
                <RestaurantInfo>
                  <RestaurantTitleContainer>
                    <RestaurantTitle>Jean-Georges</RestaurantTitle>
                    <RestaurantVerificationIcon
                      name="verified"
                      type="Octicons"
                    />
                  </RestaurantTitleContainer>
                  <RestaurantRatingContainer>
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                  </RestaurantRatingContainer>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="location" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      1 Central Park West, New York
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="credit-card" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      R$120,00 - R$1.321,20
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="clock" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      15 min
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                </RestaurantInfo>
              </RestaurantItem>
              <RestaurantItem>
                <RestaurantImageContainer>
                  <RestaurantImage
                    source={require('~/static/images/restaurant2.jpg')}
                  />
                </RestaurantImageContainer>
                <RestaurantInfo>
                  <RestaurantTitleContainer>
                    <RestaurantTitle>Hanoi House</RestaurantTitle>
                  </RestaurantTitleContainer>
                  <RestaurantRatingContainer>
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" />
                  </RestaurantRatingContainer>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="location" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      119 St Marks Pl, New York
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="credit-card" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      R$190,00 - R$921,00
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="clock" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      25 min
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                </RestaurantInfo>
              </RestaurantItem>
              <RestaurantItem>
                <RestaurantImageContainer>
                  <RestaurantImage
                    source={require('~/static/images/restaurant3.jpg')}
                  />
                </RestaurantImageContainer>
                <RestaurantInfo>
                  <RestaurantTitleContainer>
                    <RestaurantTitle>Nerai</RestaurantTitle>
                  </RestaurantTitleContainer>
                  <RestaurantRatingContainer>
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" />
                    <RestaurantRating name="star" />
                  </RestaurantRatingContainer>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="location" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      55 E 54th St, New York
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="credit-card" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      R$ 121,00 - R$ 202,00
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="clock" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      35 min
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                </RestaurantInfo>
              </RestaurantItem>
              <RestaurantItem>
                <RestaurantImageContainer>
                  <RestaurantImage
                    source={require('~/static/images/restaurant5.jpg')}
                  />
                </RestaurantImageContainer>
                <RestaurantInfo>
                  <RestaurantTitleContainer>
                    <RestaurantTitle>Masa</RestaurantTitle>
                    <RestaurantVerificationIcon
                      name="verified"
                      type="Octicons"
                    />
                  </RestaurantTitleContainer>
                  <RestaurantRatingContainer>
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                  </RestaurantRatingContainer>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="location" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      10 Columbus Cir, New York
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="credit-card" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      R$360,00 - R$1.240,12
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="clock" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      35 min
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                </RestaurantInfo>
              </RestaurantItem>
              <RestaurantItem>
                <RestaurantImageContainer>
                  <RestaurantImage
                    source={require('~/static/images/restaurant4.jpg')}
                  />
                </RestaurantImageContainer>
                <RestaurantInfo>
                  <RestaurantTitleContainer>
                    <RestaurantTitle>Charlie Bird</RestaurantTitle>
                  </RestaurantTitleContainer>
                  <RestaurantRatingContainer>
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" rated />
                    <RestaurantRating name="star" />
                    <RestaurantRating name="star" />
                    <RestaurantRating name="star" />
                  </RestaurantRatingContainer>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="location" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      5 King St, New York
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="credit-card" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      R$22,00 - R$59,00
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                  <RestaurantInfoItem>
                    <RestaurantInfoIcon name="clock" type="EvilIcons" />
                    <RestaurantInfoText numberOfLines={1}>
                      10 min
                    </RestaurantInfoText>
                  </RestaurantInfoItem>
                </RestaurantInfo>
              </RestaurantItem>
            </RestaurantsContainer>
          </Content>
        )}
      </Container>
    );
  }
}
