import * as api from '../api'
import { INCREMENT, DECREMENT,
  ADD_POST_BEGIN, ADD_POST_SUCCESS, ADD_POST_ERROR,
  GET_POSTS_BEGIN, GET_POSTS_SUCCESS, GET_POSTS_ERROR,
  GET_POST_BEGIN, GET_POST_SUCCESS, GET_POST_ERROR,
  DELETE_POST_BEGIN, DELETE_POST_SUCCESS, DELETE_POST_ERROR,

} from './actionTypes'


export function inc() {
  return {
    type: INCREMENT,
  }
}

export const dec = () => {
  return {
    type: DECREMENT,
  }
}

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_BEGIN })
  try {
    const result = await api.getPosts()
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: result,
    })
  } catch (error) {
    dispatch({
      type: GET_POSTS_ERROR,
      payload: error,
    })
  }
}

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST_BEGIN })
  try {
    const result = await api.getPost(id)
    dispatch({
      type: GET_POST_SUCCESS,
      payload: result,
    })
  } catch (error) {
    dispatch({
      type: GET_POST_ERROR,
      payload: error,
    })
  }
}

export const addPost = (post) => async (dispatch) => {
  dispatch({ type: ADD_POST_BEGIN })
  try {
    const result = await api.addPost(post)
    dispatch({
      type: ADD_POST_SUCCESS,
      payload: result,
    })
  } catch (error) {
    dispatch({
      type: ADD_POST_ERROR,
      payload: error,
    })
  }
}

export const deletePost = (postId) => async (dispatch) => {
  dispatch({type: DELETE_POST_BEGIN});
  try{
    await api.deletePost(postId);
    dispatch({type: DELETE_POST_SUCCESS, payload: postId});
  }catch(error) {
    dispatch({
      type: DELETE_POST_ERROR,
      payload: error
    })
  }
}

