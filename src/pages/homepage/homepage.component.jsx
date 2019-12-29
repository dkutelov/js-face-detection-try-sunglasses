import React, { useState, useEffect } from "react"
import * as faceapi from "face-api.js"

// import componenets
import PersonalPhoto from "../../components/personal-photo/personal-photo.component"
import OverlayImage from "../../components/overlay-image/overlay-image.component"
import Dot from "../../components/utils/dot.component"

// import styled components
import { ImagesOuterContainer, ImagesContainer } from "./homepage.styles"

// import images
import dk from "../../assets/dk.jpg"
import sunglasses from "../../assets/sunglasses-2.png"

import { getOverlayValues } from "../../components/utils/getOverlayValues"

const HomePage = () => {
  const [personalPhoto, setPersonalPhoto] = useState(dk)
  const [overlayImg, setOverlayImg] = useState(sunglasses)
  const [facePoints, setFacePoints] = useState([])
  const [overlayValues, setOverlayValues] = useState({ scale: 1, width: null })

  useEffect(() => {
    async function loadModels() {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68TinyNet.loadFromUri("/models")
      ]).catch(error => {
        console.error(error)
      })

      const image = document.querySelector(".target-image")

      const detection = await faceapi
        .detectSingleFace(image, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks(true)

      if (!detection) {
        return
      }

      const points = detection.landmarks.positions
      setFacePoints(points)

      const overlayValues = getOverlayValues(detection.landmarks, image)
      setOverlayValues(overlayValues)
    }

    loadModels()
  }, [])

  return (
    <ImagesOuterContainer>
      <ImagesContainer>
        <PersonalPhoto personalPhoto={personalPhoto} className="target-image" />
        {overlayValues.width && (
          <OverlayImage overlayImg={overlayImg} overlayValues={overlayValues} />
        )}
        {facePoints.map(({ _x, _y }, i) => (
          <Dot
            key={i}
            x={_y * overlayValues.scale}
            y={_x * overlayValues.scale}
          />
        ))}
      </ImagesContainer>
    </ImagesOuterContainer>
  )
}

export default HomePage
