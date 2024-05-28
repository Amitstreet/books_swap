import React, { useEffect, useState } from 'react';
import { getbook } from './api/book';

function Books() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getbook();
        setBook(res.books);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBooks();
  }, []);

  const Shimmer = () => (
    <div className="animate-pulse flex flex-col h-full bg-gray-200 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-sm rounded-xl p-4">
      <div className="h-52 bg-gray-300 dark:bg-neutral-700 rounded-t-xl mb-4"></div>
      <div className="h-6 bg-gray-300 dark:bg-neutral-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded mb-2"></div>
      <div className="mt-auto flex border-t border-gray-300 dark:border-neutral-700 divide-x divide-gray-300 dark:divide-neutral-700">
        <div className="w-full py-3 bg-gray-300 dark:bg-neutral-700"></div>
        <div className="w-full py-3 bg-gray-300 dark:bg-neutral-700"></div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center mt-14 mx-auto w-full max-w-screen-xl px-4">
      <div className="Filter w-72 mx-4">
        <ul className="flex flex-col">
          {['Novel', 'Adventure', 'Romance', 'Study', 'Poetry'].map((genre) => (
            <li key={genre} className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 mt-2 first:rounded-t-lg last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
              {genre}
            </li>
          ))}
        </ul>
        <div className="relative mb-6 mt-4">
          <span className="inline-flex items-center mb-3 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">Price Range</span>
          <input type="range" className="block w-full bg-gradient-to-r from-blue-400 to-blue-600 appearance-none rounded h-3 focus:outline-none overflow-hidden" min="0" max="1000" />
          <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Min (0)</span>
            <span>Max (1000)</span>
          </div>
        </div>
        <div className="relative mb-6">
          <span className="inline-flex items-center mb-3 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">Nearest Range</span>
          <input type="range" className="block w-full bg-gradient-to-r from-blue-400 to-blue-600 appearance-none rounded h-3 focus:outline-none overflow-hidden" min="0" max="1000" />
          <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Min (0)</span>
            <span>Max (1000)</span>
          </div>
        </div>
        <ul className="flex flex-col mt-4">
          {['Novel', 'Adventure', 'Romance', 'Study', 'Poetry'].map((genre) => (
            <li key={genre} className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 mt-2 first:rounded-t-lg last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
              {genre}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow max-w-4xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {book ? book.map((ele) => (
            <div key={ele.id} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl overflow-hidden">
                <img className="w-full h-52 object-cover object-center rounded-t-xl" src={ele.url} alt="Book cover" />
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                  {ele.bookname}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                  {ele.writer}
                </h3>
                <p className="mt-3 text-gray-500 dark:text-neutral-500">
                  {ele.description}
                </p>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
                  View Profile
                </a>
                <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
                  Contact
                </a>
              </div>
            </div>
          )) : Array.from({ length: 6 }).map((_, index) => <Shimmer key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default Books;
