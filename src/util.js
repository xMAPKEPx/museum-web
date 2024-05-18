import { AuthService } from "./api.auth";
import AuthSlice from "./redux/AuthSlice/AuthSlice";
import { setAuth, setAuthInProgress } from "./redux/AuthSlice/AuthSlice";
import { useSelector, useDispatch } from "react-redux";

const ApiFunctions = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(AuthSlice.state.isAuth)
    const isAuthInProgress = useSelector(AuthSlice.state.isAuthInProgress)

    const login = async(email, password) => {
        dispatch(setAuthInProgress(true))
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem("token", response.data.accessToken)
            dispatch(setAuth(true))
        } catch (e) {
            console.log("Error: " + e)
        } finally {
            dispatch(setAuthInProgress(false))
        }
    }

    const checkAuth = async() => {
        dispatch(setAuthInProgress(true))
        try {
            const response = await AuthService.refreshToken()
            localStorage.setItem("token", response.data.accessToken)
            dispatch(setAuth(true))
        } catch (e) {
            console.log("Error: " + e)
        } finally {
            dispatch(setAuthInProgress(false))
        }
    }

    const logout = async() => {
        dispatch(setAuthInProgress(true))
        try {
            await AuthService.logout()
            dispatch(setAuth(false))
            localStorage.removeItem("token")
    } catch (e) {
        console.log("Error: " + e)
    } finally {
        dispatch(setAuthInProgress(false))
    }
    }
}

export default ApiFunctions;
