import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">Ссылок пока нет...</p>
  }
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>№</Th>
          <Th>Оригинальная</Th>
          <Th>Сокращённая</Th>
          <Th>Количество кликов</Th>
          <Th>Открыть</Th>
        </Tr>
      </Thead>
      <Tbody>
        {links.map((link, index) => {
          return (
            <Tr key={link._id}>
              <Td>{index + 1}</Td>
              <Td>{link.from}</Td>
              <Td>{link.to}</Td>
              <Td>{link.clicks}</Td>
              <Td>
                <Link to={`/detail/${link._id}`}>Открыть</Link>
              </Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
