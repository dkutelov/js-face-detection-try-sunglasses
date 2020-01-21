import React from "react"
import OverlayItem from "../overlay-item/overlay-item.component"

import {
  OverlaysWrapper,
  OverlaysContainer,
  LoadingSpinner,
  OverlayHeading
} from "./overlay-list.styles"
import Loading from "../utils/loading.component"

const OverlayList = ({ overlayItems, onOverlayItemClick, loading }) => {
  return (
    <OverlaysWrapper>
      <OverlayHeading>Select Sunglasses</OverlayHeading>
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
    </OverlaysWrapper>
  )
}

export default OverlayList
