import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const Numbers = ({ text }) => {
  return (
    <Fragment>
      <Button
        className="ml-2"
        id="lottoball"
        style={{
          border: "1px solid grey",
          borderRadius: "35px",
          display: "inline",
          width: "50px",
          height: "50px",
          background: "white",
          color: "black"
        }}
      >
        {text}
      </Button>
    </Fragment>
  );
};

export default Numbers;
