import React, {Component} from 'react';

import {
  Container,
  Header,
  HeaderLeft,
  HeaderButton,
  HeaderIcon,
  Content,
  PlatesContainer,
  SectionTitleContainer,
  SectionTitle,
  ViewAllText,
  PlatesListContainer,
  SectionSubtitle,
  HeaderBody,
  ViewAllButton,
  PlateContainer,
  PlateImage,
  PlateLocationContainer,
  PlateLocationIcon,
  PlateRestaurantName,
  PlateLocationContent,
  PlateRatingContainer,
  PlateRatingIcon,
  PlateRatingText,
  PlateName,
  PlatePriceContainer,
  PlatePrice,
  PlateButton,
  RestaurantSectionContainer,
  RestaurantListContainer,
  RestaurantItem,
  RestaurantImage,
  RestaurantLocationContainer,
  RestaurantLocationIcon,
  RestaurantRestaurantName,
  RestaurantLocationContent,
  RestaurantRatingContainer,
  RestaurantRatingIcon,
  RestaurantRatingText,
  RestaurantName,
  RestaurantPriceContainer,
  RestaurantPrice,
} from './styles';
import Search from '~/components/Main/Search';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header
          noShadow
          androidStatusBarColor="#ffffff"
          iosBarStyle="dark-content">
          <HeaderLeft>
            <HeaderButton transparent>
              <HeaderIcon name="menu" />
            </HeaderButton>
          </HeaderLeft>
          <HeaderBody />
        </Header>
        <Content showsVerticalScrollIndicator={false}>
          <PlatesContainer>
            <SectionTitleContainer>
              <SectionTitle>Café da manhã</SectionTitle>
              <ViewAllButton onPress={() => navigate('ListPlates')}>
                <ViewAllText>Ver todos</ViewAllText>
              </ViewAllButton>
            </SectionTitleContainer>
            <PlatesListContainer
              horizontal
              showsHorizontalScrollIndicator={false}>
              <PlateContainer>
                <PlateButton>
                  <PlateImage source={require('~/static/images/plate1.jpg')} />
                  <PlateLocationContainer>
                    <PlateLocationContent>
                      <PlateLocationIcon color="#2D8FBB" name="pin" />
                      <PlateRestaurantName numberOfLines={1} color="#2D8FBB">
                        Two Little Red Hensdadsadsa
                      </PlateRestaurantName>
                    </PlateLocationContent>
                    <PlateRatingContainer>
                      <PlateRatingIcon name="star" />
                      <PlateRatingText>4,98</PlateRatingText>
                    </PlateRatingContainer>
                  </PlateLocationContainer>
                  <PlateName numberOfLines={1}>Toast with blueberry</PlateName>
                  <PlatePriceContainer>
                    <PlatePrice>R$25 por pessoa</PlatePrice>
                  </PlatePriceContainer>
                </PlateButton>
              </PlateContainer>
              <PlateContainer>
                <PlateButton>
                  <PlateImage source={require('~/static/images/plate2.jpg')} />
                  <PlateLocationContainer>
                    <PlateLocationContent>
                      <PlateLocationIcon color="#8FBB2D" name="pin" />
                      <PlateRestaurantName numberOfLines={1} color="#8FBB2D">
                        StarBucks Coffee
                      </PlateRestaurantName>
                    </PlateLocationContent>
                    <PlateRatingContainer>
                      <PlateRatingIcon name="star" />
                      <PlateRatingText>4,18</PlateRatingText>
                    </PlateRatingContainer>
                  </PlateLocationContainer>
                  <PlateName numberOfLines={1}>Eggs benedict</PlateName>
                  <PlatePriceContainer>
                    <PlatePrice>R$18 por pessoa</PlatePrice>
                  </PlatePriceContainer>
                </PlateButton>
              </PlateContainer>
              <PlateContainer>
                <PlateButton>
                  <PlateImage source={require('~/static/images/plate3.jpg')} />
                  <PlateLocationContainer>
                    <PlateLocationContent>
                      <PlateLocationIcon color="#92174D" name="pin" />
                      <PlateRestaurantName numberOfLines={1} color="#92174D">
                        Mancy's Bakery
                      </PlateRestaurantName>
                    </PlateLocationContent>
                    <PlateRatingContainer>
                      <PlateRatingIcon name="star" />
                      <PlateRatingText>4,12</PlateRatingText>
                    </PlateRatingContainer>
                  </PlateLocationContainer>
                  <PlateName numberOfLines={1}>Coffe with Croissant</PlateName>
                  <PlatePriceContainer>
                    <PlatePrice>R$15 por pessoa</PlatePrice>
                  </PlatePriceContainer>
                </PlateButton>
              </PlateContainer>
            </PlatesListContainer>
          </PlatesContainer>
          <Search />

          <RestaurantSectionContainer>
            <SectionTitleContainer>
              <SectionTitle>Restaurantes</SectionTitle>
              <ViewAllButton onPress={() => navigate('Restaurants')}>
                <ViewAllText>Ver todos</ViewAllText>
              </ViewAllButton>
            </SectionTitleContainer>
            <SectionSubtitle>
              Os restaurantes mais visitados perto de você:
            </SectionSubtitle>
            <RestaurantListContainer>
              <RestaurantItem>
                <RestaurantImage
                  source={require('~/static/images/restaurant1.jpg')}
                />
                <RestaurantLocationContainer>
                  <RestaurantLocationContent>
                    <RestaurantLocationIcon name="pin" color="#92174D" />
                    <RestaurantRestaurantName color="#92174D">
                      Nova York
                    </RestaurantRestaurantName>
                  </RestaurantLocationContent>
                  <RestaurantRatingContainer>
                    <RestaurantRatingIcon name="star" />
                    <RestaurantRatingText>5,0</RestaurantRatingText>
                  </RestaurantRatingContainer>
                </RestaurantLocationContainer>
                <RestaurantName numberOfLines={1}>Jean-Georges</RestaurantName>
                <RestaurantPriceContainer>
                  <RestaurantPrice>R$120 - R$1.321</RestaurantPrice>
                </RestaurantPriceContainer>
              </RestaurantItem>
              <RestaurantItem>
                <RestaurantImage
                  source={require('~/static/images/restaurant2.jpg')}
                />
                <RestaurantLocationContainer>
                  <RestaurantLocationContent>
                    <RestaurantLocationIcon name="pin" color="#006C70" />
                    <RestaurantRestaurantName color="#006C70">
                      Nova York
                    </RestaurantRestaurantName>
                  </RestaurantLocationContent>
                  <RestaurantRatingContainer>
                    <RestaurantRatingIcon name="star" />
                    <RestaurantRatingText>4,52</RestaurantRatingText>
                  </RestaurantRatingContainer>
                </RestaurantLocationContainer>
                <RestaurantName numberOfLines={1}>Hanoi House</RestaurantName>
                <RestaurantPriceContainer>
                  <RestaurantPrice>R$190 - R$1.409</RestaurantPrice>
                </RestaurantPriceContainer>
              </RestaurantItem>
              <RestaurantItem>
                <RestaurantImage
                  source={require('~/static/images/restaurant3.jpg')}
                />
                <RestaurantLocationContainer>
                  <RestaurantLocationContent>
                    <RestaurantLocationIcon name="pin" color="#2D8FBB" />
                    <RestaurantRestaurantName color="#2D8FBB">
                      Nova York
                    </RestaurantRestaurantName>
                  </RestaurantLocationContent>
                  <RestaurantRatingContainer>
                    <RestaurantRatingIcon name="star" />
                    <RestaurantRatingText>4,88</RestaurantRatingText>
                  </RestaurantRatingContainer>
                </RestaurantLocationContainer>
                <RestaurantName numberOfLines={1}>Nerai</RestaurantName>
                <RestaurantPriceContainer>
                  <RestaurantPrice>R$80 - R$741</RestaurantPrice>
                </RestaurantPriceContainer>
              </RestaurantItem>
              <RestaurantItem>
                <RestaurantImage
                  source={require('~/static/images/restaurant4.jpg')}
                />
                <RestaurantLocationContainer>
                  <RestaurantLocationContent>
                    <RestaurantLocationIcon name="pin" color="#8FBB2D" />
                    <RestaurantRestaurantName color="#8FBB2D">
                      Nova York
                    </RestaurantRestaurantName>
                  </RestaurantLocationContent>
                  <RestaurantRatingContainer>
                    <RestaurantRatingIcon name="star" />
                    <RestaurantRatingText>4,66</RestaurantRatingText>
                  </RestaurantRatingContainer>
                </RestaurantLocationContainer>
                <RestaurantName numberOfLines={1}>Charlie Bird</RestaurantName>
                <RestaurantPriceContainer>
                  <RestaurantPrice>R$22 - R$59</RestaurantPrice>
                </RestaurantPriceContainer>
              </RestaurantItem>
            </RestaurantListContainer>
          </RestaurantSectionContainer>
        </Content>
      </Container>
    );
  }
}

export default Main;
