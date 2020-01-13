import React from "react"

import { PresetphotoContainer } from "./presetphotos-item.styles"

const PresetphotosItem = ({ id, presetImg, setDefaultFace }) => {
  return (
    <PresetphotoContainer
      onClick={() => setDefaultFace(id)}
      presetImg={presetImg}></PresetphotoContainer>
  )
}

export default PresetphotosItem
