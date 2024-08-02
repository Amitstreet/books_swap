import React from "react";
import ReactDOM from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import { isMobile } from 'react-device-detect';
import Nav from "./Components/Utils/Nev.jsx";
import Foot from "./Components/Utils/Foot.jsx";
import Error from "./Error.jsx";
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
import Profile from './Profile.jsx';
import Nearest from "./nearest.jsx";
import MapComponent from "./map.jsx";

// Custom mobile popup component
const MobilePopup = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h2>Please open this application on a desktop.</h2>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <Nav />
          <Sidebar />
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
      <Nav />
      <Error />
      <Foot />
    </>
  );
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
        path: "/book",
        element: <Book />,
      },
      {
        path: "/add-book",
        element: <Add_prod />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/nearest",
        element: <Nearest />,
      },
      {
        path: "/map",
        element: <MapComponent />,
      },
    ],
  },
]);

const RootComponent = () => {
  return isMobile ? <MobilePopup /> : <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <RootComponent />
);
