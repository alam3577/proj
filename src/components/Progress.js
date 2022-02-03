import React from "react";

function Progress({
  name,
  value,
  pName,
  percentage,
  returnPercentage,
  IsTrue,
  width = 15,
  tur,
}) {
  return (
    <>
      <div>
        <p className="pl_pr">{name}</p>
        <p className="pl_pr">{value}</p>
      </div>
      <div>
        <p>{pName}</p>
        <p className="pl_pr">{percentage}</p>
      </div>
      <div className="progress mb-1">
        <div
          className={`progress-bar w-30 ${IsTrue && "bg-success"} ${
            (!IsTrue && tur && "bg-danger") || "bg-success"
          }`}
          style={
            (tur && {
              width: `${tur && width}%`,
            }) ||
            (!tur && {
              width: `${returnPercentage}%`,
            })
          }
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="30"
        ></div>
      </div>
    </>
  );
}

export default Progress;
