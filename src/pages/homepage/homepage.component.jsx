import React, { Component } from "react"
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

const initialValues = {
  personalPhoto: null,
  overlayImg: null,
  overlayValues: { scale: 1, overlayWidth: null },
  landmarks: null,
  loading: false
}

class HomePage extends Component {
  state = {
    ...initialValues
  }

  resetForNewPhoto = () => {
    this.setState({ ...initialValues })
  }

  setPersonalPhoto = async personalPhoto => {
    this.setState({ loading: true })
    await this.setState({
      personalPhoto
    })
    this.loadModels()
  }

  loadModels = async () => {
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

    this.setState({ landmarks: detection.landmarks, loading: false })
  }

  overlayItemClickHandler = id => {
    if (!this.state.landmarks) {
      return
    }

    const currentOvelayData = overlayData.filter(item => item.id === id)[0]

    const overlay = {
      cp_offsets: currentOvelayData.cp_offsets,
      width: currentOvelayData.width
    }
    const image = document.querySelector(".target-image")
    const { landmarks } = this.state
    const overlayValues = getOverlayValues(landmarks, image, overlay)

    this.setState({
      overlayValues,
      overlayImg: currentOvelayData.overlayFile
    })
  }

  render() {
    const { personalPhoto, overlayImg, overlayValues, loading } = this.state
    return (
      <MainContainer>
        <ImagesOuterContainer>
          <ImagesContainer>
            {personalPhoto ? (
              <PersonalPhoto
                personalPhoto={personalPhoto}
                resetForNewPhoto={this.resetForNewPhoto}
                loading={loading}
                className="target-image"
              />
            ) : (
              <UploadPersonalPhoto setPersonalPhoto={this.setPersonalPhoto} />
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
          loading={loading}
          overlayItems={shortenOverlayData(overlayData)}
          onOverlayItemClick={this.overlayItemClickHandler}
        />
      </MainContainer>
    )
  }
}

//<FacePoints facePoints={facePoints} overlayValues={overlayValues} />

export default HomePage
