import React from "react"
import { OverlayImage } from "./overlay-image.styles"

const OverlayImageContainer = ({
  overlayImg,
  overlayValues: { width, leftOffset, topOffset }
}) => (
  <OverlayImage
    src={overlayImg}
    imageWidth={width}
    leftOffset={leftOffset}
    topOffset={topOffset}
    className="overlay-image"
  />
)

export default OverlayImageContainer
