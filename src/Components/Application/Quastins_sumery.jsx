import React from 'react'
import {Link} from 'react-router-dom'

function Quastins_sumery() {
    return (
        <>
            {/* Table Section */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Card */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                                {/* Header */}
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">

                                    <div>
                                        <div className="inline-flex gap-x-2">

                                        </div>
                                    </div>
                                </div>
                                {/* End Header */}
                                {/* Table */}
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-slate-800">
                                        <tr>



                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Problems
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Creater
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Status
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Rating
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Date and time
                                                    </span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <Link to="543">
                                                            <div className="grow items-center flex ml-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Print Z
                                                                </span>


                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                        Amit singh
                                                    </span>

                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        unsolved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-gray-500">1/5</span>
                                                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                            <div
                                                                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-500">
                                                        28 Dec, 12:12
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <a>
                                                            <div className="grow items-center flex ml-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Print Z
                                                                </span>


                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                        Amit singh
                                                    </span>

                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        unsolved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-gray-500">1/5</span>
                                                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                            <div
                                                                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-500">
                                                        28 Dec, 12:12
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <a>
                                                            <div className="grow items-center flex ml-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Print Z
                                                                </span>


                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                        Amit singh
                                                    </span>

                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        unsolved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-gray-500">1/5</span>
                                                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                            <div
                                                                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-500">
                                                        28 Dec, 12:12
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <a>
                                                            <div className="grow items-center flex ml-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Print Z
                                                                </span>


                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                        Amit singh
                                                    </span>

                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        unsolved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-gray-500">1/5</span>
                                                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                            <div
                                                                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-500">
                                                        28 Dec, 12:12
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <a>
                                                            <div className="grow items-center flex ml-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Print Z
                                                                </span>


                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                        Amit singh
                                                    </span>

                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        unsolved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-gray-500">1/5</span>
                                                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                            <div
                                                                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-500">
                                                        28 Dec, 12:12
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <a>
                                                            <div className="grow items-center flex ml-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Print Z
                                                                </span>


                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                        Amit singh
                                                    </span>

                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        unsolved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-gray-500">1/5</span>
                                                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                            <div
                                                                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-500">
                                                        28 Dec, 12:12
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <a>
                                                            <div className="grow items-center flex ml-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Print Z
                                                                </span>


                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                        Amit singh
                                                    </span>

                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        unsolved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-gray-500">1/5</span>
                                                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                            <div
                                                                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-500">
                                                        28 Dec, 12:12
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <a>
                                                            <div className="grow items-center flex ml-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Print Z
                                                                </span>


                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                        Amit singh
                                                    </span>

                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        unsolved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-gray-500">1/5</span>
                                                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                            <div
                                                                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-500">
                                                        28 Dec, 12:12
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <a>
                                                            <div className="grow items-center flex ml-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Print Z
                                                                </span>


                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                        Amit singh
                                                    </span>

                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        unsolved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-gray-500">1/5</span>
                                                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                            <div
                                                                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-500">
                                                        28 Dec, 12:12
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <a>
                                                            <div className="grow items-center flex ml-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Print Z
                                                                </span>


                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                        Amit singh
                                                    </span>

                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        unsolved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-gray-500">1/5</span>
                                                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                            <div
                                                                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-500">
                                                        28 Dec, 12:12
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <a>
                                                            <div className="grow items-center flex ml-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Print Z
                                                                </span>


                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                        Amit singh
                                                    </span>

                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        unsolved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <span className="text-xs text-gray-500">1/5</span>
                                                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                            <div
                                                                className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-500">
                                                        28 Dec, 12:12
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                                {/* End Table */}
                                {/* Footer */}

                                {/* End Footer */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Card */}
            </div>
            {/* End Table Section */}
        </>
    )
}

export default Quastins_sumery