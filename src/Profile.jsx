import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { getbook_user,delate_book  } from './api/book';
import Add_prod from './Components/form/add_prod.jsx';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const user = useSelector(state => state.user.currentUser);
  const [editbook, seteditbook] = useState(null);
  const [book, setbook] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [delbook,delatebook]= useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      const fetchBooks = async () => {
        let books = await getbook_user({ id: user._id });
        setbook(books.book);
        setLoading(false);
      }
      fetchBooks();
    }
  }, [user, editbook, navigate]);

  const editbooks = (e) => {
    const id = e.target.id;
    const editbookdetails = book.filter(ele => ele._id === id);    
    seteditbook(editbookdetails[0]);
  }

  const delate = async (e)=>{
    const id = e.target.id;
       let data=await delate_book({"id":id});
        delatebook(true);
  }

  if (!user) {
    return null; // Optionally, you can render a loading state or a message here.
  }

  return (
    <div>
      {editbook != null ? (
        <Add_prod editbook={editbook} seteditbook={seteditbook} />
      ) : (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center min-h-screen p-4 transition-colors">
          <div className="absolute top-4 right-4">
            <button onClick={() => toggleDarkMode()} className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
              Toggle Theme
            </button>
          </div>
          <div className="w-34 py-8 w-[calc(100%_-_265px)] ml-auto mr-2 max-h-[102rem] h-[56rem]">
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
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{user.username}</h2>
                  <p className="text-gray-600 dark:text-gray-400">Student</p>
                  <div className="flex mt-2">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 mx-2">
                      {/* SVG Icons here */}
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
                  <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8 book-container">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Books</h3>
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="shimmer-wrapper shimmer-card"></div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {book && book.map((ele) => (
                    <div key={ele._id} className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
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
                          <button id={ele._id}  onClick= {delate} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {(!book || book.length === 0) && (
                    <div className="col-span-full flex justify-center items-center h-48 bg-gray-100 dark:bg-gray-700 rounded-md w-full">
                      <p className="text-gray-900 dark:text-white text-2xl font-bold">There are no books added</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
