import React from 'react';
import {
  PersonalPhotoImage,
  PersonalPhotoImageContainer
} from './personal-photo.styles';

import { Button } from '../utils/button.styles';

const PersonalPhoto = ({
  personalPhoto,
  initiateFaceAnalysis,
  resetForNewPhoto,
  loading
}) => (
  <PersonalPhotoImageContainer>
    <PersonalPhotoImage
      src={personalPhoto}
      className='target-image'
      onLoad={initiateFaceAnalysis}
      crossOrigin='anonymous'
    />
    <Button
      block
      style={{ maxWidth: '50%', margin: '1em auto 0' }}
      onClick={resetForNewPhoto}
      disabled={loading}
    >
      Try Another Photo
    </Button>
  </PersonalPhotoImageContainer>
);

export default PersonalPhoto;
