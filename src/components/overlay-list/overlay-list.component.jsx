import React from "react"
import OverlayItem from "../overlay-item/overlay-item.component"

import { OverlaysContainer, LoadingSpinner } from "./overlay-list.styles"
import Loading from "../utils/loading.component"

const OverlayList = ({ overlayItems, onOverlayItemClick, loading }) => {
  return (
    <div style={{ width: "100%", position: "relative", marginTop: "50px" }}>
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
      {loading && (
        <LoadingSpinner>
          <Loading />
        </LoadingSpinner>
      )}
    </div>
  )
}

export default OverlayList
