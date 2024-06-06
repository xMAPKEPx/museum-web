import {Navigate, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {refreshToken} from "./api.auth";
import {setAuth} from "./redux/AuthSlice/AuthSlice";

const PrivateRoute = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth)
  useEffect(() => {
    const refresh = async() => {
      const response = await refreshToken()
      localStorage.setItem('access-token', response.data.access)
      dispatch(setAuth(localStorage.getItem('access-token')!==null))
    }
    refresh()
  },
    [dispatch]
  );

  if (isAuth) {
     return <Outlet/>
  } else {
    return <Navigate to="/login" />;
  }
};
  
export default PrivateRoute;