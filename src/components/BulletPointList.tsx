import React from 'react'
import styled from 'styled-components'

import { variables } from '../utils/variables'

interface IBulletPointListOptions {
  fontSize: string,
}

interface IBulletPointListProps {
  list: string[],
  options?: IBulletPointListOptions
}

interface IListContainerProps {
  fontSize?: string,
}

const ListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`

const ListElement = styled.span<IListContainerProps>`
  font-size: ${({ fontSize }) => fontSize || variables.fontNormal};
`

const BulletPointList: React.FC<IBulletPointListProps> = ({ list, options }) => (
  <ListContainer>
    {list.map((el) => (
      <ListElement fontSize={options?.fontSize}><text>{` • ${el} `}</text></ListElement>
    ))}
  </ListContainer>
)

export default BulletPointList
