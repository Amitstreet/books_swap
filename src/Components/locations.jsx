import React, { useEffect } from 'react';
import useCurrentLocation from '../hook/useCurrentLocation';
import { add_current_location } from '../api/location';
import { useDispatch, useSelector } from "react-redux";
import {
    add_location,
  } from '../redux/user/userSlice.js'

const LocationComponent = () => {
    const { nlocation, error, loading } = useCurrentLocation();
    let dispatch= useDispatch();
    const user = useSelector(state => state.user.currentUser);
    if(nlocation.latitude!=null)
        {
            dispatch(add_location(nlocation));
        }
    useEffect(()=>{       
            const add_location= async ()=>{
            if(nlocation.latitude!=null && user!=null)

    {
    let coordinates= [];
    coordinates.push(nlocation.longitude,nlocation.latitude);
               let userid=user._id;      
               add_current_location( {
                "userid": userid ,
                "location": { "type": "Point", "coordinates": coordinates}
              }
              )
               .then((data) => {
                    console.log(data);
                })
               .catch((error) => {
                    console.log(error);
                });
            }   
        }
        add_location();
    },[nlocation])

    console.log(nlocation)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div class="bg-white dark:bg-gray-700 text-black dark:text-white p-6 rounded-lg shadow-lg m-4">
        <h1 class="text-lg font-semibold mb-2">Your Current Location</h1>
        <p class="mb-1">Latitude: {nlocation.latitude}</p>
        <p class="mb-1">Longitude: {nlocation.longitude}</p>
    </div>
    
    );
};

export default LocationComponent;