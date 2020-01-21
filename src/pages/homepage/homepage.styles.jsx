import styled from 'styled-components';

export const MainContainer = styled.main`
  margin: 0;
  padding: 0;
`;

export const ImagesOuterContainer = styled.section`
  width: 100%;
  margin: 1em auto;
  padding: 1em;
  @media only screen and (min-width: ${props => props.theme.mdBreakPoint}) {
    padding: 0;
    margin-top: 3em;
    text-align: center;
  }
`;

export const ImagesContainer = styled.div`
  position: relative;
  @media only screen and (min-width: ${props => props.theme.mdBreakPoint}) {
    display: inline-block;
  }
`;
