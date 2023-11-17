import React from "react";
import './styles.css';

const InnerTable = ({ data }) => {
  if (!data || data.length === 0 || !data[0]) {
    return null;
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="innerTable">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InnerTable;
