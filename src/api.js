import axios from 'axios'

export function loginUser(data) {
    return axios.post(`/user/login`, data)
      .then((response) => {
          console.log(response.data)
        return response.data
      })
      .catch((error) => {
        return error
      });
  }

  export function updateHighlights(data) {
    return axios.post(`/user/highlights/update`, data)
      .then((response) => {
          console.log(response.data)
        return response.data
      })
      .catch((error) => {
        return error
      });
  }
