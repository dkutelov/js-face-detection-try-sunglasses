export function getOverlayValues(landmarks, image) {
  const scale = image.width / image.naturalWidth

  // calculate width of the overlay
  const leftFacePoint = landmarks.positions[0]._x
  const rightFacePoint = landmarks.positions[16]._x
  const width = (rightFacePoint - leftFacePoint) * scale

  const angle = 0
  const leftOffset = 1
  const topOffset = 1

  return {
    width,
    angle,
    leftOffset,
    topOffset,
    scale
  }
}
