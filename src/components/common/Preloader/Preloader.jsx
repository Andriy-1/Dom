import React from "react";
import preloader from '../../../Images/rocket-nobg.gif'
const Preloader = (props) => {
  return (
    <div >
      <img width="80" src={preloader} alt="Loading" />
    </div>
  );
};

export default Preloader;
