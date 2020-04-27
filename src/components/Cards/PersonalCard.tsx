import React from 'react'
import styled from 'styled-components'

import MaterialIcon from '../MaterialIcon'
import TooltipStatic, { TOOLTIP_POSITIONS_ENUM } from '../TooltipStatic'

import { useQuery } from '../../hooks'
import { MY_PROFILE } from '../../Queries'
import { variables } from '../../utils/variables'

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
  width: 40%;
  max-width: 200px;
  height: auto;
  border: 1px solid ${({ theme }) => theme.lineEmphasized};
  border-radius: 100%;
`

const SeperatorLine = styled.div`
  width: 90%;
  border-bottom: 1px solid ${({ theme }) => theme.lineEmphasized};
`

// TODO: combined all these fields into a component
const Name = styled.strong`
  font-size: ${variables.fontLarge};
`

const Location = styled.span`
  font-size: ${variables.fontNormal};
`

const IsHireable = styled.div`
  display: flex;
  flex-direction: row;
`

const HorizontalSpacing = styled.div`
  width: 10px;
`

const PersonalCard = () => {
  const {
    data, loading, error, LoadingIcon,
  } = useQuery(MY_PROFILE, {
    variables: {
      userName: 'pmaier983',
    },
  })

  if (loading) {
    return <LoadingIcon />
  }

  if (error) {
    throw Error('The Personal Card Failed')
  }

  const {
    user: {
      name, avatarUrl, bio, isHireable, location, email,
    },
  } = data

  return (
    <CardContent>
      <Portrait src={avatarUrl} alt="Profile" />
      <Name>{name}</Name>
      <Location>{location}</Location>
      <SeperatorLine />
      <span>{bio}</span>
      <SeperatorLine />
      <IsHireable>
        <span>{isHireable ? 'Is Open to new Opportunities!' : 'Is not currently Open to new Opportunities'}</span>
        <HorizontalSpacing />
        {isHireable
          ? (
            <TooltipStatic
              content={email}
              position={TOOLTIP_POSITIONS_ENUM.TOP_LEFT}
              options={{ opacity: 1, maxWidth: '200px' }}
            >
              <MaterialIcon name="chat" />
            </TooltipStatic>
          )
          : null}
      </IsHireable>
    </CardContent>
  )
}

export default PersonalCard
