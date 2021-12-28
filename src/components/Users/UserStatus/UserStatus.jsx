import React from "react";
import "./userStatus.css";
const UserStatus = (props) => {
	let followind;

    if (props.followed === true) {
      followind = "Follow";
    } else {
      followind = "Unfollow";
    }

  return (
    <div className="blockUser">
      <div className="blockUser__box-img">
        <img className="blockUser__img"
          src={props.photoUrl}
          alt="avatar"
        />
      </div>
      <div className="blockUser__content content">
			  <div className="content__column">
				  <div>
          <h4 className="content__fullName">{props.fullName}</h4>
          <p className="content__status">{props.status}</p>   
				  </div>
				  <div>
          <h5 className="content__country">{props.locationCountry}</h5>
          <h5 className="content__city">{props.locationCity}</h5>
				  </div>
        </div>
      </div>
      <div className="blockUser__box-btn">
        <button type="submit" class="blockUser__btn btn">
          {followind}
        </button>
      </div>
    </div>
  );
};

export default UserStatus;
