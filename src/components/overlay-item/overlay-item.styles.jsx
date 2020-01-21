import styled from "styled-components"

export const OverlayItemContainer = styled.div`
  max-width: 90%;
  position: relative;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: ${props => props.theme.mdBreakPoint}) {
    max-width: 100%;
  }
  img {
    width: 100%;
  }
`
