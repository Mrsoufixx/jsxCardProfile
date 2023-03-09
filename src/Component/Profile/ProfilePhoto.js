import React from 'react'
import image from "../../Assets/Image1.jpg"

function ProfilePhoto() {
  return (
     <img src={image} alt="image1" style={{width: "10rem"}} className="image"/>
  )
}

export default ProfilePhoto