import React from "react";
import StyleContentUser from "./dataProfile.module.css";
const DataProfile = () => {
  return (
    <div>
      <div className={StyleContentUser.content__img}></div>
      <div className={StyleContentUser.content__admin}>
        <div className={StyleContentUser.content__user}>
          <img
            className={StyleContentUser.img1}
            src="https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg"
            alt="avatar"
          />
          <div className={StyleContentUser.content__info}>
            <h2 className={StyleContentUser.content__title}>Andriy .H</h2>
            <p className={StyleContentUser.content__subtitle}>
              Date of Birth: 2 january
              <br />
              City: Ivano
              <br />
              Education: BSU '11
              <br />
              Web Site: https://it-proger.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProfile;
