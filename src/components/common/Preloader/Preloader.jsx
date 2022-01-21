import React from "react";
import preloader from '../../../Images/loading.gif'
const Preloader = (props) => {
  return (
    <div >
      <img width="100" src={preloader} alt="Loading" />
    </div>
  );
};

export default Preloader;
