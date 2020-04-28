import React from 'react'
import moment from 'moment'
import _ from 'lodash/fp'
import styled from 'styled-components'
import { Table, Column, AutoSizer } from 'react-virtualized'

import { GET_PERSONAL_REPOSITORIES } from '../../Queries'
import { useQuery } from '../../hooks'

import { variables } from '../../utils/variables'

import './tableStyles.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - ${variables.cardHeaderHeight});
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  font-size: ${variables.fontLarge};
  font-weight: bold;
  margin: 5px;
`

const TableContainer = styled.div`
  flex-grow: 1;
  margin: 10px 0 0 0;
`

const CardTitle = styled.span`
  text-decoration: underline;
`

const DescriptionCell = styled.div`
  font-size: ${variables.fontNormal};
`

interface IRepositoryRowFormatterProps {
  index: number
}

const RepositoriesCard = () => {
  const {
    data, loading, error, LoadingIcon,
  } = useQuery(
    GET_PERSONAL_REPOSITORIES,
  )

  if (loading) {
    // TODO: build Spinner
    return <LoadingIcon />
  }

  if (error) {
    throw Error('The Repository Card Failed')
  }

  const { nodes: repositories } = _.get(
    'user.repositories',
    data,
  )

  const repositoryRowFormatter = ({ index }: IRepositoryRowFormatterProps) => {
    const rowObject = repositories[index]
    const {
      url, name, createdAt, description,
    } = rowObject
    return {
      ...rowObject,
      description,
      name: <a href={url}>{name}</a>,
      createdAt: moment(createdAt).format(variables.createdDateFormat),
    }
  }

  return (
    // TODO make this resize responsively.
    <Container>
      <CardHeader>
        <CardTitle>
          My Github Repositories
        </CardTitle>
      </CardHeader>
      <TableContainer>
        <AutoSizer>
          {({ height, width }) => (
            <Table
              height={height}
              // TODO: increase prominence of the Header
              headerHeight={20}
              width={width}
              rowHeight={49}
              rowCount={repositories.length}
              // TODO: moment of time for the date.
              rowGetter={repositoryRowFormatter}
            >
              <Column
                dataKey="name"
                width={300}
                label="name"
                cellRenderer={({ cellData }) => cellData}
              />
              {width > 500 && (
              <Column
                dataKey="createdAt"
                width={300}
                label="Date Created"
                cellRenderer={({ cellData }) => cellData}
              />
              )}
              <Column
                dataKey="description"
                width={300}
                label="description"
                cellRenderer={({ cellData }) => <DescriptionCell>{cellData}</DescriptionCell>}
              />
            </Table>
          )}
        </AutoSizer>
      </TableContainer>
    </Container>
  )
}

export default RepositoriesCard
