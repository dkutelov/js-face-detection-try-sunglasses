import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.primary};
  min-height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: ${props => props.theme.mdBreakPoint}) {
    min-height: 90px;
  }

  h1 {
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 0;
    @media only screen and (min-width: ${props => props.theme.mdBreakPoint}) {
      font-weight: 300;
      font-size: 2rem;
      text-transform: uppercase;
    }
  }
`;
