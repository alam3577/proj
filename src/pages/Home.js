import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InvestmentRow from "../components/InvestmentRow";
import PieChart from "../components/PieChart";
import { chartContent } from "../utils/common";

import { dataLoadingStarted } from "../store/actions/dataActions";

function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(dataLoadingStarted());
  }, []);

  const chartData = chartContent({ data });

  return (
    <>
      <div className="main__container">
        <div className="container">
          {data?.map((elem, i) => (
            <InvestmentRow key={elem.scrip} data={elem} />
          ))}
        </div>
        <div className="chart">
          <PieChart header="Portfolio" data={data} chartData={chartData} />
        </div>
      </div>
    </>
  );
}

export default Home;
