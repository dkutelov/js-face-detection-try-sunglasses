import React from "react"

import { OverlayItemContainer } from "./overlay-item.styles"

const OverlayItem = ({ id, overlayFile, onOverlayItemClick }) => {
  return (
    <OverlayItemContainer>
      <img
        onClick={() => onOverlayItemClick(id)}
        src={overlayFile}
        alt={`sunglasses no ${id}`}
      />
    </OverlayItemContainer>
  )
}

export default OverlayItem
