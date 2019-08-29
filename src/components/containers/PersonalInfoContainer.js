import React from "react"
import styled from "styled-components"

import { theme } from "../utils/theme"

const PictureOfSelf = require("../../static/PictureOfSelf.png")

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TextDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  margin: 0 15px;
`

const ProfilePicture = styled.img`
  width: 50%;
  border-radius: 50%;
  border: 15px dashed ${theme.lightAlert};
  margin: 0 10px;
`

const PersonalInfoContainer = () => {
  return (
    <InfoContainer>
      <TextDescriptionContainer>
        <div>Phillip ED Maier</div>
        <div>Software Engineer</div>
        <div>Whats up</div>
      </TextDescriptionContainer>
      <ProfilePicture src={PictureOfSelf} />
    </InfoContainer>
  )
}

export default PersonalInfoContainer
