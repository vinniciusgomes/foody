import React, {Component} from 'react';
import {
  SearchContainer,
  Seacth,
  SearchInputContainer,
  FieldContainer,
  SearchIcon,
  Field,
  ShortcutContainer,
  ShortcutItem,
  ShortcutText,
  Container,
} from './styles';

export default class Search extends Component {
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}
