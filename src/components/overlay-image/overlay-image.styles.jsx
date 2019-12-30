import styled from "styled-components"

export const OverlayImage = styled.img`
  position: absolute;
  opacity: 0.9;
  top: ${props => `${props.topOffset}px`};
  left: ${props => `${props.leftOffset}px`};
  width: ${props => `${props.imageWidth}px`};
`
