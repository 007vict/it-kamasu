import React from "react";
import Profile from './Profile'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userID = this.props.match.params.userID
    if (!userID) {
      userID = this.props.authorizedUserId
      if (!userID) {
        this.props.history.push("/Login")
      }
    }
    this.props.getUserProfile(userID)
    this.props.getStatus(userID)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userID !== prevProps.match.params.userID)
    this.refreshProfile()
  }

  render() {
    return <Profile {...this.props}
                    isOwner={!this.props.match.params.userID}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
    />
  }
}

let mapStateToProps = (state) => {
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
  })
}


export default compose(withRouter,
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}))
(ProfileContainer)



