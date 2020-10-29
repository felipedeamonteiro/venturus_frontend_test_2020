/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { useTable, Column, useSortBy } from 'react-table';
import { Container } from './styles';

interface ITable {
  columns: Array<Column>;
  data: Array<any>;
}

interface Example {
  col1: string;
  col2: string;
}

const Table: React.FC = () => {
  const columns: Column<Example>[] = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1' as keyof Example,
      },
      {
        Header: 'Column 2',
        accessor: 'col2' as keyof Example,
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ data, columns } as any, useSortBy);

  return (
    <Container>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
