// import React from "react";
// import "./userStatus.css";
// const UserStatus = (props) => {
// 	return (
	  
//     <div className="blockUser">
//       <div className="blockUser__box-img">
//         <img className="blockUser__img" src={props.photoUrl} alt="avatar" />
//       </div>
//       <div className="blockUser__content content">
//         <div className="content__column">
//           <div>
//             <h4 className="content__fullName">{props.fullName}</h4>
//             <p className="content__status">{props.status}</p>
//           </div>
//           <div>
//             <h5 className="content__country">{"props.locationCountry"}</h5>
//             <h5 className="content__city">{"props.locationCity"}</h5>
//           </div>
//         </div>
//       </div>
//       <div className="blockUser__box-btn">
//        {props.btn}
//       </div>
//     </div>
//   );
// };

// export default UserStatus;

// const userStatus = () => {
//   this.props.users.map((u) => {
//     <UserStatus
//       key={u.id}
//       photoUrl={
//         u.photos.small != null
//           ? u.photos.large
//           : "https://www.drhair.in/wp-content/uploads/2016/09/user-icon-6.png"
//       }
//       followed={u.followed}
//       fullName={u.name}
//       status={u.status}
//       btn={
//         u.followed ? (
//           <button
//             className="btn blockUser__btn"
//             onClick={() => {
//               this.props.unfollow(u.id);
//             }}
//           >
//             Unfollow
//           </button>
//         ) : (
//           <button
//             className="btn blockUser__btn"
//             onClick={() => {
//               this.props.follow(u.id);
//             }}
//           >
//             Follow
//           </button>
//         )
//       }
//     />;
//   });
// };