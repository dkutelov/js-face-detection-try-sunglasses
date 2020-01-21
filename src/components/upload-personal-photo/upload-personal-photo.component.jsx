import React, { Fragment } from 'react';

import { ReactComponent as UploadIcon } from '../../assets/upload-icon.svg';
import {
  UploadIconContainer,
  UploadTitle,
  UploadSubTitle
} from './upload-presonal-photo.styles';
import PresetphotosList from '../presetphotos-list/presetphotos-list.component';

const UploadPersonalPhoto = ({ setPersonalPhoto, presetPhotos }) => {
  const uploadFile = e => {
    const file = e.target.files;

    // Upload image to cloudinary; not used in this code
    // faceapi detection errors with file fetched from cloudinary
    const data = new FormData();
    data.append('file', file[0]);
    data.append('upload_preset', 'sickfits');
    // fetch("https://api.cloudinary.com/v1_1/dariku/image/upload", {
    //   method: "POST",
    //   body: data
    // })

    setPersonalPhoto(URL.createObjectURL(file[0]));
  };

  const setDefaultFace = id => {
    const { presetImg } = presetPhotos.filter(item => item.id === id)[0];
    setPersonalPhoto(presetImg);
  };

  return (
    <Fragment>
      <UploadTitle>Upload photo of your face</UploadTitle>
      <UploadSubTitle>
        use an unobstucted <em>front</em> face photo.
      </UploadSubTitle>
      <label htmlFor='file'>
        <UploadIconContainer>
          <UploadIcon />
        </UploadIconContainer>
        <input
          type='file'
          id='file'
          name='file'
          placeholder='Upload an image'
          onChange={uploadFile}
          style={{ display: 'none' }}
        />
      </label>
      <UploadSubTitle>or fave fun with these faces</UploadSubTitle>
      <PresetphotosList
        presetPhotos={presetPhotos}
        setDefaultFace={setDefaultFace}
      />
    </Fragment>
  );
};

export default UploadPersonalPhoto;
