import { api } from '../api.js'

const getPosts = (payload) => ({ type: 'GET_POSTS', payload })

export function getPostsAsync() {
  return async (dispatch) => {
    try {
      const response = await api.get('/')

      dispatch(getPosts(response.data.results))
    } catch (error) {
      console.log(error)
    }
  }
}