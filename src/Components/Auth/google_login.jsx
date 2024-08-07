import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {

  signInStart,
  signInSuccess,
  signInFailure,
  signoutSuccess
} from '../../redux/user/userSlice.js'

export default function google_login() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user1 = useSelector(state => state.user.currentUser);
    useEffect(() => {
     const get_result=  async ()=>{ 
      axios.get('http://localhost:5000/api/user', { withCredentials: true })
        .then(response => {
          console.log(response.data)
          setUser(response.data);
          dispatch(signInSuccess(response.data));
          navigate('/')
        })
        .catch(error => {
          console.error('Error fetching user:', error);
          dispatch(signoutSuccess())
        });
      }
      if(user1)
        {
          navigate("/")
        }
        else{
      get_result();
        }
    },[]);
  
    const handleLogin = () => {
      window.location.href = 'http://localhost:5000/auth/google';

      axios.get('http://localhost:5000/auth/google', { withCredentials: true} ,)
      .then((res) => {
        console.log(res);
        setUser(null);
      });
    };
  
    const handleLogout = () => {
      window.location.href = 'http://localhost:5000/logout';
      axios.get('http://localhost:5000/logout', { withCredentials: true} ,)
        .then(() => {
          console.log("yes");
          setUser(null);
        });
    };

  return (
    <div> <button


    type="button"
    className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-slate-900"
  >
    <svg
      className="w-4 h-auto"
      width={46}
      height={47}
      viewBox="0 0 46 47"
      fill="none"
    >
      <path
        d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
        fill="#4285F4"
      />
      <path
        d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
        fill="#34A853"
      />
      <path
        d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
        fill="#FBBC05"
      />
      <path
        d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
        fill="#EB4335"
      />
    </svg>
    Sign in with Google
  </button>
  <div className="App">
      <header className="App-header">
        <h1>Google Authentication with React and Node.js</h1>
        {user ? (
          <div>
            {/* <h2>Welcome, {user?.displayName}</h2>
            <p>Email: {user.emails[0]?.value}</p>
            {user?.photos && user?.photos.length > 0 && (
              <img src={user?.photos[0]?.value} alt="Profile" />
            )} */}
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login with Google</button>
        )}
      </header>
    </div></div>
  )
}
