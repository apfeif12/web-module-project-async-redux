import axios from "axios";

export const FETCH_COMIC_START = "FETCH_COMIC_START";
export const FETCH_COMIC_SUCCESS = "FETCH_COMIC_SUCCESS";
export const FETCH_COMIC_FAIL = "FETCH_COMIC_FAIL";


export const fetchData = () => (dispatch) => {
  dispatch(fetchComicStart());
  axios
    .get(
      "https://api.taylor.rest/"
    )
    .then((res) => {
      dispatch(fetchComicSuccess(res.data));
      console.log("sucess", res);
  
    })
    .catch((error) => {
      dispatch(fetchComicFail(error));
      console.log("error", error);
    });
};

export const fetchComicStart = () => {
  return { type: FETCH_COMIC_START };
};

export const fetchComicSuccess = (res) => {
  return { type: FETCH_COMIC_SUCCESS, payload: res };
};

export const fetchComicFail = (error) => {
  return { type: FETCH_COMIC_FAIL, payload: error };
};




