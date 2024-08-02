import React, { useState } from 'react';
import axios from 'axios';
import { send_otp, verify_otp } from '../../api/Auth';
import { edit_profile } from '../../api/edit_profile';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signInSuccess,
} from '../../redux/user/userSlice.js'


const LocationOtpForm = ({ id, setuser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [city, setCity] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [otpProcessStarted, setOtpProcessStarted] = useState(false);
  const [skipVerification, setSkipVerification] = useState(false);

  const handleSendOtp = async () => {
    try {
      let formattedPhoneNumber = phoneNumber;

      // Add +91 if not already present

      if (!formattedPhoneNumber.startsWith('+91')) {
        formattedPhoneNumber = `+91${formattedPhoneNumber}`;
      }
      setPhoneNumber(formattedPhoneNumber);
      setOtpSent(true);
      let data = await send_otp({ phoneNumber: formattedPhoneNumber });
      console.log('OTP sent to ' + formattedPhoneNumber);
      console.log(data);
    } catch (err) {
      setOtpSent(false);
      console.error('Error sending OTP:', err);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      let data = await verify_otp({ phoneNumber, otp });
      console.log(data);
      setVerified(true);
    } catch (err) {
      setVerified(false);
      console.error('Error verifying OTP:', err);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        fetchCityName(latitude, longitude);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const fetchCityName = async (lat, lon) => {
    try {
      const apiKey = '1e7dc0ffd580760586eff324bb3bd251';
      const response = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`);
      const cityName = response.data[0]?.name || 'Unknown location';
      setCity(cityName);
      alert(`Current city: ${cityName}`);
    } catch (error) {
      console.error('Error fetching city name:', error);
    }
  };


  const handleSubmit = async () => {
    try {
      const response = await edit_profile({ id, city, phoneNumber });
      setSubmissionStatus('Submission successful!');

      dispatch(signInSuccess(response.user));
         
      setuser(response.user)
    } catch (error) {
      setSubmissionStatus('Submission failed. Please try again.');
      console.error('Error submitting data:', error);
    }
  };

  const startOtpProcess = () => {
    setOtpProcessStarted(true);
    handleSendOtp();
  };

  const handleSkipVerification = () => {
    setSkipVerification(true);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Location and OTP Verification</h1>
      <button
        onClick={getCurrentLocation}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Get Current Location
      </button>
      {city && <p className="mb-4">Current City: {city}</p>}
      <div className="w-full max-w-xs">
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={`w-full px-3 py-2 mb-2 border ${otpSent && !verified ? 'border-red-500' : 'border-gray-300'} rounded`}
          placeholder="Enter phone number"
        />
        {!otpProcessStarted && !skipVerification && (
          <div>
            <button
              onClick={startOtpProcess}
              className="w-full mb-2 px-4 py-2 bg-green-500 text-white rounded"
            >
              Start OTP Process
            </button>
            <button
              onClick={handleSkipVerification}
              className="w-full mb-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              Skip Verification
            </button>
          </div>
        )}
        {otpSent && !verified && (
          <div>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className={`w-full px-3 py-2 mb-2 border ${verified ? 'border-green-500' : 'border-gray-300'} rounded`}
              placeholder="Enter OTP"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded"
            >
              Verify OTP
            </button>
          </div>
        )}
      </div>
      {(verified || skipVerification) && city && (
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded"
        >
          Submit
        </button>
      )}
      {submissionStatus && <p className="mt-4">{submissionStatus}</p>}
    </div>
  );
};

export default LocationOtpForm;
