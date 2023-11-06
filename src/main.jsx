import("preline");





// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Nav from "./Components/Utils/Nev.jsx"
import Foot from "./Components/Utils/Foot.jsx"
import Error from "./Error.jsx"
import { Provider } from "react-redux";
import store from "./Components/redux/Store.jsx"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./Components/Utils/Sidebar.jsx";
import Signup from "./Components/Auth/Signup.jsx";
import Login from "./Components/Auth/Login.jsx";
import ForgotPass from "./Components/Auth/ForgotPass.jsx";
import Home from "./Home.jsx";
import Profile from "./Components/Profile/Index.jsx";
import CodeEditor from "./Components/Application/CodeEditor.tsx";
import Compiler from "./Compiler.jsx";
import Quastins_sumery from "./Components/Application/Quastins_sumery.jsx";
import  CodeContent from "./Components/Application/CodeContent.jsx";


const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
      <Nav />
      <Sidebar/>
      <Outlet />
      <Foot />
      </Provider>
    </>
  );
};


function ErrorAll() {
  return (
    <>
    <Nav />
    <Sidebar/>
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
        path: "/question",
        element: <App />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/compiler",
        element: <Compiler/>,
      },

      {
       path:"/question/:id",
       element:<Quastins_sumery/>
      }

      ,
      {
        path:"/question/:id/:id",
        element:<CodeContent/>
      }
      // {
      //   path: "/drawing",
      //   element: <DrawingApp/>,
      // },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
