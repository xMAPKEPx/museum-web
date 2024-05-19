import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import './index.css';
import MainPage from './pages/MainPage/MainPage';
import Auth from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import PrivateRoute from './privateRoute'
import FamilyArchives from "./pages/Family-Archives/Family-Archives";
import Exhibitions from "./pages/Museum-Exhibitions/Exhibitions";
import { Provider } from "react-redux";
import { store } from './redux/store'
import Profile from "./pages/Profile/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainPage />} />
      <Route path='/exhibitions' element={<Exhibitions />}>
        <Route path='/exhibitions/:id' element={<Exhibitions />} />
      </Route>
      <Route path="/archives" element={<FamilyArchives />}>
        <Route path="/archives/:id" element={<FamilyArchives />} />
      </Route>
      <Route path='/login' element={<Auth />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='' element = {<PrivateRoute />}>
        <Route path="/profile" element = {<Profile />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
);
