import React from 'react'
import styled from 'styled-components'

const PictureOfSelf = require('../../static/PictureOfSelf.png')

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 20px);
`

const ProfilePicture = styled.img`
  height: 90%;
  border-radius: 50%; 
`

const PictureCard = () => (
  <>
    <CardContent>
      <ProfilePicture src={PictureOfSelf} />
    </CardContent>
  </>
)

export default PictureCard
