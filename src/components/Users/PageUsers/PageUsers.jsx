import React from "react";
import "./PageUsers.css";
const PageUsers = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
}) => {
  const pages = [];
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    if (i <= 5) {
      pages.push(i);
    }
    if (i > 150) {
      pages.push(i);
    }
	}
	
  return (
    <div className="listNumber">
      {pages.map((p) => {
        return (
          <span
            key={p}
            onClick={() => {
              onPageChanged(p);
            }}
            className={`${currentPage === p && "selectedPage"} selectedStyle `}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default React.memo(PageUsers);
