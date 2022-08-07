import styled from 'styled-components';

export const Tr = styled.tr`
  &:nth-child(2n) {
    background: ${p => p.theme.colors.secondary};
  }
`;
