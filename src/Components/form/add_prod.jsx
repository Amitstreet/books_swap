import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { add_book, edit_book } from '../../api/book';
import Stepper from '../Utils/stepper';
import useStepper from '../../hook/useStepper';

function AddProd({ editbook = null, seteditbook }) {
  const { currentStep, nextStep, prevStep } = useStepper();
  const [image, setnewimage] = useState(null);
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [data, setData] = useState(editbook == null && user.currentUser != null ? {
    id: user.currentUser._id, bookname: "", writer: "", url: "", catogery: "", description: ""
  } : editbook);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if (!user || !user.currentUser) {
      toast.error("You must be logged in to access this page.");
       navigate('/login'); // Delay navigation by 2 seconds
    } else {
      setIsAuthChecked(true);
    }
  }, [user, navigate]);

  const updateimage = () => {
    setnewimage(true);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handle = (e) => {
    setData((prevData) => ({
      ...prevData, [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    if (user.currentUser != null) {
      const isValid = data.bookname && data.writer && file && data.catogery && data.description;
      setIsFormValid(isValid);
    }
  }, [data, file]);

  async function submitForm(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');
    console.log(formData)
    console.log(data)

    try {
      if (editbook == null || image === true) {
        const response = await fetch('https://api.cloudinary.com/v1_1/dmc8lom8k/image/upload', {
          method: 'POST',
          body: formData
        });

        nextStep();
        let ndata = await response.json();
        data["url"] = ndata.url;
      }
      setData(data);
      if (editbook == null) {
        await add_book(data);
      } else {
        await edit_book(data);
      }
      seteditbook(null);
      nextStep();
    } catch (error) {
      console.error('Error uploading:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <ToastContainer />
      {isAuthChecked && user.currentUser != null ? (
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <Stepper currentStep={currentStep} />
          <form onSubmit={submitForm}>
            <div className="bg-white rounded-xl shadow dark:bg-neutral-900">
              <div className="pt-0 p-4 sm:pt-0 sm:p-7">
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-project-name"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                    >
                      Book name
                    </label>
                    <input
                      value={data.bookname}
                      onChange={handle}
                      name="bookname"
                      id="af-submit-app-project-name"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter book name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                    >
                      Book writer
                    </label>
                    <input
                      value={data.writer}
                      onChange={handle}
                      name="writer"
                      id="af-submit-project-url"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter writer's name"
                    />
                  </div>
                  <div className="sm:col-span-9">
                    {image === true || editbook == null ? (
                      <div space-y-2>
                        <label
                          className="inline-block text-sm font-medium mb-4 text-gray-800 mt-2.5 dark:text-neutral-200"
                        >
                          Book Image
                        </label>
                        <label htmlFor="af-submit-application-resume-cv" className="sr-only">
                          Choose file
                        </label>
                        <input
                          onChange={handleFile}
                          type="file"
                          className="block w-full border border-gray-200 rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                            file:bg-gray-50 file:border-0
                            file:bg-gray-100 file:me-4
                            file:py-2 file:px-4
                            dark:file:bg-neutral-700 dark:file:text-neutral-400"
                        />
                      </div>
                    ) : (
                      <div>
                        {editbook != null && (
                          <button onClick={updateimage} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none">
                            Want to Upload new Image
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-category"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                    >
                      Category
                    </label>
                    <select
                      value={data.catogery}
                      name="catogery"
                      onChange={handle}
                      id="af-submit-app-category"
                      className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    >
                      <option value="">Select a category</option>
                      <option>Story</option>
                      <option>Poetry</option>
                      <option>Novel</option>
                      <option>Study</option>
                      <option>Romance</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-description"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                    >
                      Description
                    </label>
                    <textarea
                      value={data.description}
                      onChange={handle}
                      name="description"
                      id="af-submit-app-description"
                      className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      rows={6}
                      placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                    />
                  </div>
                </div>
                <div className="mt-5 flex justify-center gap-x-2">
                  <button
                    type="submit"
                    disabled={!isFormValid || isLoading}
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {editbook == null ? "Upload book" : "Update book"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <ToastContainer />
      )}
    </div>
  );
}

export default AddProd;
