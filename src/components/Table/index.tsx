/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { useTable, useSortBy } from 'react-table';
import { FaSortUp, FaSortDown, FaSort, FaTrash } from 'react-icons/fa';
import { MdModeEdit, MdShare } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

interface ITable {
  columns: any[];
  data: any[];
}

const Table: React.FC<ITable> = ({ columns, data }: any) => {
  const history = useHistory();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ data, columns, manualSortBy: true } as any, useSortBy);

  const handleGoToEditTeam = useCallback(() => {
    history.push('/edit_team');
  }, [history]);

  const handleDeleteTeam = useCallback(() => {
    console.log('Team removed.');
  }, []);

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
                  return index === 0 ? (
                    <td {...cell.getCellProps()}>
                      <p title={cell ? (cell.value as string) : ''}>
                        {cell.render('Cell')}
                      </p>
                    </td>
                  ) : (
                    <td {...cell.getCellProps()}>
                      <div>
                        <p title={cell ? (cell.value as string) : ''}>
                          {cell.render('Cell')}
                        </p>
                        <span>
                          <FaTrash title="Remove" onClick={handleDeleteTeam} />
                          <MdShare title="Share" />
                          <MdModeEdit
                            title="Edit"
                            onClick={handleGoToEditTeam}
                          />
                        </span>
                      </div>
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
