import { useEffect, createContext, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AuthCurrentUser } from '../store/authActions';

const AuthContext = createContext();
export { AuthContext };

const AuthProvider = ({ children }) => {
    const token = useSelector((state) => state.AuthReducers.authToken);
    const authenticatedUser = token !== null;
    const dispatch = useDispatch();
    const authenticateUser = () => {
        dispatch(AuthCurrentUser());
    };
    useEffect(() => {
        authenticateUser();
    }, [authenticatedUser]);
    return (
        <AuthContext.Provider value={authenticatedUser}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthProvider = () => useContext(AuthContext);
export default AuthProvider;