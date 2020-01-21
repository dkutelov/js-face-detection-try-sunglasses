import React, { Component } from 'react';
import * as faceapi from 'face-api.js';

// import componenets
import PersonalPhoto from '../../components/personal-photo/personal-photo.component';
import OverlayImage from '../../components/overlay-image/overlay-image.component';
import OverlayList from '../../components/overlay-list/overlay-list.component';
import UploadPersonalPhoto from '../../components/upload-personal-photo/upload-personal-photo.component';
//import FacePoints from "../../components/utils/face-points.component"

// import styled components
import {
  ImagesOuterContainer,
  ImagesContainer,
  MainContainer
} from './homepage.styles';

// import data
import overlayData from '../../data/overlaysData';
import presetPhotos from '../../data/presetphotosData';
// functions import
import { getOverlayValues } from '../../components/utils/getOverlayValues';
import shortenOverlayData from '../../components/utils/shortentOverlayData.js';

const initialValues = {
  personalPhoto: null,
  overlayImg: null,
  overlayValues: { scale: 1, overlayWidth: null },
  landmarks: null,
  loading: false,
  facePoints: []
};

class HomePage extends Component {
  state = {
    ...initialValues
  };

  resetForNewPhoto = () => {
    this.setState({ ...initialValues });
  };

  setPersonalPhoto = personalPhoto => {
    this.setState({
      loading: true,
      personalPhoto
    });
  };

  initiateFaceAnalysis = () => {
    setTimeout(() => {
      console.log('recognise face ...');
      this.loadModels();
    }, 5000);
  };

  loadModels = async () => {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models')
    ]).catch(error => {
      console.error(error);
    });

    const image = document.querySelector('.target-image');

    const detection = await faceapi
      .detectSingleFace(image, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks(true);

    if (!detection) {
      return;
    }

    this.setState({
      landmarks: detection.landmarks,
      loading: false,
      facePoints: detection.landmarks.positions
    });
  };

  overlayItemClickHandler = id => {
    if (!this.state.landmarks) {
      return;
    }

    const currentOvelayData = overlayData.filter(item => item.id === id)[0];

    const overlay = {
      ...currentOvelayData
    };
    const image = document.querySelector('.target-image');
    const { landmarks } = this.state;
    const overlayValues = getOverlayValues(landmarks, image, overlay);

    this.setState({
      overlayValues,
      overlayImg: currentOvelayData.overlayFile
    });
  };

  render() {
    const { personalPhoto, overlayImg, overlayValues, loading } = this.state;
    return (
      <MainContainer>
        <ImagesOuterContainer>
          <ImagesContainer>
            {personalPhoto ? (
              <PersonalPhoto
                personalPhoto={personalPhoto}
                resetForNewPhoto={this.resetForNewPhoto}
                className='target-image'
                initiateFaceAnalysis={this.initiateFaceAnalysis}
                loading={loading}
              />
            ) : (
              <UploadPersonalPhoto
                setPersonalPhoto={this.setPersonalPhoto}
                presetPhotos={presetPhotos}
              />
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
    );
  }
}

//<FacePoints facePoints={facePoints} overlayValues={overlayValues} />

export default HomePage;
