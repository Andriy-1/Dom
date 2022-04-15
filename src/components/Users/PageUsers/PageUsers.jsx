import React, { useState } from "react";
import "./PageUsers.css";
const PageUsers = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onPageChanged,
  portionSize = 20,
}) => {
  const pages = [];
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="listNumber">
      {portionNumber > 1 && (
        <span className="Page-leftBtn">
          <button className="btn-PageUser"
					  onClick={() => {
						  onPageChanged(1);
						  setPortionNumber(1);
            }}
          >
            First Page
          </button>
          <button className="btn-PageUser"
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            Prev
          </button>
        </span>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
			  return (
				 <div className="Page-Numbers" key={p}>
            <span
              
              onClick={() => {
                onPageChanged(p);
              }}
              className={`${
                currentPage === p && "selectedPage"
              } selectedStyle `}
            >
              {p}
            </span>		  
				 </div>
          );
        })}
      {portionCount > portionNumber && (
        <span className="Page-rightBtn">
          <button className="btn-PageUser"
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            Next
          </button>
          <button className="btn-PageUser"
            onClick={() => {
              setPortionNumber(portionCount);
               onPageChanged(pagesCount);
            }}
          >
            Last Page
          </button>
        </span>
      )}
    </div>
  );
};

export default React.memo(PageUsers);
