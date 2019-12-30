import React from "react"
import styled from "styled-components"

const Dot = styled.div`
  font-size: 0.5em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.y}px` || 0};
  left: ${props => `${props.x}px` || 0};
`

const DrawDot = ({ x, y, index }) => (
  <Dot x={x} y={y}>
    {index}
  </Dot>
)

export default DrawDot
