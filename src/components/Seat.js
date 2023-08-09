import React from "react";

const Seat = ({type, handleSelect}) => {
  return (
    <div onClick={handleSelect} className={`seat ${type}`}></div>
  );
}

export default Seat;
