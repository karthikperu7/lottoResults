import React from "react";
import TableRow from "./TableRow";

const Tables = ({ numbers, results }) => {
  let numberOfRows, numberOfLastRowElements;
  if (numbers.length % 10 === 0) {
    numberOfRows = numbers.length / 10;
  } else {
    numberOfRows = numbers.length / 10 + 1;
    numberOfLastRowElements = numbers.length % 10;
  }

  let newRows = [];
  for (let i = 0; i < numberOfRows; i++) {
    let start = i * 10;
    let end = start + 10;
    if (numberOfLastRowElements && i === numberOfRows - 1) {
      end = start + numberOfLastRowElements;
    }
    newRows.push(
      <TableRow
        primaryNumbers={results}
        cellData={numbers.slice(start, end)}
        key={i}
      />
    );
  }

  return (
    <table className="table table-bordered container ">
      <tbody>{newRows}</tbody>
    </table>
  );
};

export default Tables;
