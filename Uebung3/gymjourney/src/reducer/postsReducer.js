import {
  GET_POSTS_FAILURE,
  GET_POSTS_FETCHING,
  GET_POSTS_SUCCESS,
} from "../actions";

const initialState = {
  posts: "",
  fetchingPosts: false,
  fetchingPostsError: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_FETCHING:
      return {
        ...state,
        fetchingPosts: true,
        fetchingPostsError: "",
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        fetchingPosts: false,
        fetchingPostsError: "",
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        fetchingPosts: false,
        fetchingPostsError: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
