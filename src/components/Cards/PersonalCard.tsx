import React from 'react'
import styled from 'styled-components'

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
  height: calc(100% - 20px);
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

// TODO: standardize font size's (big v small)
// TODO: combined all these fields into a component
const Name = styled.strong`
  font-size: ${variables.largeFont};
`

const Location = styled.span`
  font-size: ${variables.normalFont};
`

const Bio = styled.div``

const Company = styled.div`
  font-size: ${variables.normalFont};
`

const IsHireable = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${variables.normalFont};
`

interface ICheckboxProps {
  isHireable: boolean
}

const Checkbox = styled.div<ICheckboxProps>`
  background-color: ${({ isHireable }) => (isHireable ? theme.lightApproval : theme.lightAlert)};
  border-radius: 3px;
  width: 15px;
  align-self: center;
  margin: 0 0 0 10px;
  height: 15px;
  border: 1px solid;
`

const PersonalCard = () => {
  const {
    data, loading, error, LoadingIcon, ErrorAlert,
  } = useQuery(MY_PROFILE)

  if (loading) {
    return <LoadingIcon />
  }

  if (error) {
    return <ErrorAlert />
  }

  const {
    user: {
      company, name, avatarUrl, bio, isHireable, location,
    },
  } = data

  return (
    <CardContent>
      {/* display loading during lag time between content load and Portrait load */}
      <Portrait src={avatarUrl} alt="Profile" />
      <Name>{name}</Name>
      <Location>{location}</Location>
      <SeperatorLine />
      <Bio>{bio}</Bio>
      <SeperatorLine />
      <Company>{`Current Employer: ${company}`}</Company>
      <IsHireable>
        Is Open to Opportunities:
        <Checkbox isHireable={isHireable} />
      </IsHireable>
    </CardContent>
  )
}

export default PersonalCard
