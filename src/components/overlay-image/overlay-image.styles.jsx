import styled from "styled-components"

export const OverlayImage = styled.img`
  position: absolute;
  opacity: 0.9;
  top: ${props => `${props.topOffset}px`};
  left: ${props => `${props.leftOffset}px`};
  width: ${props => `${props.overlayWidth}px`};
  transform: rotate(${props => `${props.angle}deg`});
  transform-origin: 50%
    ${props =>
      `${props.verticalRotationPoint ? props.verticalRotationPoint : 50}`}%;
`
