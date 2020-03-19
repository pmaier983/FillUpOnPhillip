import React from 'react'
import moment from 'moment'
import _ from 'lodash/fp'
import styled from 'styled-components'
import { Table, Column, AutoSizer } from 'react-virtualized'

import { GET_REPOSITORIES } from '../../Queries'
import { useQuery } from '../../hooks'

import './tableStyles.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: large;
  font-weight: bold;
  margin: 5px;
`

const TableContainer = styled.div`
  flex-grow: 1;
  margin: 10px 0 0 0;
`

interface IRepositoryRowFormatterProps {
  index: number
}

const RepositoriesCard = () => {
  const {
    data, loading, error, LoadingIcon, ErrorAlert,
  } = useQuery(
    GET_REPOSITORIES,
  )

  if (loading) {
    // TODO: build Spinner
    return <LoadingIcon />
  }

  if (error) {
    // TODO: build broken icon (mb build into)
    return <ErrorAlert />
  }

  const { totalCount, totalDiskUsage, nodes: repositories } = _.get(
    'user.repositories',
    data,
  )

  const repositoryRowFormatter = ({ index }: IRepositoryRowFormatterProps) => {
    const rowObject = repositories[index]
    const { url, name, createdAt } = rowObject
    return {
      ...rowObject,
      name: <a href={url}>{name}</a>,
      createdAt: moment(createdAt).format('MMMM Do YYYY'),
    }
  }

  return (
    // TODO make this resize respinsively.
    <Container>
      <CardHeader>
        <span>
          {`Total Count: 
          ${totalCount}`}
        </span>
        <span>
          {`Total Disk Usage: 
          ${totalDiskUsage}`}
        </span>
      </CardHeader>
      <TableContainer>
        <AutoSizer>
          {({ height, width }) => (
            <Table
              height={height}
              // TODO: increase prominense of the Header
              headerHeight={20}
              width={width}
              rowHeight={60}
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
              <Column
                dataKey="createdAt"
                width={300}
                label="Date Created"
                cellRenderer={({ cellData }) => cellData}
              />
              <Column
                dataKey="description"
                width={300}
                label="description"
                cellRenderer={({ cellData }) => cellData}
              />
            </Table>
          )}
        </AutoSizer>
      </TableContainer>
    </Container>
  )
}

export default RepositoriesCard
