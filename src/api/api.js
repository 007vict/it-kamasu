import * as axios from "axios";

const instance = axios.create(
  {
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
      'API-KEY': 'afd18829-4f4d-45de-9d13-2acb02db84dc'
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
  }
}



