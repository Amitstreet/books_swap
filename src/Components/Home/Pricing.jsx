import React from 'react'

function Pricing() {
  return (
    <>
  {/* Pricing */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
        Find the right plan for your team
      </h2>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        Pay as you go service, cancel anytime.
      </p>
    </div>
    {/* End Title */}
    {/* Grid */}
    <div className="mt-12 relative before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,#cbd5e1,transparent)] dark:before:bg-[radial-gradient(closest-side,#334155,transparent)]">
      <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
        {/* Card */}
        <div className="flex flex-col h-full text-center">
          <div className="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
            <h4 className="font-medium text-lg text-slate-900 dark:text-gray-200">
              Free
            </h4>
          </div>
          <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
            <span className="mt-7 font-bold text-5xl text-slate-900 dark:text-gray-200">
              Free
            </span>
          </div>
          <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900">
            <ul className="space-y-2.5 text-center text-sm">
              <li className="text-slate-900 dark:text-gray-400">1 user</li>
              <li className="text-slate-900 dark:text-gray-400">
                Plan features
              </li>
              <li className="text-slate-900 dark:text-gray-400">
                Product support
              </li>
            </ul>
          </div>
          <div className="bg-white py-8 px-8 dark:bg-slate-900">
            <a
              className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700"
              href="#"
            >
              Sign up
            </a>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col h-full text-center">
          <div className="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
            <h4 className="font-medium text-lg text-slate-900 dark:text-gray-200">
              Startup
            </h4>
          </div>
          <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
            <span className="mt-7 font-bold text-5xl text-slate-900 dark:text-gray-200">
              <span className="font-bold text-2xl -mr-2">$</span>
              39
            </span>
          </div>
          <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900">
            <ul className="space-y-2.5 text-center text-sm">
              <li className="text-slate-900 dark:text-gray-400">2 users</li>
              <li className="text-slate-900 dark:text-gray-400">
                Plan features
              </li>
              <li className="text-slate-900 dark:text-gray-400">
                Product support
              </li>
            </ul>
          </div>
          <div className="bg-white py-8 px-8 dark:bg-slate-900">
            <a
              className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700"
              href="#"
            >
              Sign up
            </a>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col h-full text-center">
          <div className="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
            <h4 className="font-medium text-lg text-slate-900 dark:text-gray-200">
              Team
            </h4>
          </div>
          <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
            <span className="mt-7 font-bold text-5xl text-slate-900 dark:text-gray-200">
              <span className="font-bold text-2xl -mr-2">$</span>
              89
            </span>
          </div>
          <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900">
            <ul className="space-y-2.5 text-center text-sm">
              <li className="text-slate-900 dark:text-gray-400">5 users</li>
              <li className="text-slate-900 dark:text-gray-400">
                Plan features
              </li>
              <li className="text-slate-900 dark:text-gray-400">
                Product support
              </li>
            </ul>
          </div>
          <div className="bg-white py-8 px-8 dark:bg-slate-900">
            <a
              className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700"
              href="#"
            >
              Sign up
            </a>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col h-full text-center">
          <div className="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
            <h4 className="font-medium text-lg text-slate-900 dark:text-gray-200">
              Enterprise
            </h4>
          </div>
          <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
            <span className="mt-7 font-bold text-5xl text-slate-900 dark:text-gray-200">
              <span className="font-bold text-2xl -mr-2">$</span>
              149
            </span>
          </div>
          <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900">
            <ul className="space-y-2.5 text-center text-sm">
              <li className="text-slate-900 dark:text-gray-400">10 users</li>
              <li className="text-slate-900 dark:text-gray-400">
                Plan features
              </li>
              <li className="text-slate-900 dark:text-gray-400">
                Product support
              </li>
            </ul>
          </div>
          <div className="bg-white py-8 px-8 dark:bg-slate-900">
            <a
              className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700"
              href="#"
            >
              Sign up
            </a>
          </div>
        </div>
        {/* End Card */}
      </div>
    </div>
    {/* End Grid */}
    {/* Comparison table */}
    <div className="mt-20">
      <div
        id="hs-pricing-comparision-content"
        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-pricing-comparision"
      >
        {/* xs to lg */}
        <div className="space-y-24 lg:hidden">
          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-slate-900">
                Free
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-slate-900">
                Startup
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-slate-900">
                Team
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pr-4">
                    {/* Minus */}
                    <svg
                      className="ml-auto h-7 w-7 text-gray-400"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* Minus */}
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-slate-900">
                Enterprise
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-slate-900 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pr-4">
                    {/* Check */}
                    <svg
                      className="ml-auto h-7 w-7 text-blue-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* End Solid Check */}
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        {/* End xs to lg */}
        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="w-full h-px">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className="py-4 pl-6 pr-6 text-sm font-medium text-slate-900 text-left"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                <th
                  className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-slate-900 text-center"
                  scope="col"
                >
                  Free
                </th>
                <th
                  className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-slate-900 text-center"
                  scope="col"
                >
                  Startup
                </th>
                <th
                  className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-slate-900 text-center"
                  scope="col"
                >
                  Team
                </th>
                <th
                  className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-slate-900 text-center"
                  scope="col"
                >
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <tr>
                <th
                  className="py-3 pl-6 bg-gray-50 font-bold text-slate-900 text-left dark:bg-slate-800 dark:text-white"
                  colSpan={5}
                  scope="colgroup"
                >
                  Financial data
                </th>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Open/High/Low/Close
                </th>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Price-volume difference indicator
                </th>
                <td className="py-5 px-6">
                  {/* Minus */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Minus */}
                  <span className="sr-only">Not included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-3 pl-6 bg-gray-50 font-bold text-slate-900 text-left dark:bg-slate-800 dark:text-white"
                  colSpan={5}
                  scope="colgroup"
                >
                  On-chain data
                </th>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Network growth
                </th>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Average token age consumed
                </th>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Not included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Exchange flow
                </th>
                <td className="py-5 px-6">
                  {/* Minus */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Minus */}
                  <span className="sr-only">Not included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Total ERC20 exchange funds flow
                </th>
                <td className="py-5 px-6">
                  {/* Minus */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Minus */}
                  <span className="sr-only">Not included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Transaction volume
                </th>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Total circulation (beta)
                </th>
                <td className="py-5 px-6">
                  {/* Minus */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Minus */}
                  <span className="sr-only">Not included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Velocity of tokens (beta)
                </th>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Not included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  ETH gas used
                </th>
                <td className="py-5 px-6">
                  {/* Minus */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Minus */}
                  <span className="sr-only">Not included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-3 pl-6 bg-gray-50 font-bold text-slate-900 text-left dark:bg-slate-800 dark:text-white"
                  colSpan={5}
                  scope="colgroup"
                >
                  Social data
                </th>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Dev activity
                </th>
                <td className="py-5 px-6">
                  {/* Minus */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Minus */}
                  <span className="sr-only">Included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Topic search
                </th>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Relative social dominance
                </th>
                <td className="py-5 px-6">
                  {/* Minus */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Minus */}
                  <span className="sr-only">Included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Minus */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Minus */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Minus */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Minus */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Minus */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Minus */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400"
                  scope="row"
                >
                  Relative social dominance
                </th>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Free</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Startup</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Team</span>
                </td>
                <td className="py-5 px-6">
                  {/* Check */}
                  <svg
                    className="mx-auto h-7 w-7 text-blue-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Included in Enterprise</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* End lg+ */}
      </div>
      <div className="text-center mt-12">
        <button
          type="button"
          className="hs-collapse-toggle inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-gray-600 hover:text-slate-900 font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-slate-900 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:shadow-slate-700/[.7] dark:focus:ring-gray-700 dark:focus:ring-offset-slate-900"
          id="hs-pricing-comparision"
          data-hs-collapse="#hs-pricing-comparision-content"
        >
          <span className="hs-collapse-open:hidden block">
            View pricing comparision
          </span>
          <span className="hs-collapse-open:block hidden">
            Hide pricing comparision
          </span>
          <svg
            className="hs-collapse-open:rotate-180 w-2.5 h-2.5"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
    {/* End Comparison table */}
  </div>
  {/* End Pricing */}
</>

  )
}

export default Pricing