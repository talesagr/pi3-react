import React from "react";
import './styles.css';

const InnerTable = ({ data }) => {
  if (!data) {
    return null;
  }

  if (Array.isArray(data)) {
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
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="innerTable">
        <thead>
          <tr>
            {Object.keys(data).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(data).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InnerTable;
