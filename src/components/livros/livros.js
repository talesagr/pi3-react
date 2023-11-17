import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import './livros.css'

const Livros = ({ resultData }) => {
  const data = useMemo(() => {
    return resultData || [];
  }, [resultData]);

  const columns = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }

    const keys = Object.keys(data[0]);
    const limitedKeys = keys.slice(0, 7); 
    return limitedKeys.map(key => ({ Header: key, accessor: key }));
  }, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  return (
    <div className="board">
      <table className="textarea" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>
                    {cell.column.id === "disponivel" ? (
                      <span>{cell.value ? "T" : "F"}</span>
                    ) : (
                      <span>{cell.render("Cell")}</span>
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Página Anterior
        </button>
      </div>
      <div>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Próxima Página
        </button>
      </div>
    </div>
  );
}

export default Livros;
