import React from "react";
import UserStatus from "./UserStatus/UserStatus";

const Users = (props) => {
  const usersData = props.users.map((u) => (
    <UserStatus
      key={u.id}
      photoUrl={u.photoUrl}
      followed={u.followed}
      fullName={u.fullName}
      status={u.status}
      locationCity={u.location.city}
      locationCountry={u.location.country}
    />
  ));
	return <div>
		<h3 className="find-user">Users</h3>
		<div>
		{usersData}
		</div>	
	</div>;
};

export default Users;
