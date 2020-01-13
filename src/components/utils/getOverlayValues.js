export function getOverlayValues(landmarks, image, overlay) {
  const verticalAdjustement = 0.95
  const scale = image.width / image.naturalWidth

  // calculate scaled width of the overlay
  const jawline = landmarks.getJawOutline()
  const jawLeft = jawline[0]
  const jawRight = jawline.splice(-1)[0]
  const adjacent = jawRight.x - jawLeft.x
  const opposite = jawRight.y - jawLeft.y
  const faceWidth = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2))

  // calculate rotation angle
  const angle = Math.atan2(opposite, adjacent)
  const angle_degrees = angle * (180 / Math.PI)

  // calc center face point point coordinates /two eyes and top nose/
  const a_x = landmarks.positions[39]._x
  const b_x = landmarks.positions[42]._x
  const c_x = landmarks.positions[27]._x
  const a_y = landmarks.positions[39]._y
  const b_y = landmarks.positions[42]._y
  const c_y = landmarks.positions[27]._y

  const center_point_x = ((a_x + b_x + c_x) / 3) * scale
  const center_point_y = ((a_y + b_y + c_y) / 3) * verticalAdjustement * scale

  //  overlay scale
  const overlayScale = (faceWidth * scale) / overlay.width

  // calculate left offset
  const overlay_x_offset = overlay.cp_offsets.cp_x * overlayScale
  const leftOffset = center_point_x - overlay_x_offset

  // calculate top offsett
  const overlay_y_offset = overlay.cp_offsets.cp_y * overlayScale
  const topOffset = center_point_y - overlay_y_offset

  console.log(overlay)

  return {
    overlayWidth: faceWidth * scale,
    angle: angle_degrees,
    leftOffset,
    topOffset,
    verticalRotationPoint: overlay.verticalRotationPoint,
    scale
  }
}
