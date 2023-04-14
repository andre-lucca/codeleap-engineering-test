import { api } from '../api.js'

export const GET_POSTS = 'GET_POSTS'

const actionCreator = (type, payload) => ({ type, payload })

export function getPostsAsync() {
  return async (dispatch) => {
    try {
      const response = await api.get('/')

      dispatch(actionCreator(GET_POSTS, response.data.results))
    } catch (error) {
      console.log(error)
    }
  }
}

export function createPost(postData) {
  return async (dispatch) => {
    try {
      const creationResponse = await api.post('/', postData)

      if (creationResponse.status === 201) {
        const response = await api.get('/')

        dispatch(actionCreator(GET_POSTS, response.data.results))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export function editPost({ id, ...postData }) {
  return async (dispatch) => {
    try {
      const editionResponse = await api.patch(`/${id}/`, postData)

      if (editionResponse.status === 200) {
        const response = await api.get('/')

        dispatch(actionCreator(GET_POSTS, response.data.results))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export function deletePost(postId) {
  return async (dispatch) => {
    try {
      const deletionResponse = await api.delete(`/${postId}/`)

      if (deletionResponse.status === 204) {
        const response = await api.get('/')

        dispatch(actionCreator(GET_POSTS, response.data.results))
      }
    } catch (error) {
      console.log(error)
    }
  }
}