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
  PopularContainer,
  PopularTitleContainer,
  PopularTitle,
  PopularSubtitle,
  HeaderBody,
  PopularPlatesContainer,
} from './styles';
import Plate from '~/components/Main/Plates';
import Search from '~/components/Main/Search';
import Popular from '~/components/Main/Popular';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header
          noShadow
          androidStatusBarColor="#2DBB54"
          barStyle="dark-content">
          <HeaderLeft>
            <HeaderButton transparent>
              <HeaderIcon name="menu" />
            </HeaderButton>
          </HeaderLeft>
          <HeaderBody />
        </Header>
        <Content showsVerticalScrollIndicator={false}>
          <PlatesContainer>
            <PlatesTitleContainer>
              <PlatesTitle>Café da manhã</PlatesTitle>
              <ViewAllText>Ver todos</ViewAllText>
            </PlatesTitleContainer>
            <PlatesListContainer
              horizontal
              showsHorizontalScrollIndicator={false}>
              <Plate
                image="~/assets/static/plate1.jpg"
                restaurantColor="#2D8FBB"
                restaurantName="Two Little Red Hens"
                plateName="Toast with blueberry"
                rating="4,98"
                price={25}
              />
              <Plate
                image="~/assets/static/plate1.jpg"
                restaurantColor="#8FBB2D"
                restaurantName="StarBucks"
                plateName="Eggs benedict"
                rating="4,98"
                price={18}
              />
              <Plate
                image="~/assets/static/plate1.jpg"
                restaurantColor="#006C70"
                restaurantName="Two Little Red Hens"
                plateName="Eggs benedict"
                rating="4,98"
                price={12}
              />
            </PlatesListContainer>
          </PlatesContainer>
          <Search />
          <PopularContainer>
            <PopularTitleContainer>
              <PopularTitle>Popular</PopularTitle>
              <ViewAllText>Ver todos</ViewAllText>
            </PopularTitleContainer>
            <PopularSubtitle>Os pratos mais visitados do dia:</PopularSubtitle>
            <PopularPlatesContainer>
              <Popular
                image="~/assets/static/plate1.jpg"
                restaurantColor="#2D8FBB"
                restaurantName="Two Little Red Hens"
                plateName="Toast with blueberry"
                rating="4,98"
                price={25}
              />
              <Popular
                image="~/assets/static/plate1.jpg"
                restaurantColor="#2D8FBB"
                restaurantName="Two Little Red Hens"
                plateName="Toast with blueberry"
                rating="4,98"
                price={25}
              />
              <Popular
                image="~/assets/static/plate1.jpg"
                restaurantColor="#2D8FBB"
                restaurantName="Two Little Red Hens"
                plateName="Toast with blueberry"
                rating="4,98"
                price={25}
              />
              <Popular
                image="~/assets/static/plate1.jpg"
                restaurantColor="#2D8FBB"
                restaurantName="Two Little Red Hens"
                plateName="Toast with blueberry"
                rating="4,98"
                price={25}
              />
            </PopularPlatesContainer>
          </PopularContainer>
        </Content>
      </Container>
    );
  }
}

export default Main;
