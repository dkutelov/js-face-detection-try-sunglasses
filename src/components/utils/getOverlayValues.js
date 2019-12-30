export function getOverlayValues(landmarks, image, overlay) {
  const scale = image.width / image.naturalWidth

  // calculate width of the overlay
  const leftFacePoint = landmarks.positions[0]._x
  const rightFacePoint = landmarks.positions[16]._x
  const width = (rightFacePoint - leftFacePoint) * scale

  // calc center point coordinates
  const a_x = landmarks.positions[21]._x
  const b_x = landmarks.positions[22]._x
  const c_x = landmarks.positions[27]._x
  const a_y = landmarks.positions[21]._y
  const b_y = landmarks.positions[22]._y
  const c_y = landmarks.positions[27]._y
  const center_point_x = ((a_x + b_x + c_x) / 3) * scale
  const center_point_y = ((a_y + b_y + c_y) / 3) * scale

  // calculate overlay offsets
  //  overlay scale
  const overlayScale = width / overlay.width

  const leftOffset = center_point_x - overlay.cp_offsets.cp_x * overlayScale
  const topOffset = center_point_y - overlay.cp_offsets.cp_y * overlayScale

  const angle = 0

  return {
    width,
    angle,
    leftOffset,
    topOffset,
    scale
  }
}
