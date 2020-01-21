import styled from 'styled-components';

export const OverlaysWrapper = styled.section`
  position: relative;
  margin: 20px auto 0;
  text-align: center;
  max-width: 90%;
  @media only screen and (min-width: ${props => props.theme.mdBreakPoint}) {
    max-width: ${props => props.theme.mainWidth};
    margin-top: 50px;
  }
`;

export const OverlaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  margin: 50px auto;
  max-width: 90vw;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.mdBreakPoint}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1000;
`;

export const OverlayHeading = styled.h2`
  color: ${props => props.theme.primary};
  font-size: 1.3rem;
  font-weight: 400;
  position: relative;
  display: inline-block;

  @media only screen and (min-width: ${props => props.theme.mdBreakPoint}) {
    margin-top: 1em;
    font-size: 1.85rem;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 2px;
    background: ${props => props.theme.secondary};
  }
`;
