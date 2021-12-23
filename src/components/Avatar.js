import React from "react"

const Avatar = (props) => {
  // props mode takes either 'mobile' or 'tab-desk'
  return (
    <img
      className={`avatar ${props.mode}`}
      src="https://randomuser.me/api/portraits/men/10.jpg"
      alt="user avatar"
    />
  )
}

export default Avatar
