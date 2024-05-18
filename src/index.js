import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
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
      <Route path='/social' element = {<PrivateRoute />}>
        <Route path="/social/id1" element = {<Auth />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
