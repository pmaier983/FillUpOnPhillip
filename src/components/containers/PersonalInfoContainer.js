import React from "react"
import styled from "styled-components"

import { theme } from "../utils/theme"

const PictureOfSelf = require("../../static/PictureOfSelf.png")
const Resume = require("../../static/PhillipMaierResume.docx")

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 10px 0 15px;
`

const TextDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`

const ProfilePicture = styled.img`
  width: 50%;
  border-radius: 50%;
  border: 15px dashed ${theme.lightAlert};
`

const Links = styled.a`
  color: ${theme.lightAlert};
`

const PersonalInfoContainer = () => {
  return (
    <InfoContainer>
      <TextDescriptionContainer>
        <div>Phillip ED Maier</div>
        <div>Software Engineer</div>
        <Links href="pmaier983@gmail.com">pmaier983@gmail.com</Links>
        <Links href={Resume}>Resume</Links>
      </TextDescriptionContainer>
      <ProfilePicture src={PictureOfSelf} />
    </InfoContainer>
  )
}

export default PersonalInfoContainer
