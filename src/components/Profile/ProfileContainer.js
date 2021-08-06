import React from "react";
import Profile from './Profile'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
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

  render() {
    return <Profile {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
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
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}))
(ProfileContainer)



