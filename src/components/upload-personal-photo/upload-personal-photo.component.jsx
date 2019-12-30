import React from "react"

const UploadPersonalPhoto = ({ setPersonalPhoto }) => {
  const uploadFile = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "sickfits")
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dariku/image/upload",
      {
        method: "POST",
        body: data
      }
    )
    const file = await res.json()
    setPersonalPhoto(file.secure_url)
  }

  return (
    <div>
      <label htmlFor="file">
        Upload your photo
        <input
          type="file"
          id="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadFile}
        />
      </label>
    </div>
  )
}

export default UploadPersonalPhoto
