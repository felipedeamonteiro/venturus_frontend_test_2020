/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { useTable, Column, useSortBy } from 'react-table';
import { Container } from './styles';

interface Example {
  col1: string;
  col2: string;
}

const Table: React.FC = () => {
  const columns: Column<Example>[] = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1' as keyof Example,
        sortType: 'basic',
      },
      {
        Header: 'Description',
        accessor: 'col2' as keyof Example,
        sortType: 'basic',
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        col1: 'Real Madrid',
        col2: 'Real Madrid Squad',
      },
      {
        col1: 'Milan',
        col2: 'Milan Squad',
      },
      {
        col1: 'Liverpool',
        col2: 'Liverpool Squad',
      },
      {
        col1: 'Bayern Munich',
        col2: 'Bayern Munich Squad',
      },
      {
        col1: 'Lazio',
        col2: 'Lazio Squad',
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
  } = useTable({ data, columns, manualSortBy: true } as any, useSortBy);

  return (
    <Container>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? 'cima'
                        : 'baixo'
                      : 'cima/baixo'}
                  </span>
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
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
