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
    return instance.get(`profile/` + userID)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}



