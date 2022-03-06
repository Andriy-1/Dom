import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import StyleContentUser from "./dataProfile.module.css";
import StatusProfile from "./statusProfileHooks";


const DataProfile = ({ getStatus, profile, status, updateStatus }) => {
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
  return (
    <div key={profile.userId}>
      <div className={StyleContentUser.content__img}></div>
      <div className={StyleContentUser.content__admin}>
        <div className={StyleContentUser.content__user}>
          <img
            className={StyleContentUser.img1}
            src={
              profile.photos.large != null
                ? profile.photos.large
                : "https://www.drhair.in/wp-content/uploads/2016/09/user-icon-6.png"
            }
            alt="avatar"
          />
          <div className={StyleContentUser.content__info}>
            <h2 className={StyleContentUser.content__title}>
              {profile.fullName}
            </h2>
            <div className={StyleContentUser.content__subtitle}>
              <StatusProfile
                getStatus={getStatus}
                userId={profile.userId}
                status={status}
                updateStatus={updateStatus}
              />
              <hr />
              {profile.aboutMe}
              <br />
              {profile.lookingForAJobDescription}
              {profile.lookingForAJob != null ? (
                <span>&#128513;</span>
              ) : (
                <span>&#128516;</span>
              )}
              <hr />
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

export default DataProfile;
