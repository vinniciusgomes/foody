import styled from 'styled-components';

import colors from '~/static/colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const LoadingContainer = styled.View`
  width: 60%;
  height: 60%;
`;
