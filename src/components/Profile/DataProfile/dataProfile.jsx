import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import StyleContentUser from "./dataProfile.module.css";
import StatusProfile from "./statusProfile";
//"https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg"
const DataProfile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div key={props.profile.userId}>
      <div className={StyleContentUser.content__img}></div>
      <div className={StyleContentUser.content__admin}>
        <div className={StyleContentUser.content__user}>
          <img
            className={StyleContentUser.img1}
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : "https://www.drhair.in/wp-content/uploads/2016/09/user-icon-6.png"
            }
            alt="avatar"
          />
          <div className={StyleContentUser.content__info}>
            <h2 className={StyleContentUser.content__title}>
              {props.profile.fullName}
            </h2>
            <div className={StyleContentUser.content__subtitle}>
              <StatusProfile
                getStatus={props.getStatus}
                userId={props.profile.userId}
                status={props.status}
                updateStatus={props.updateStatus}
              />
              <hr />
              {props.profile.aboutMe}
              <br />
              {props.profile.lookingForAJobDescription}
              {props.profile.lookingForAJob != null ? (
                <span>&#128513;</span>
              ) : (
                <span>&#128516;</span>
              )}
              <hr />
              facebook:{" "}
              {!props.profile.contacts.facebook ? (
                <span>-&#128561;-&#128561;-&#128561;-</span>
              ) : (
                <a href={props.profile.contacts.facebook}>
                  {props.profile.contacts.facebook}
                </a>
              )}
              <br />
              Web Site:
              {!props.profile.contacts.website ? (
                <span>-&#128561;-&#128561;-&#128561;-</span>
              ) : (
                <a href="github.com"> github.com</a>
              )}
              <br />
              Vk:{" "}
              {!props.profile.contacts.vk ? (
                <span>-&#128561;-&#128561;-&#128561;-</span>
              ) : (
                <a href={props.profile.contacts.vk}>
                  {props.profile.contacts.vk}
                </a>
              )}
              <br />
              twitter:{" "}
              {!props.profile.contacts.twitter ? (
                <span>-&#128561;-&#128561;-&#128561;-</span>
              ) : (
                <a href={props.profile.contacts.twitter}>
                  {props.profile.contacts.twitter}
                </a>
              )}
              <br />
              instagram:{" "}
              {!props.profile.contacts.instagram ? (
                <span>-&#128561;-&#128561;-&#128561;-</span>
              ) : (
                <a href={props.profile.contacts.instagram}>
                  {props.profile.contacts.instagram}
                </a>
              )}
              <br />
              youtube:{" "}
              {!props.profile.contacts.youtube ? (
                <span>-&#128561;-&#128561;-&#128561;-</span>
              ) : (
                <a href={props.profile.contacts.youtube}>
                  {props.profile.contacts.youtube}
                </a>
              )}
              <br />
              github:{" "}
              {!props.profile.contacts.github ? (
                <span>-&#128561;-&#128561;-&#128561;-</span>
              ) : (
                <a href={props.profile.contacts.github}>
                  {props.profile.contacts.github}
                </a>
              )}
              <br />
              mainLink:{" "}
              {!props.profile.contacts.mainLink ? (
                <span>-&#128561;-&#128561;-&#128561;-</span>
              ) : (
                <a href={props.profile.contacts.mainLink}>
                  {props.profile.contacts.mainLink}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProfile;
