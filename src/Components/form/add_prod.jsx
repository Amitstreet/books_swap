import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { add_book,edit_book } from '../../api/book';
import Stepper from '../Utils/stepper';
import useStepper from '../../hook/useStepper';

function AddProd({ editbook = null ,seteditbook}) {

  const { currentStep, nextStep, prevStep } = useStepper();
  const [image, setnewimage] = useState(null);
  const  user = useSelector(state => state);
  const [file, setFile] = useState(null);
  const [data, setData] = useState(editbook == null ? {
    id: user.user.currentUser._id, bookname: "", writer: "", url: "", catogery: "", description: ""
  } : editbook);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateimage = () => {
    setnewimage(true);
  }

  
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
    const isValid = data.bookname && data.writer && file && data.catogery && data.description;
    setIsFormValid(isValid);
  }, [data, file]);

  async function submitForm(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');  
    
    try {
      console.log("yes")

      if(editbook == null || image==true)
        {
          console.log("yes")
       const response = await fetch('https://api.cloudinary.com/v1_1/dmc8lom8k/image/upload', {
        method: 'POST',
        body: formData
      });
    
      nextStep();
      let ndata = await response.json();
      console.log(response);
      data["url"] = ndata.url;
    }
      setData(data);
      if(editbook==null)
        {
      const resp = await add_book(data);
        }
        else
        {
          console.log(data)
          const result= await edit_book(data);
        }
        seteditbook(null);
      nextStep();
    } catch (error) {
      console.error('Error uploading:', error);
      // Handle failure
    } finally {
      setIsLoading(false);
    }
  }




  return (
    <div>
      <>
        {/* Card Section */}
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <Stepper currentStep={currentStep} />
          <form onSubmit={submitForm}>
            {/* Card */}
            <div className="bg-white rounded-xl shadow dark:bg-neutral-900">
              <div className="pt-0 p-4 sm:pt-0 sm:p-7">
                {/* Grid */}
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
                      placeholder="Enter project name"
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
                      placeholder="https://example.so"
                    />
                  </div>
                  <div className="sm:col-span-9">
                    {image == true || editbook == null ? <div space-y-2>

                      <label
                        // htmlFor="af-submit-app-project-name"
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
                        // value={"nnn"}

                        className="block w-full border border-gray-200 rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                          file:bg-gray-50 file:border-0
                          file:bg-gray-100 file:me-4
                          file:py-2 file:px-4
                          dark:file:bg-neutral-700 dark:file:text-neutral-400"
                      />
                    </div> :
                      <div>
                        {editbook != null && <button onClick={updateimage} type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none">
                          Want to Upload new Image
                        </button>}


                      </div>}

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
                {/* End Grid */}
                <div className="mt-5 flex justify-center gap-x-2">
                  <button
                    type="submit"
                    disabled={editbook == null && !isFormValid || isLoading}
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        <span>Loading...</span>
                      </>
                    ) : (
                      <span> {editbook == null ? "Submit your Book" : "edit"}</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
            {/* End Card */}
          </form>
        </div>
        {/* End Card Section */}
      </>
    </div>
  );
}

export default AddProd;
