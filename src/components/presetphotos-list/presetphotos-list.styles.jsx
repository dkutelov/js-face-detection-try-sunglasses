import styled from 'styled-components';

export const PresetphotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 0 auto;
  max-width: 90vw;

  @media (min-width: ${props => props.theme.mdBreakPoint}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
