//authActions.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import AxiosInstance from "../config/AxiosInstance";

export const SignInUser = (token, data, navigation) => {
    return async (dispatch) => {
        await AsyncStorage.setItem("authToken", token);
        await AsyncStorage.setItem("userData", data);
        dispatch({
            type: "SIGNIN",
            payload: token,
        });
        navigation.navigate('Auth Screen');
    };
}

export const AuthCurrentUser = () => {
    return async (dispatch) => {
        try{
            const response = await AxiosInstance.get('authenticate');
            if (response.data !== null) {
                const token = AsyncStorage.getItem('authToken');
                dispatch({
                    type: "SIGNIN",
                    payload: token,
                });
            }
        } catch(e){
            console.log(e);
        }
    };
}

export const AuthLogout = (navigation) => {
    return async (dispatch) => {
        await AsyncStorage.removeItem("authToken");
        await AsyncStorage.removeItem("userData");
        dispatch({
            type: "SIGNIN",
            payload: null,
        });
        navigation.navigate('Auth Screen');
    }
}

export const GetUser = () => {
    return async (dispatch) => {
        const data = await AsyncStorage.getItem("userData");
        let userData = [];

        if(data !== null)
        {
            userData = JSON.parse(data);
            dispatch({
                type: "GETUSER",
                payload: userData,
            });
        }
    }
}

export const UpdateUser = (data) => {
    return async (dispatch) => {
        const userDataJson = JSON.stringify(data);
        await AsyncStorage.setItem("userData", userDataJson);

        dispatch({
            type: "UPDATEUSER",
            payload: data,
        });
    }
}