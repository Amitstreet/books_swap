import React, { useState, useEffect } from 'react';
import { getNearestLocation } from './api/location.js';
import { useSelector } from 'react-redux';

function Nearest() {
  const [user1, setUser] = useState(null);
  const user = useSelector(state => state);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const nearestUser = async () => {
      let data = await getNearestLocation({ lng: user.user.location.longitude, lat: user.user.location.latitude });
      console.log(data)
      setUser(data);
      setLoading(false);
    };
    nearestUser();
  }, [user.user.location.longitude, user.user.location.latitude]);




  return (
    <div className="w-34 py-8 w-[calc(100%_-_265px)] ml-auto mr-2">
      <div className="container mx-auto p-4">
        <div className="w-full py-8 px-4 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // Shimmer UI for loading state
              [...Array(6)].map((_, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center transform transition-transform">
                  <div className="shimmer w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-900 shadow-inner flex items-center justify-center"></div>
                  <div className="shimmer w-32 h-6 mt-4 rounded"></div>
                  <div className="shimmer w-24 h-4 mt-2 rounded"></div>
                  <div className="mt-4 flex space-x-2">
                    <div className="shimmer w-24 h-10 rounded-lg"></div>
                    <div className="shimmer w-24 h-10 rounded-lg"></div>
                  </div>
                </div>
              ))
            ) : (
              user1?.users.map((ele) => (
                <div key={ele._id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                  <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-900 shadow-inner flex items-center justify-center">
                    <img
                      className="w-20 h-20 rounded-full border-2 border-gray-300 dark:border-gray-700"
                      src="https://via.placeholder.com/150"
                      alt="Profile Image"
                    />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{ele.username}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{ele.email}</p>
                  <div className="mt-4 flex space-x-2">
                    <button className="bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
                      Contact Me
                    </button>
                    <button id={ele._id} className="bg-green-400 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
                      Profile
                    </button>
                    <a
                      href={`https://wa.me/${ele.MobileNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-whatsapp-green hover:bg-whatsapp-dark text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nearest;
