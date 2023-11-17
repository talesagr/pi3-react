import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import InnerTable from "./InnerTable";
import './styles.css';

const Pessoa = ({ resultText }) => {
  const data = useMemo(() => {
    try {
      return resultText ? JSON.parse(resultText) : [];
    } catch (error) {
      console.error('Erro ao fazer parse dos dados JSON:', error);
      return [];
    }
  }, [resultText]);

  const columns = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }

    const keys = Object.keys(data[0]);
    const limitedKeys = keys.slice(0, 5);
    return limitedKeys.map(key => ({ Header: key, accessor: key }));
  }, [data]);

  const renderCellValue = (cell) => {
    if (!cell || !cell.value) {
      return null; 
    }

    if (typeof cell.value === "object") {
      return <InnerTable data={cell.value} />;
    }

    return cell.render("Cell");
  };

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
    <div className="textAreaPessoa">
      <table className="resultTable" {...getTableProps()}>
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
                    {renderCellValue(cell)}
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
};

export default Pessoa;