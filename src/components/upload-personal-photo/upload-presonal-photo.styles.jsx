import styled from 'styled-components';

export const UploadIconContainer = styled.div`
  cursor: pointer;
  margin: 3em auto;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
    height: 50px;
  }

  @media (min-width: ${props => props.theme.mdBreakPoint}) {
    margin: 5em auto;
    width: 200px;
    height: 200px;
    svg {
      width: 100px;
      height: 100px;
    }
  }
`;

export const UploadTitle = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-top: 2em;
  color: purple;
  font-weight: 600;
  @media (min-width: ${props => props.theme.mdBreakPoint}) {
    font-size: 3rem;
    margin-top: 2.5em;
  }
`;

export const UploadSubTitle = styled.h2`
  text-align: center;
  font-size: 1em;
  font-weight: 400;
  margin-top: 0.25em;
  margin-bottom: 1em;
`;
