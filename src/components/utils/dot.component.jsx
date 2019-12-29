import React from "react"
import styled from "styled-components"

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  color: red;
  background-color: red;
  position: absolute;
  top: ${props => `${props.x}px` || 0};
  left: ${props => `${props.y}px` || 0};
`

const DrawDot = ({ x, y }) => <Dot x={x} y={y} />

export default DrawDot
