import styled from "styled-components"

export const OverlayImage = styled.img`
  position: absolute;
  opacity: 0.9;
  top: 167px;
  left: 80px;
  width: ${props => `${props.imageWidth}px`};
`
