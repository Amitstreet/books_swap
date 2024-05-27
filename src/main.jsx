import("preline");
// import React from "react";
import ReactDOM from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import Nav from "./Components/Utils/Nev.jsx"
import Foot from "./Components/Utils/Foot.jsx"
import Error from "./Error.jsx"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./Components/Utils/Sidebar.jsx";
import Signup from "./Components/Auth/Signup.jsx";
import Login from "./Components/Auth/Login.jsx";
import ForgotPass from "./Components/Auth/ForgotPass.jsx";
import Home from "./Home.jsx";
import Book from './books.jsx';
import Add_prod from "./Components/form/add_prod.jsx";
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Profile from './Profile.jsx'
import Nearest from "./nearest.jsx";
const AppLayout = () => {
  return (
    <>
    
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Nav />
      <Sidebar/>
       <Outlet />
      <Foot />
      </Provider>
  </PersistGate>


    </>
  );
};



function ErrorAll() {
  return (
    <>
    <Nav/>
    <Error/>
    <Foot />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorAll />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/signup",
        element: <Signup />,
      },

      
      {
        path: "/login",
        element: <Login />,
      },


      {
        path: "/forgot-password",
        element: <ForgotPass />,
      },

      {
         path:"/book",
        element:<Book/>

      },

      {
        path:"/add-book",
        element:<Add_prod/>,
      }
      ,{
        path:"/profile",
        element:<Profile/>,
      }
      ,{
        path:"/nearest",
        element:<Nearest/>
      }

    ],
  },
 

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




