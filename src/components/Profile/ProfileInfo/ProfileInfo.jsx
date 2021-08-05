import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfilestatusWithHooks";
import userPhoto from "../../../assets/images/Viktar.png";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
  <div>
    <div>
      <div>ProfileInfo</div>
    </div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt=""
           className={s.userPhoto}
      />
      <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus}/>
    </div>
  </div> )
}

export default ProfileInfo;