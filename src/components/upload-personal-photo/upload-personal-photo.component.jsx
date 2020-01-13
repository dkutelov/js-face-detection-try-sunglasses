import React from "react"

import { ReactComponent as UploadIcon } from "../../assets/upload-icon.svg"
import { UploadIconContainer } from "./upload-presonal-photo.styles"
import { Button } from "../utils/button.styles"

import womenFace from "../../assets/preset-faces/scarlett-left.jpg"

const UploadPersonalPhoto = ({ setPersonalPhoto }) => {
  const uploadFile = e => {
    const file = e.target.files

    // Upload image to cloudinary; not used in this code
    // faceapi detection errors with file fetched from cloudinary
    const data = new FormData()
    data.append("file", file[0])
    data.append("upload_preset", "sickfits")
    // fetch("https://api.cloudinary.com/v1_1/dariku/image/upload", {
    //   method: "POST",
    //   body: data
    // })

    setPersonalPhoto(URL.createObjectURL(file[0]))
  }

  const setDefaultFace = () => {
    setPersonalPhoto(womenFace)
  }

  return (
    <div>
      <h1>Upload you face photo</h1>
      <p>
        Should be unobstucted <em>front</em> face photo.
      </p>
      <label htmlFor="file">
        <UploadIconContainer>
          <UploadIcon />
        </UploadIconContainer>
        <input
          type="file"
          id="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadFile}
          style={{ display: "none" }}
        />
      </label>
      <h2>Or check out how they look on a nice lady's face</h2>
      <Button block onClick={setDefaultFace}>
        Nice lady's face
      </Button>
    </div>
  )
}

export default UploadPersonalPhoto
