import React from "react"
import { OverlayImage } from "./overlay-image.styles"

const OverlayImageContainer = ({ overlayImg, overlayValues: { width } }) => (
  <OverlayImage src={overlayImg} imageWidth={width} />
)

export default OverlayImageContainer
