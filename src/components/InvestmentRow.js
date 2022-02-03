import React from "react";
import { IsProgress } from "../utils/common";
import Buttons from "./Button";
import Progress from "./Progress";

function InvestmentRow({ data }) {
  let IsTrue = IsProgress({ data });
  return (
    <div className="div__container">
      <div className="log">
        <i className="fa fa-bars"></i>
      </div>
      <div className="price__container">
        <p>{data.scrip}</p>
        <p className="price">${data.price}</p>
      </div>
      <div className="shares__container">
        <p>Image</p>
      </div>
      <div className="data">
        <div>
          <p>Qantity </p>
          <p className="pl">{data.qty}</p>
        </div>
        <div className="av_c">
          <p>Avg. Cost</p>
          <p className="pl"> {data.avgCost}</p>
        </div>
        <div className="av_c">
          <p>Invested Amount</p>
          <p className="pl"> {data.avgCost}</p>
        </div>
      </div>
      <div className="val__conatiner">
        <Progress
          name="Market Value"
          value="$9542"
          pName="% of portfolio Value"
          percentage={data?.percentage}
          returnPercentage={data?.returnPercentage}
        />
      </div>

      <div className="unrealized__pl__conatiner">
        <Progress
          name="Unrealized P/L"
          value={data?.unreleasedPL}
          pName="% Returns"
          percentage={data?.percentage}
          IsTrue={IsTrue}
          tur={true}
        />
      </div>

      <div className="buttons">
        <Buttons name="Buy" />
        <Buttons name="Sell" />
      </div>
    </div>
  );
}

export default InvestmentRow;
