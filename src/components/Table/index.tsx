/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { FaSortUp, FaSortDown, FaSort, FaTrash } from 'react-icons/fa';
import { MdModeEdit, MdShare } from 'react-icons/md';
import { Container } from './styles';

interface ITable {
  columns: any[];
  data: any[];
}

const Table: React.FC<ITable> = ({ columns, data }: any) => {
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
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      )
                    ) : (
                      <FaSort />
                    )}
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
                {row.cells.map((cell, index) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                      {index === 1 ? (
                        <span>
                          <FaTrash title="Remove" />
                          <MdShare title="Share" />
                          <MdModeEdit title="Edit" />
                        </span>
                      ) : (
                        ''
                      )}
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
