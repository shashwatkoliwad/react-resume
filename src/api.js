import axios from 'axios'

export async function loginUser(data) {
    let res = await axios.post(`/user/login`, data)
    console.log(res.data)
    //   .then((response) => {
    //       console.log(response)
    //     return response.data
    //   })
    //   .catch((error) => {
    //     return error
    //   });
  }

  export function updateHighlights(data) {
    return axios.post(`/profile/update`, data)
      .then((response) => {
          console.log(response.data)
        return response.data
      })
      .catch((error) => {
        return error
      });
  }


  export function profileOverviewUpdate(data) {
    return axios.post(`/profile/update`, data)
    .then((response) => {
        console.log(response.data)
      return response.data
    })
    .catch((error) => {
      return error
    });
  }

  export function addExperience(data) {
    return axios.post(`/experience/add`, data)
    .then((response) => {
        console.log(response.data)
      return response.data
    })
    .catch((error) => {
      return error
    });
  }
