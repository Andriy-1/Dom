import React from "react";
import preloaderSmall from '../../../Images/small.gif'
const PreloaderSmall = (props) => {
  return (
    <div >
      <img width='100' src={preloaderSmall} alt="Loading" />
    </div>
  );
};

export default PreloaderSmall;
