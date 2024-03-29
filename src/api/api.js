import * as axios from "axios";

const instance = axios.create(
  {
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
      'API-KEY': 'e50df8fd-fd73-4bbb-a8ab-4685b4789d30'
    }
  }
)

export const usersAPI = {
  getUser(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}
      &count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  followUser(userID) {
    return instance.post(`follow/${userID}`)
      .then(response => {
        return response.data
      })
  },
  unfollowUser(userID) {
    return instance.delete(`follow/${userID}`)
      .then(response => {
        return response.data
      })
  },
  getProfile(userID) {
    console.warn('Obsolete method.Please profileAPI object.')
    return profileAPI.getProfile(userID)
  }
}

export const profileAPI = {
  getProfile(userID) {
    return instance.get(`profile/` + userID)
  },
  getStatus(userID) {
    return instance.get(`profile/status/` + userID)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status: status})
  },
  savePhoto(photoFile) {
    let formData = new FormData()
    formData.append('image', photoFile)
    return instance.put(`/profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile) {
    return instance.put(`/profile`, profile)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`/security/get-captcha-url`)
  }
}



