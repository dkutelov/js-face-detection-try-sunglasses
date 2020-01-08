export function getOverlayValues(landmarks, image, overlay) {
  const scale = image.width / image.naturalWidth

  // calculate width of the overlay
  const jawline = landmarks.getJawOutline()
  const jawLeft = jawline[0]
  const jawRight = jawline.splice(-1)[0]
  const adjacent = jawRight.x - jawLeft.x
  const opposite = jawRight.y - jawLeft.y
  const faceWidth = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2))

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
  const overlayScale = (faceWidth * scale) / overlay.width

  const leftOffset = center_point_x - overlay.cp_offsets.cp_x * overlayScale
  const topOffset = center_point_y - overlay.cp_offsets.cp_y * overlayScale

  const angle = 0

  return {
    overlayWidth: faceWidth * scale,
    angle,
    leftOffset,
    topOffset,
    scale
  }
}
