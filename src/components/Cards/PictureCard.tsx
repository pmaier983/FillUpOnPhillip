import React from 'react'
import styled from 'styled-components'

import CardHandle from './CardHandle'

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
    <CardHandle height="20px" />
    <CardContent>
      <ProfilePicture src={PictureOfSelf} />
    </CardContent>
  </>
)

export default PictureCard
