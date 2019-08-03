import React, { Component } from "react";
import axios from "axios";
import Tables from "../Table/Tables";
import Numbers from "../Numbers/Numbers";
import PBText from "../Text/PBText";
import { Button } from "react-bootstrap";
import numbersData from "../../constants/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Buttons extends Component {
  state = {
    primaryNumbers: ["", "", "", "", "", "", ""],
    secondaryNumber: "PB"
  };

  // Get latest Lotto results from the public API
  // and set the state accordingly
  clickHandler = async () => {
    try {
      const response = await axios.post(
        "https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults",
        {
          CompanyId: "GoldenCasket",
          MaxDrawCountPerProduct: 1,
          OptionalProductFilter: ["Powerball"]
        }
      );

      this.setState({
        primaryNumbers: response.data.DrawResults[0].PrimaryNumbers,
        secondaryNumber: response.data.DrawResults[0].SecondaryNumbers
      });
    } catch (error) {
      console.error(error);
    }
  };

  clearHandler = () => {
    this.setState({
      primaryNumbers: ["", "", "", "", "", "", ""],
      secondaryNumber: "PB"
    });
  };

  render() {
    const { mainNumbers, powerBall } = numbersData;
    const { primaryNumbers, secondaryNumber } = this.state;
    const lotteryBalls = primaryNumbers.map((el, i) => (
      <Numbers text={el} key={i} />
    ));

    return (
      <div style={{ marginTop: "40px" }}>
        {lotteryBalls}
        <Numbers text={secondaryNumber} />
        <Button
          className="ml-5"
          style={{
            margin: "10px",
            border: "2px solid #521987",
            borderRadius: "35px",
            display: "inline",
            width: "50px",
            height: "50px",
            background: "#521987"
          }}
          onClick={() => this.clickHandler()}
        >
          <FontAwesomeIcon icon={faBolt} size="lg" />
        </Button>
        <Button
          style={{
            margin: "10px",
            border: "2px solid #6c757d",
            borderRadius: "35px",
            display: "inline",
            width: "50px",
            height: "50px"
          }}
          className="bg-secondary ml-1"
          onClick={() => this.clearHandler()}
        >
          <FontAwesomeIcon icon={faTrashAlt} size="lg" />
        </Button>
        <Tables numbers={mainNumbers} results={primaryNumbers} />
        <PBText />
        <Tables numbers={powerBall} results={secondaryNumber} />
      </div>
    );
  }
}

export default Buttons;
