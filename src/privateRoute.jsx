import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { refreshToken } from "./api.auth";
import { setAuth } from "./redux/AuthSlice/AuthSlice";

const PrivateRoute = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const refresh = async() => {
      const response = await refreshToken()
      localStorage.setItem('access-token', response.data.access)
      dispatch(setAuth(localStorage.getItem('access-token')!==null))
    }
    refresh()
  },
    [dispatch]
  )
  const isAuth = useSelector((state) => state.auth.isAuth)

  if (isAuth) {
     return <Outlet/>
  } else {
    return <Navigate to="/login" />;
  }
};
  
export default PrivateRoute;