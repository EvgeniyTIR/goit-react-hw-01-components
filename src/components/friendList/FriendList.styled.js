import styled from 'styled-components';

export const IsOnline = styled.span`
  display: inline-flex;

  width: 15px;
  height: 15px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.online};
`;

export const IsOffline = styled.span`
  display: inline-flex;
  width: 15px;
  height: 15px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.offline};
`;
