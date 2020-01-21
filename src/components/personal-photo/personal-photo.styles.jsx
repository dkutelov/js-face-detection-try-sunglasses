import styled from 'styled-components';

export const PersonalPhotoImageContainer = styled.div`
  @media (min-width: ${props => props.theme.mdBreakPoint}) {
    display: inline-block;
    margin: 0 auto;
  }
`;

export const PersonalPhotoImage = styled.img`
  max-width: 100%;
  @media (min-width: ${props => props.theme.mdBreakPoint}) {
    height: 60vh;
  }
`;
