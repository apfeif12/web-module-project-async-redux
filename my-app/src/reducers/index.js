import {
    FETCH_COMIC_START,
    FETCH_COMIC_SUCCESS,
    FETCH_COMIC_FAIL,
} from "../actions/index.js";

const initialState = {
    loading: false,
    comic: "",
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMIC_START:
            return {
                ...state,
                loading: true,
            };

        case FETCH_COMIC_SUCCESS:
            return {
                ...state,
                comic: action.payload,
                loading: false,
            };

        case FETCH_COMIC_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};
export default reducer;
