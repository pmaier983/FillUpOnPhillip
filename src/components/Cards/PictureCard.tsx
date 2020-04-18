import React from 'react'
import styled from 'styled-components'

import { variables } from '../../utils/variables'

const PictureOfSelf = require('../../static/PictureOfSelf.png')

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - ${variables.cardHeaderHeight});
`

const ProfilePicture = styled.img`
  height: 90%;
  border-radius: 50%; 
`

const PictureCard = () => (
  <CardContent>
    <ProfilePicture src={PictureOfSelf} alt="Picture of Phillip Maier standing with a background of green hills" />
  </CardContent>
)

export default PictureCard
