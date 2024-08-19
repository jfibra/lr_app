const initialState = {
    authToken: null,
    userData: null,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "SIGNIN":
            return {
                ...state,
                authToken: action.payload,
            };
        case "GETUSER":
            return {
                ...state,
                userData: action.payload,
            };
        case "UPDATEUSER":
            return {
                ...state,
                userData: action.payload,
            };
        default:
            return state;
    }
};