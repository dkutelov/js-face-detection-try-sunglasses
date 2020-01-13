import React from "react"
import PresetphotosItem from "../presetphotos-item/presetphotos-item.component"

import { PresetphotosContainer } from "./presetphotos-list.styles"

const PresetphotosList = ({ presetPhotos, setDefaultFace }) => {
  return (
    <div style={{ width: "100%", position: "relative", marginTop: "5px" }}>
      <PresetphotosContainer>
        {presetPhotos &&
          presetPhotos.map(({ id, presetImg }) => (
            <PresetphotosItem
              key={id}
              id={id}
              presetImg={presetImg}
              setDefaultFace={setDefaultFace}
            />
          ))}
      </PresetphotosContainer>
    </div>
  )
}

export default PresetphotosList
