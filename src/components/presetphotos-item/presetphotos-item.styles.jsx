import styled from "styled-components"

export const PresetphotoContainer = styled.div`
  background: center / cover url(${props => `${props.presetImg}`}) no-repeat;
  width: 100%;
  padding-top: 100%;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.03);
  }
`
