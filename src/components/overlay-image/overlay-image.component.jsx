import React from 'react';
import { OverlayImage } from './overlay-image.styles';

const OverlayImageContainer = ({ overlayImg, overlayValues }) => (
  <OverlayImage {...overlayValues} src={overlayImg} className='overlay-image' />
);

export default OverlayImageContainer;
