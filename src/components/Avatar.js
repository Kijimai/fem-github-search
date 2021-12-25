import React from "react"
import { mockData } from "../utils/data"

const Avatar = (props) => {
  const { avatar_url } = mockData
  // props mode takes either 'mobile' or 'tab-desk'
  return (
    <img
      className={`avatar ${props.mode}`}
      src={avatar_url}
      alt="user avatar"
    />
  )
}

export default Avatar
