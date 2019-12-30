import React, { useState, useEffect } from "react"
import * as faceapi from "face-api.js"

// import componenets
import PersonalPhoto from "../../components/personal-photo/personal-photo.component"
import OverlayImage from "../../components/overlay-image/overlay-image.component"
import OverlayList from "../../components/overlay-list/overlay-list.component"
import UploadPersonalPhoto from "../../components/upload-personal-photo/upload-personal-photo.component"
//import FacePoints from "../../components/utils/face-points.component"

// import styled components
import {
  ImagesOuterContainer,
  ImagesContainer,
  MainContainer
} from "./homepage.styles"

// import data
import overlayData from "../../components/utils/overlaysData.js"

// functions import
import { getOverlayValues } from "../../components/utils/getOverlayValues"
import shortenOverlayData from "../../components/utils/shortentOverlayData.js"

const HomePage = () => {
  const [personalPhoto, setPersonalPhoto] = useState(null)

  const [overlayImg, setOverlayImg] = useState(null)
  //   const [facePoints, setFacePoints] = useState([])
  const [overlayValues, setOverlayValues] = useState({ scale: 1, width: null })
  const [landmarks, setLandmarks] = useState(null)
  //   const [overlayObj, setOverlayObj] = useState({})

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
    //   const points = detection.landmarks.positions
    //   setFacePoints(points)

    setLandmarks(detection.landmarks)
  }

  const overlayItemClickHandler = id => {
    const currentOvelayData = overlayData.filter(item => item.id === id)[0]
    console.log(currentOvelayData)

    const overlay = {
      cp_offsets: currentOvelayData.cp_offsets,
      width: currentOvelayData.width
    }
    const image = document.querySelector(".target-image")
    const overlayValues = getOverlayValues(landmarks, image, overlay)
    setOverlayValues(overlayValues)
    setOverlayImg(currentOvelayData.overlayFile)
  }

  return (
    <MainContainer>
      <ImagesOuterContainer>
        <ImagesContainer>
          {personalPhoto ? (
            <PersonalPhoto
              personalPhoto={personalPhoto}
              className="target-image"
            />
          ) : (
            <UploadPersonalPhoto setPersonalPhoto={setPersonalPhoto} />
          )}
          {personalPhoto && overlayImg && (
            <OverlayImage
              overlayImg={overlayImg}
              overlayValues={overlayValues}
            />
          )}
        </ImagesContainer>
      </ImagesOuterContainer>
      <OverlayList
        overlayItems={shortenOverlayData(overlayData)}
        onOverlayItemClick={overlayItemClickHandler}
      />
    </MainContainer>
  )
}

//<FacePoints facePoints={facePoints} overlayValues={overlayValues} />

export default HomePage
