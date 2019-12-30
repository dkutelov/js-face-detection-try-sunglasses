import React from "react"
import OverlayItem from "../overlay-item/overlay-item.component"

import { OverlaysContainer } from "./overlay-list.styles"

const OverlayList = ({ overlayItems, onOverlayItemClick }) => {
  return (
    <div style={{ width: "100%" }}>
      <h1>Select Sunglasses</h1>
      <OverlaysContainer>
        {overlayItems.map(({ id, overlayFile }) => (
          <OverlayItem
            key={id}
            id={id}
            overlayFile={overlayFile}
            onOverlayItemClick={onOverlayItemClick}
          />
        ))}
      </OverlaysContainer>
    </div>
  )
}

export default OverlayList
