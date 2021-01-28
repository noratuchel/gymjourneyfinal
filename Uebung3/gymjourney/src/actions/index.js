import axios from "axios";
import formatISO from "date-fns/formatISO";

const url = process.env.REACT_APP_BACKEND_URL;

// GET ALL USERS

/* // async await
export const getUsers = async () => (dispatch) => {
  dispatch({
    type: GET_USERS_FETCHING,
  });

  const response = await axios.get(`${url}/v1/users`)
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.res.data,
    });
};

 */

//Actions
export const GET_USERS_FETCHING = "GET_USERS_FETCHING";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

// Action Creator method mit .then .catch
export const getUsers = (token) => (dispatch) => {
  dispatch({
    type: GET_USERS_FETCHING,
  });
  axios({
    method: "get",
    url: `${url}/v1/users/`,
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: err,
      });
    });
};

//Actions
export const LOGIN_USER_FETCHING = "LOGIN_USER_FETCHING";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

// Action Creator method mit .then .catch
export const loginUser = (email, password) => (dispatch) => {
  dispatch({
    type: LOGIN_USER_FETCHING,
  });
  axios({
    method: "post",
    url: `${url}/v1/users/login`,
    data: {
      email: email,
      password: password,
    },
  })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: err,
      });
    });
};

export const GET_POSTS_FETCHING = "GET_POSTS_FETCHING";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

// Action Creator method mit .then .catch
export const getPosts = (token) => (dispatch) => {
  dispatch({
    type: GET_POSTS_FETCHING,
  });
  axios({
    method: "get",
    url: `${url}/v1/posts/`,
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_POSTS_FAILURE,
        payload: err,
      });
    });
};

//Actions
export const SIGNUP_USER_FETCHING = "SIGNUP_USER_FETCHING";
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNUP_USER_FAILURE = "SIGNUP_USER_FAILURE";

// Action Creator method mit .then .catch
export const signupUser = (token, firstname, lastname, email, password) => (
  dispatch
) => {
  dispatch({
    type: SIGNUP_USER_FETCHING,
  });
  axios({
    method: "post",
    url: `${url}/v1/users/new`,
    data: {
      firstname: firstname,
      surname: lastname,
      email: email,
      password: password,
    },
    headers: { Authorization: token },
  })
    .then((res) => {
      dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SIGNUP_USER_FAILURE,
        payload: err,
      });
    });
};

export const DELETE_USER_FETCHING = "DELETE_USER_FETCHING";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

// Action Creator method mit .then .catch
export const deleteUser = (token, _id) => (dispatch) => {
  dispatch({
    type: DELETE_USER_FETCHING,
  });
  axios({
    method: "delete",
    url: `${url}/v1/users/${_id}`,
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: err,
      });
    });
};

//Actions
export const EDIT_USER_FETCHING = "EDIT_USER_FETCHING";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

// Action Creator method mit .then .catch
export const editUser = (
  token,
  firstname,
  surname,
  email,
  password,
  role,
  user_id
) => (dispatch) => {
  let userData = {};
  if (firstname) {
    Object.assign(userData, { firstname: firstname });
  }
  if (surname) {
    Object.assign(userData, { surname: surname });
  }
  if (email) {
    Object.assign(userData, { email: email });
  }
  if (password) {
    Object.assign(userData, { password: password });
  }
  if (role) {
    Object.assign(userData, { role: role });
  }
  dispatch({
    type: EDIT_USER_FETCHING,
  });
  axios({
    method: "post",
    url: `${url}/v1/users/update/${user_id}`,
    headers: {
      Authorization: token,
    },
    data: userData,
  })
    .then((res) => {
      dispatch({
        type: EDIT_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_USER_FAILURE,
        payload: err,
      });
    });
};

//Actions
export const CREATE_POST_FETCHING = "CREATE_POST_FETCHING";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

// Action Creator method mit .then .catch
export const createPost = (token, content, user_id, firstname) => (
  dispatch
) => {
  dispatch({
    type: CREATE_POST_FETCHING,
  });
  axios({
    method: "post",
    url: `${url}/v1/posts/new/`,
    data: {
      content: content,
      date: formatISO(Date.now()),
      photo: "img1",
      content_img: "img2",
      user_id: user_id,
      forum_id: "5fc582a8fc9e9f09a60ce86a",
      firstname: firstname,
    },

    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_POST_FAILURE,
        payload: err,
      });
    });
};
