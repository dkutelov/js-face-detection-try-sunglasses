import React from "react"
import {
  PersonalPhotoImage,
  PersonalPhotoImageContainer
} from "./personal-photo.styles"

import { Button } from "../utils/button.styles"

const PersonalPhoto = ({ personalPhoto }) => (
  <PersonalPhotoImageContainer>
    <PersonalPhotoImage src={personalPhoto} className="target-image" />
    <Button block>Try Another Photo</Button>
  </PersonalPhotoImageContainer>
)

export default PersonalPhoto
