import React, { useEffect, useState } from 'react';
import { getbook } from './api/book';
import { serch, cat } from './api/filter';
import useDebounce from './hook/useDebounce';

function Books() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(''); // Example filter
  const debouncedSearchTerm = useDebounce(searchTerm, 100); // Debounce for 100ms
  const [loading, setLoading] = useState(true); // Loading state


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getbook();
        setBooks(res.books);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);



  useEffect(() => {
    const searchBooks = async () => {
      setLoading(true);
      try {
        let key = debouncedSearchTerm;
        if (key) {
          let data = await serch({ key });
          setLoading(false)
          setBooks(data);
        } else {
          const res = await getbook();
          setLoading(false)
          setBooks(res.books);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    searchBooks();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const filterBooksByCategory = async () => {
      setLoading(true);
      try {
        if (selectedGenre) {
          let data = await cat({ genre: selectedGenre });
          setBooks(data);
        } else {
          const res = await getbook();
          setBooks(res.books);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    filterBooksByCategory();
  }, [selectedGenre]);


 
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
      <div className="w-64 p-4 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 mr-8">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-300">Filters</h2>
        <div className="mt-4">
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700 dark:text-neutral-400">Genre</label>
          <select
            id="genre"
            name="genre"
            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
            value={selectedGenre}
            onChange={e => setSelectedGenre(e.target.value)}
          >
            <option value="">All</option>
            <option value="fiction">Story</option>
            <option value="non-fiction">Poetry</option>
            <option value="Novel">Novel</option>
            <option value="history">Study</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
      </div>
      <div className="flex-grow max-w-4xl">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full p-3 rounded-md border border-gray-300 dark:border-neutral-700 shadow-sm"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 0 }).map((_, index) => <Shimmer key={index} />)
          ) :books.length > 0 ? (
            books.map((ele) => (
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
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 dark:text-neutral-400">
              No books available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Books;
