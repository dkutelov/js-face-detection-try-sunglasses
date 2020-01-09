import React from "react"
import { OverlayImage } from "./overlay-image.styles"

const OverlayImageContainer = ({
  overlayImg,
  overlayValues: { overlayWidth, leftOffset, topOffset, angle }
}) => (
  <OverlayImage
    src={overlayImg}
    imageWidth={overlayWidth}
    leftOffset={leftOffset}
    topOffset={topOffset}
    angle={angle}
    className="overlay-image"
  />
)

export default OverlayImageContainer
