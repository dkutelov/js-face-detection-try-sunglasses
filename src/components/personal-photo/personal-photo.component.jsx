import React from "react"
import {
  PersonalPhotoImage,
  PersonalPhotoImageContainer
} from "./personal-photo.styles"

import { Button } from "../utils/button.styles"

const PersonalPhoto = ({ personalPhoto, resetForNewPhoto, loading }) => (
  <PersonalPhotoImageContainer>
    <PersonalPhotoImage src={personalPhoto} className="target-image" />
    <Button block onClick={resetForNewPhoto} disabled={loading}>
      Try Another Photo
    </Button>
  </PersonalPhotoImageContainer>
)

export default PersonalPhoto
