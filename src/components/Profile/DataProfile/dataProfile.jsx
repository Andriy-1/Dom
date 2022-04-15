import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { CreateField, Input } from "../../common/FormControls/FormControls";
import Preloader from "../../common/Preloader/Preloader";
import { required } from "../../common/ValidatorsForm/validators";
import StyleContentUser from "./dataProfile.module.css";
import StatusProfile from "./statusProfileHooks";
import avatar from "../../../Images/avatar.png";
//  CreateField(
// 	Field,
// 	null,
// 	"add file",
// 	"PhotoFile",
// 	[required],
// 	Input,
// 	 {
// 		 type: "file",
// 		 onChange: mainPhotoSelected
// 	 }
//  )
const DataProfile = ({
  match,
  getStatus,
  profile,
  status,
  updateStatus,
  autorizedUserId,
  savePhoto,
}) => {
  let userId = match.params.userId || autorizedUserId;
  if (!profile) {
    return <Preloader />;
  }
  const socialLink = (contacts, nameContact) => {
    return (
      <div>
        {nameContact}
        {!contacts ? (
          <span>-&#128561;-&#128561;-&#128561;-</span>
        ) : (
          <a href={contacts}>{contacts}</a>
        )}
      </div>
    );
  };

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div key={userId}>
      <div className={StyleContentUser.content__img}></div>
      <div className={StyleContentUser.content__admin}>
        <div className={StyleContentUser.content__user}>
          <img
            className={StyleContentUser.img1}
            src={profile.photos.large != null ? profile.photos.large : avatar}
            alt="avatar"
          />
          <div className={StyleContentUser.content__info}>
            <div>
              {!match.params.userId && (
                <input type={"file"} onChange={mainPhotoSelected} />
              )}
              <h2 className={StyleContentUser.content__title}>
                {profile.fullName}
              </h2>
              <StatusProfile
                userId={userId}
                getStatus={getStatus}
                status={status}
                updateStatus={updateStatus}
              />
              <div className={StyleContentUser.content__aboutMe}>
                {profile.aboutMe}
             
                {profile.lookingForAJobDescription}
                {profile.lookingForAJob != null ? (
                  <span>&#128513;</span>
                ) : (
                  <span>&#128516;</span>
                )}
              </div>
            </div>
            <div className={StyleContentUser.content__social}>
              {socialLink(profile.contacts.facebook, "facebook: ")}
              {socialLink(profile.contacts.website, "Web Site: ")}
              {socialLink(profile.contacts.vk, "VK: ")}
              {socialLink(profile.contacts.twitter, "twitter: ")}
              {socialLink(profile.contacts.instagram, "Instagram: ")}
              {socialLink(profile.contacts.youtube, "Youtube: ")}
              {socialLink(profile.contacts.github, "GitHub: ")}
              {socialLink(profile.contacts.mainLink, "MainLink: ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// export const photoProfileForm = reduxForm({
//   form: "file",
// })(DataProfile);
export default compose(withRouter)(DataProfile);
