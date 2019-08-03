import React from "react";
import TableData from "./TableData";

const TableRow = ({ cellData, primaryNumbers }) => {
  // Change classnames to change styles based on selection
  let tableDatas = cellData.map((el, i) => {
    let classData = "not-selected";
    if (primaryNumbers.includes(el)) {
      classData = "selected";
    }
    return <TableData text={el} key={i} classes={classData} />;
  });

  return <tr>{tableDatas}</tr>;
};

export default TableRow;
