import React from "react"
import { PersonalPhotoImage } from "./personal-photo.styles"

const PersonalPhoto = ({ personalPhoto }) => (
  <PersonalPhotoImage src={personalPhoto} className="target-image" />
)

export default PersonalPhoto
