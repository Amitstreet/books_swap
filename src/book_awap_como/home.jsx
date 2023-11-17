import React from 'react'

function Home() {
    return (

      <div className='w-[33rem] mx-auto'>

        <div className="mt-14 bg-white border border-[1px] border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700 p-4 sm:p-7 max-w-[430px] flex justify-between mx-auto">

            <p className='dark:text-gray-400'>
                whats in your mind
            </p>




            <>
                <>
                    <div className="text-center">
                        <button
                            type="button"
                            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-400 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none"
                            data-hs-overlay="#hs-modal-recover-account"
                        >
                            ADD BOOK
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>    </button>

                    </div>
                    <div
                        id="hs-modal-recover-account"
                        className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
                    >
                        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-4 sm:p-7">


                                    <div className="space-y-4">
                                        {/* Card */}
                                        <div className="space-y-4 sm:space-y-6">

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="af-submit-app-project-name"
                                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                                                >
                                                    Book name
                                                </label>
                                                <input
                                                    id="af-submit-app-project-name"
                                                    type="text"
                                                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                    placeholder="Enter project name"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="af-submit-app-upload-images"
                                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                                                >
                                                    Preview image
                                                </label>
                                                <label
                                                    htmlFor="af-submit-app-upload-images"
                                                    className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700"
                                                >
                                                    <input
                                                        id="af-submit-app-upload-images"
                                                        name="af-submit-app-upload-images"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                    <svg
                                                        className="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                                                        />
                                                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                                    </svg>
                                                    <span className="mt-2 block text-sm text-gray-800 dark:text-gray-200">
                                                        Browse your device or{" "}
                                                        <span className="group-hover:text-blue-700 text-blue-600">
                                                            drag 'n drop'
                                                        </span>
                                                    </span>
                                                    <span className="mt-1 block text-xs text-gray-500">
                                                        Maximum file size is 2 MB
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="af-submit-app-category"
                                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                                                >
                                                    Category
                                                </label>
                                                <select
                                                    id="af-submit-app-category"
                                                    className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                >
                                                    <option selected="">Select a category</option>
                                                    <option>Storey</option>
                                                    <option>Noval</option>
                                                    <option>Scince</option>
                                                    <option>Fiction</option>
                                                    <option>Romantic</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="af-submit-app-description"
                                                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                                                >
                                                    Description
                                                </label>
                                                <textarea
                                                    id="af-submit-app-description"
                                                    className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                    rows={6}
                                                    placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"></input>
                                        </div>

                                        {/* End Card */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </>

            </>

            





        </div>

 
<a
  className="w-[27rem] mt-[23px] mx-auto group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
  href="#"
>
  <div className="aspect-w-16 aspect-h-11">
    <img
      className="w-full object-cover rounded-xl"
      src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      alt="Image Description"
    />
  </div>
  <div className="my-6">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
        This book is realted to best storey line
    </h3>
    <p className="mt-5 text-gray-600 dark:text-gray-400">
     i brought this book 3days ago and now i have this book if any one want let me know 
    </p>
  </div>
  <div className="mt-auto flex items-center gap-x-3">
    <img
      className="w-8 h-8 rounded-full"
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
      alt="Image Description"
    />
    <div>
      <h5 className="text-sm text-gray-800 dark:text-gray-200">
        By Amit singh
      </h5>
    </div>
    
  </div>
</a>


   <div className='w-[26rem] mt-[7px] pl-3 pr-[18px] border border-[1px] border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700 justify-between  items-center gap-5 w-[27rem] flex mx-auto border-[solid]'> 
   <span class="m-1 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" id="comment"><path fill="#4e4e50" d="M20 4c4.414 0 8 3.586 8 8s-3.586 8-8 8h-8a7.989 7.989 0 0 0-6.395 3.203A4.014 4.014 0 0 1 4 20V10c0-3.309 2.695-6 6-6h10m0-4H10C4.477 0 0 4.477 0 10v10c0 4.418 3.586 8 8 8a4 4 0 0 1 4-4h8c6.629 0 12-5.375 12-12S26.629 0 20 0z"></path></svg>
</span>

   <svg class="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
   </div>
    

   <div className="w-[27rem] mt-3 mx-auto border rounded-xl shadow-sm p-6 dark:bg-slate-800 dark:border-gray-700">
  {/* Toast */}
  <div
    className="max-w-xs relative bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
    role="alert"
  >
    <div className="flex p-4">
      <div className="flex-shrink-0">
        <img
          className="inline-block h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Image Description"
        />
        <button
          type="button"
          className="absolute top-3 end-3 inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white"
        >
          <span className="sr-only">Close</span>
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <div className="ms-4 me-5">
        <h3 className="text-gray-800 font-medium text-sm dark:text-white">
          <span className="font-semibold">James</span> mentioned you in a
          comment
        </h3>
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Nice work! Keep it up!
        </div>
        <div className="mt-3">
          <button
            type="button"
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-blue-800 dark:text-blue-500 dark:focus:text-blue-400"
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
    <div className="w-[27rem] mt-3 mx-auto flex p-4">
      <div className="flex-shrink-0">
        <img
          className="inline-block h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Image Description"
        />
        <button
          type="button"
          className="absolute top-3 end-3 inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white"
        >
          <span className="sr-only">Close</span>
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      

     
    </div>
    
  </div>
  {/* End Toast */}
</div>
<div className="absolute inset-0 flex overflow-y-auto" role="tabpanel">
  <div className="flex h-full w-full">
    <div className="w-full">
      <div className="mx-auto flex max-w-3xl flex-col gap-y-6 p-4">
        <div
          className="flex gap-x-2 rounded-lg p-4 bg-info-lighter dark:bg-neutral-800/70"
          role="alert"
        >
          <div className="flex-shrink-0">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 text-info"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z" />
            </svg>
          </div>
          <div className="grid gap-y-1">
            <span className="block font-normal text-base text-neutral-500 dark:text-neutral-400">
              <div className="flex flex-col items-start gap-2">
                <span className="block font-normal text-neutral-900 dark:text-neutral-100 text-sm">
                  You are viewing the description from the solution page. To
                  practice this question,{" "}
                  <a
                    className="transition-colors font-medium text-brand-dark dark:text-brand hover:text-brand-dark dark:hover:text-brand hover:underline"
                    href="/questions/user-interface/counter"
                  >
                    go back
                  </a>{" "}
                  to the workspace page or{" "}
                  <a
                    className="transition-colors font-medium text-brand-dark dark:text-brand hover:text-brand-dark dark:hover:text-brand hover:underline"
                    href="#"
                  >
                    load a saved version
                  </a>
                  .
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h1 className="lg:text-2xl lg:font-semibold sm:text-xl sm:font-semibold text-lg font-semibold text-neutral-900 dark:text-white">
              <span>Counter </span>
            </h1>
            <div />
          </div>
          <div>
            <label className="mb-2 block sr-only" htmlFor=":r2q:">
              <span className="block font-medium text-neutral-900 dark:text-neutral-100 text-xs">
                Framework
              </span>
            </label>
            <select
              aria-label="Framework"
              className="flex items-center py-0 rounded-full transition-colors border border-neutral-300 dark:border-neutral-700 focus-visible:border-neutral-300 dark:focus-visible:border-neutral-700 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 focus-visible:outline-brand-dark dark:focus-visible:outline-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-0 h-8 text-xs"
              id=":r2q:"
            >
              <option value="react">React</option>
              <option value="vanilla">Vanilla JS</option>
              <option value="angular">Angular</option>
              <option value="svelte">Svelte</option>
            </select>
          </div>
        </div>
        <section className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <div className="group block flex-shrink-0">
            <span className="sr-only" id=":r2r:">
              Author
            </span>
            <div aria-labelledby=":r2r:" className="flex items-center gap-x-3">
              <div>
                <span className="pointer-events-auto relative inline-block">
                  <img
                    alt="Yangshun Tay"
                    className="inline-block h-8 w-8 rounded-full"
                    src="/img/team/yangshun.jpg"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-y-0.5">
                <span className="block font-semibold text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
                  Yangshun Tay
                </span>
                <span className="block font-normal text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
                  Ex-Meta Staff Engineer
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-1.5">
            <span className="sr-only" id=":r2s:">
              Languages
            </span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0 text-neutral-400 dark:text-neutral-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" />
            </svg>
            <div aria-labelledby=":r2s:" className="flex items-center gap-x-2">
              <span className="font-semibold text-xs inline-flex items-center rounded px-2 py-0.5 bg-orange-600 text-white dark:bg-neutral-800 dark:text-orange-600">
                HTML
              </span>
              <span className="font-semibold text-xs inline-flex items-center rounded px-2 py-0.5 bg-yellow-500 text-black dark:bg-neutral-800 dark:text-yellow-500">
                JS
              </span>
            </div>
          </div>
          <span className="pointer-events-auto relative inline-block">
            <span className="sr-only" id=":r2t:">
              Difficulty
            </span>
            <div
              aria-labelledby=":r2t:"
              className="flex items-center gap-x-1.5"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-neutral-400 dark:text-neutral-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z" />
              </svg>
              <span className="font-normal text-xs text-green">Easy</span>
            </div>
          </span>
          <span className="pointer-events-auto relative inline-block">
            <span className="sr-only" id=":r2u:">
              Recommended duration to spend during interviews
            </span>
            <div
              aria-labelledby=":r2u:"
              className="flex items-center gap-x-1.5"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-neutral-400 dark:text-neutral-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" />
              </svg>
              <span className="font-normal text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
                5 mins
              </span>
            </div>
          </span>
          <span className="pointer-events-auto relative inline-block">
            <span className="sr-only" id=":r2v:">
              Users completed
            </span>
            <div
              aria-labelledby=":r2v:"
              className="flex items-center gap-x-1.5"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-neutral-400 dark:text-neutral-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" />
              </svg>
              <span className="font-normal text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
                7645 completed
              </span>
            </div>
          </span>
        </section>
        <div className="flex flex-col gap-y-8">
          <div className="prose dark:prose-invert prose-sm">
            <p>
              <strong>Note:</strong> This is a short warm up question meant to
              help you familiarize with the coding workspace. Actual UI coding
              interview questions will be more complicated.
            </p>
            <h2>Requirements</h2>
            <p>
              Make the text within the button display the number of times the
              button has been clicked.
            </p>
          </div>
          <div className="hidden lg:block rounded-md p-4 text-center border-brand-light dark:border-brand-darkest border bg-brand-darker/10">
            <button
              type="button"
              className="inline-flex items-center justify-center h-8 px-3 gap-x-1 text-xs whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-200 bg-white dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 active:bg-neutral-200 dark:active:bg-neutral-800 focus-visible:outline-brand-dark dark:focus-visible:outline-brand disabled:border-neutral-300 dark:disabled:border-neutral-700 disabled:text-neutral-300 dark:disabled:text-neutral-700 disabled:bg-transparent disabled:cursor-not-allowed"
            >
              <div>See what you're building</div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="!h-4 !w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-neutral-900 dark:text-white text-base font-semibold">
              Companies
            </h1>
            <div className="flex items-center space-x-2 rounded border p-3 border-neutral-200 dark:border-neutral-800">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="h-8 w-8 text-neutral-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z" />
              </svg>
              <div className="grow space-y-1">
                <span className="block font-semibold text-neutral-900 dark:text-neutral-100 text-xs">
                  Premium Feature
                </span>
                <span className="block font-normal text-neutral-600 dark:text-neutral-400 text-xs">
                  Purchase premium to see companies which ask this question.
                </span>
              </div>
              <a
                className="transition-colors inline-flex items-center justify-center h-7 px-2 gap-x-1 text-xs whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-transparent text-white dark:text-neutral-950 bg-brand-dark dark:bg-brand hover:bg-brand-darker dark:hover:bg-brand-light active:bg-brand-darkest dark:active:bg-brand-lighter focus-visible:outline-brand-dark dark:focus-visible:outline-brand disabled:border-transparent disabled:text-white dark:disabled:text-neutral-700 disabled:bg-brand-lighter dark:disabled:bg-neutral-900 disabled:cursor-not-allowed"
                href="/pricing"
              >
                <div>View plans</div>
              </a>
            </div>
          </div>
          <div className="grid gap-y-4">
            <h1 className="text-neutral-900 dark:text-white font-semibold">
              Try these questions next
            </h1>
            <ul className="isolate divide-y overflow-hidden rounded-md border sm:grid border-neutral-200 dark:border-neutral-800 divide-neutral-200 dark:divide-neutral-800">
              <li className="focus-within:ring-brand group relative flex gap-x-6 p-3 focus-within:ring-2 focus-within:ring-inset hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <div className="flex grow items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex font-medium text-neutral-900 dark:text-neutral-100 text-xs items-center gap-x-2">
                      <a
                        className="transition-colors focus:outline-none"
                        href="/questions/user-interface/contact-form"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        Contact Form
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="pointer-events-auto relative inline-block">
                      <span className="sr-only" id=":r30:">
                        Difficulty
                      </span>
                      <div
                        aria-labelledby=":r30:"
                        className="flex items-center gap-x-1.5"
                      >
                        <span className="font-normal text-xs text-green">
                          Easy
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </li>
              <li className="focus-within:ring-brand group relative flex gap-x-6 p-3 focus-within:ring-2 focus-within:ring-inset hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <div className="flex grow items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex font-medium text-neutral-900 dark:text-neutral-100 text-xs items-center gap-x-2">
                      <a
                        className="transition-colors focus:outline-none"
                        href="/questions/javascript/flatten"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        Flatten
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="pointer-events-auto relative inline-block">
                      <span className="sr-only" id=":r31:">
                        Difficulty
                      </span>
                      <div
                        aria-labelledby=":r31:"
                        className="flex items-center gap-x-1.5"
                      >
                        <span className="font-normal text-xs text-yellow-500">
                          Medium
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </li>
              <li className="focus-within:ring-brand group relative flex gap-x-6 p-3 focus-within:ring-2 focus-within:ring-inset hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <div className="flex grow items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex font-medium text-neutral-900 dark:text-neutral-100 text-xs items-center gap-x-2">
                      <a
                        className="transition-colors focus:outline-none"
                        href="/questions/user-interface/todo-list"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        Todo List
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="pointer-events-auto relative inline-block">
                      <span className="sr-only" id=":r32:">
                        Difficulty
                      </span>
                      <div
                        aria-labelledby=":r32:"
                        className="flex items-center gap-x-1.5"
                      >
                        <span className="font-normal text-xs text-yellow-500">
                          Medium
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid gap-y-4">
            <h1 className="text-neutral-900 dark:text-white font-semibold">
              Similar Questions
            </h1>
            <ul className="isolate divide-y overflow-hidden rounded-md border sm:grid border-neutral-200 dark:border-neutral-800 divide-neutral-200 dark:divide-neutral-800">
              <li className="focus-within:ring-brand group relative flex gap-x-6 p-3 focus-within:ring-2 focus-within:ring-inset hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <div className="flex grow items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex font-medium text-neutral-900 dark:text-neutral-100 text-xs items-center gap-x-2">
                      <a
                        className="transition-colors focus:outline-none"
                        href="/questions/user-interface/todo-list"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        Todo List
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="pointer-events-auto relative inline-block">
                      <span className="sr-only" id=":r33:">
                        Difficulty
                      </span>
                      <div
                        aria-labelledby=":r33:"
                        className="flex items-center gap-x-1.5"
                      >
                        <span className="font-normal text-xs text-yellow-500">
                          Medium
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </li>
              <li className="focus-within:ring-brand group relative flex gap-x-6 p-3 focus-within:ring-2 focus-within:ring-inset hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <div className="flex grow items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex font-medium text-neutral-900 dark:text-neutral-100 text-xs items-center gap-x-2">
                      <a
                        className="transition-colors focus:outline-none"
                        href="/questions/user-interface/temperature-converter"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        Temperature Converter
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="pointer-events-auto relative inline-block">
                      <span className="sr-only" id=":r34:">
                        Difficulty
                      </span>
                      <div
                        aria-labelledby=":r34:"
                        className="flex items-center gap-x-1.5"
                      >
                        <span className="font-normal text-xs text-green">
                          Easy
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



   
        </div>


    )
}

export default Home