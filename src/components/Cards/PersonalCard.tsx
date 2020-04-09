import React from 'react'
import styled from 'styled-components'

import MaterialIcon from '../MaterialIcon'

import { useQuery } from '../../hooks'
import { MY_PROFILE } from '../../Queries'
import { theme, variables } from '../../utils/theme'

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  /* TODO: why is flex-grow: 1 not working here */
  height: calc(100% - ${variables.cardHeaderHeight});
`

const Portrait = styled.img`
  align-self: center;
  margin: 10px 0 5px 0;
  /* TODO: find a way to keep perfect ratio above minwidth/height*/
  width: 120px;
  height: 120px;
  border: 1px solid ${theme.lineEmphasized};
  border-radius: 5px;
`

const SeperatorLine = styled.div`
  width: 90%;
  margin: 5px;
  border-bottom: 1px solid ${theme.lineEmphasized};
`

// TODO: combined all these fields into a component
const Name = styled.strong`
  font-size: ${variables.fontLarge};
`

const Location = styled.span`
  font-size: ${variables.fontNormal};
`

const Bio = styled.div``

const Company = styled.div`
  font-size: ${variables.fontNormal};
`

const IsHireable = styled.div`
  display: flex;
  flex-direction: row;
`

const PersonalCard = () => {
  const {
    data, loading, error, LoadingIcon,
  } = useQuery(MY_PROFILE)

  if (loading) {
    return <LoadingIcon />
  }

  if (error) {
    throw Error('The Personal Card Failed')
  }

  const {
    user: {
      company, name, avatarUrl, bio, isHireable, location,
    },
  } = data

  return (
    <CardContent>
      <Portrait src={avatarUrl} alt="Profile" />
      <Name>{name}</Name>
      <Location>{location}</Location>
      <SeperatorLine />
      <Bio>{bio}</Bio>
      <SeperatorLine />
      <Company>{`Current Employer: ${company}`}</Company>
      <IsHireable>
        <span>Is Open to Opportunities:</span>
        <MaterialIcon name={isHireable ? 'check_box_outlined' : 'check_box_outline'} width="24px" overflow="hidden" />
      </IsHireable>
    </CardContent>
  )
}

export default PersonalCard
