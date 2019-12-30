import React, { Fragment } from "react"
import Dot from "./dot.component"

const FacePoints = ({ facePoints, overlayValues }) => {
  return (
    <Fragment>
      {facePoints.map(({ _x, _y }, i) => (
        <Dot
          key={i}
          index={i}
          x={_x * overlayValues.scale}
          y={_y * overlayValues.scale}
        />
      ))}
    </Fragment>
  )
}

export default FacePoints
