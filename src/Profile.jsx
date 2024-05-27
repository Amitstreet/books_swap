import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from "react-redux";
import { getbook_user } from './api/book';
import Add_prod  from './Components/form/add_prod.jsx'
import { useNavigate } from 'react-router-dom';


function Profile() {
  const user = useSelector(state => state);
  const [editbook, seteditbook] = useState(null);
  let [book, setbook] = useState(null)
  let navigate = useNavigate();

  if(user.user.currentUser==null)
    {
        navigate('/login')
    }
  
  useEffect(() => {
    if(user.user.currentUser!=null)
        {
    const getres = async () => {
      let books = await getbook_user({ id: user.user.currentUser._id });
      setbook(books.book);
    }
    getres();
}
  }, [editbook])


  const editbooks = (e) => {
    let id = e.target.id;
    console.log(book)
    let editbookdetails = book.filter((ele) => {
      return ele._id == id;
    })    
    seteditbook(editbookdetails[0])
  }


  return (
    <div>
      <>
   
     { editbook != null ? <Add_prod editbook= {editbook} seteditbook={seteditbook}  /> :  user.user.currentUser && <body class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center min-h-screen p-4 transition-colors">
    <div class="absolute top-4 right-4">
        <button onclick="toggleDarkMode()" class="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
            Toggle Theme
        </button>
    </div>
    <div className="w-34 py-8 w-[calc(100%_-_265px)] ml-auto mr-2">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative">
            <div className="absolute top-4 right-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                    Edit
                </button>
            </div>
            <div className="flex items-center">
                <img
                    className="h-20 rounded-full mr-6"
                    src="https://via.placeholder.com/80"
                    alt="Profile Picture"
                />
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{user.user.currentUser.username}</h2>
                    <p className="text-gray-600 dark:text-gray-400">Student</p>
                    <div className="flex mt-2">
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 mx-2">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 mx-2">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.718 0-4.92 2.201-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.718-.666 1.561-.666 2.475 0 1.71.87 3.212 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 mx-2">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna
                    in gravida vehicula, nulla nunc bibendum velit, vel bibendum mi velit vel
                    urna.
                </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">{user.user.currentUser.email}</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">(123) 456-7890</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">Website</h3>
                    <p className="text-gray-600 dark:text-gray-400">johndoe.com</p>
                </div>
            </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Books</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {
                    book && book.map((ele) => {
                        return <div key={ele._id} className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                            <img
                                className="w-full h-48 object-cover"
                                src={ele.url}
                                alt="Book Cover"
                            />
                            <div className="p-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{ele.bookname}</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {ele.description}
                                </p>
                                <div className="flex justify-between">
                                    <button id={ele._id} onClick={editbooks} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    })
                }
                {(!book || book.length === 0) && (
                    <div className="col-span-full flex justify-center items-center h-48 bg-gray-100 dark:bg-gray-700 rounded-md w-full">
                        <p className="text-gray-900 dark:text-white text-2xl font-bold">There are no books added</p>
                    </div>
                )}
            </div>
        </div>
    </div>
</body>
}
      </>
    </div>
  )
}

export default Profile