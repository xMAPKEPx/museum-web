import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import './index.css';
import MainPage from './pages/MainPage/MainPage';
import Auth from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import PrivateRoute from './privateRoute'
import CollectionsPage from "./pages/Collections/CollectionsPage";
import Exhibitions from "./pages/Museum-Exhibitions/Exhibitions";
import {Provider} from "react-redux";
import {store} from './redux/store'
import ProfilePage from "./pages/Profile/ProfilePage";
import ExhibitionCard from "./components/Exhibitions-components/ExhibitionDetails/ExhibitionCard";
import CreateCollection from "./components/Collections-components/CreateCollection/CreateCollection";
import CollectionCard from "./components/Collections-components/CollectionCard/CollectionCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainPage />} />
      <Route path='/exhibitions' element={<Exhibitions />}>
        <Route path='/exhibitions/:id' element={<ExhibitionCard />} />
      </Route>
      <Route path="/collections" element={<CollectionsPage />}>
        <Route path="/collections/:id" element={<CollectionCard />} />
      </Route>
      <Route path='/login' element={<Auth />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='' element = {<PrivateRoute />}>
          <Route path="/profile" element = {<ProfilePage />}></Route>
          <Route path="/me/collections" element={<CollectionsPage user={'me'} />}>
              <Route path='/me/collections/:id' element={<CollectionCard />} />
          </Route>
          <Route path='/collections/create' element={<CreateCollection />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
