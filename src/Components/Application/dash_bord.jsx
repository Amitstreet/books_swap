import React from 'react'
import Strek from '../Profile/Streak.jsx'

function dash_bord() {
    const contributions = [0, 5, 3];
    return (
        <div className='lg:pl-72 text-gray-900 uppercase dark:text-gray-100'>
   <div className="card-text h-full mt-[13px]" data-v-cda99232="">
  <div className="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
    <div className="bg-warning-500 rounded-md p-4  dark:bg-opacity-25 relative z-[1] bg-[#FEEEE9]">
      <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACpCAYAAAClK5afAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhdSURBVHgB7d1LbxvXGcbx94gizasYObZRF2i7KLrp94kXKVr0AsSAgxho6sDOqsyqQeu0gI06UICmRbpLvkSX/QTZBMgiCCLAUixbJEWaF03mvCTHvAwpknPhsfn/bWzKpEhYj95znxEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAJngixv65I8AGeZ5nvIO71dHjXQE2xPv8jYx8/P6eZHqZ0dcIJDbC+3ctL4+PSpLtGslVekZb7WG7DaTJ++xOSVpeQR/0Wm3z9qPG6N+okEiNV6vtyM9kT1r1Xem2Penkzsy7j1rjzyGQSIV38FZW+u2ydLoZKWf7kv3m1Nz4oj/9PAKJxGl/sVMvS6brP9rtypt/OTXGeGHPpQ+JxNgpHfnve8V5/cUwBBKJCPqLnWF/8XynYW4/fH7R6zICxEz7i/n2ayLng/7it9Wn5u5fe8u8lj4kYhX0F7P20eL+YhiabMRC+4uf3i1Lr39p8JX6mbn5yZmsiEAiMu0vXmtX/VF0RvuL167WzY1aR9ZAHxKReJ/XcuIdVWV3ZyfoL75dW6q/GIYKibV5B7Wi3zQX9cHuyXP5/b8aq/QXw7D9DCt7sWVsGMbmedP84dN61DBaVEisZKa/mO2e+oOXrsSEComleQ8eXJIrR/saxlylJ8dXT+IMo0WFxFKmt4zJrX8242iipxFILKTzi5/c2/NTqFPd2l989x8tSQiBxFx6xOD453vaRNspncaTRtxN9DTmIRFKlwCfmj2dX7T9xa93T82dj/qSMCokZiw6YpA0NlcgsMwRg6QRSKhljxgkjUBipSMGSaMPucXWOWKQNAK5pdY9YpA0pn22UJQjBkmjD7mVKlU9YmAr45v3n26qvxiGzRVbqT44WpDNG3l4u6LNtyMI5BbSsy77lVPp+831pVxOftGuuhJKBjVbbGJgoypn5mZt5YNZcSKQsIOcoh/Gwe7v/Upb3vhzk3lITM0LplutvNpv83KlVNJ+pR15f5V/Zmq18+VfP9xJXvVD9asPT2RNBNIRg6W7y2Xd6jWyRjAifYbp4wm6ln3x3seJ1/mfmUC+xPSHeb1VCTbA2qW7/UJLjtulF+FMuVqO7/YpmJb5zf3m3OdOhTHqLxCB3CBdQ24eDZrJqYo0s6xng3pYqKdWLf/+x4LkOsVFTXjcYbQI5AZo8yz7xaAqPu905MnrjbAfpvbtrv2oEDSjx1eb/vPakoKZJnzsvZMIo0UgUzRT9ZY8FqA//F9KUU7qef2CHQl/KWdpVEv9zF98UAre2+8+yKG0kwijRSBTopccGe8XrnFyb6JaDoLQSq1aDqeGmq1eJpPpF/v5zFmpWOjEPegikAkLH7R83Vh38+vM90tx3tB2NZ73iz/x/+a/t+leapvDuE8gEsgELRq0RP7e45PZKZwIDPqMppdtZ71CPmdaftfjPO4ZAAKZAB205H5cCpbk7KDlnQf1uKvYxMBCJTM9FDaAkevf5YNfiBhnAAhkjNYdtER+3+lqGWO/btFoemIyX//t/34o/xdpXyWBjIkOWh4fVbR5VvUzeeugldaacBLVcpmpnbg3aBDIiEIHLSlOYE98lrAKvWa1XHWeMa4NGgQyAr1gZ/eokMSgJdLnGp9iWuNzrTvpHTIttfIvA4Fcw8xGiA1v2Qqz7mR61BWYma7DihenIpAr2NSgJYpVJtPjXA6c3qAhv/7b2TK/sARySRP7BQdXjm2lOWiJQoN2+fuyHlewQqplEmvTy2zQmEYgL+DSoCWqmYAMq3tSGyX0PRds0AhDIOcYXKjzg4KLg5YoZvp4Pb9amnY2iTAG7xmyQWPe1BCBnMN7dG8/ykYI101M01gp7E7XCl3aKS16P47BzhNMMNef2evdvEphtPQo7GHliR6FTemohLYuo/ds+P+/9vitnaIaf44glHfwpyv2T3Pzo2NBrGYGWWNNOBUSqbOV2Nx+eBpcQUPqRW9YHAkkNmZwt9j6M23ChwgkNkoXFR7nn40ec/UzbNz4YIoKCacQSDiFQMIp9CERiS4LPrxdkddLmTiO5VIhsTa9F+LH77+mE9x25eV6veyvvJSjXPyUQGItesT35Kcv7p19alq6AcVuoLBLgnq5mNURSKzENtHeg3f29EZLlr23ze9qT81795v2hu7BOrVUqnrEY0WsZc/BWvasidsV22p47Wrd3Kh1Zp4X4VguFRJLmWmi/WoYFkZrYifRoG95WbeeLYEKOQcVciAYRY925qxw+7mZM0gLLjs4QoXEXBOjaNtE71dOV7kXot1DqlffPfy+MXULkvy81xBIhFqlib6Iqf2nrRsobIUcTQ99dqekFXT6uYJQ29pkD84S3dsLDrXFfIfYi44xUCER0LlD20TbMNomenh8Q2I0c4zBDnjGpocIJJQ20famnHqWaLerTXRCF0DQHeO37K1DZneMs5a95YImulNPpIlexE4P+VW5q5elGaJCbrE0muiLjHaM++VRT3USyC2VZhN9kfFBDU32ltlkE70MArlFhk10WTK9zPCCWf5Et1tXbqPJ3hIuNdGLUCFfca430dMI5KvOjqIdbqKn0WS/6kYXzXK0iZ5GILfEy3KBVQIJpxBIOIVAwikEEk4hkHAKgYRTCCScQiDhFAIJpxBIOIVAwikEEk4hkHAKgYRTCCScQiDhFAIJpxBIOIVAwikEEk4hkHAKgYRTCCScQiDhFAIJpxBIOIVAwikEEk4hkHAKgYRTCCScQiDhFAIJpxBIOIVAwikEEk4hkHAKgYRTCCScQiDhFAIJpxBIOIVAwincDXaefrYvVUHKCOQc5taHJ4LU0WTDKQQSTiGQcAqBBJAezxPj1Sg8APDy+wE+jk9r5AXJLAAAAABJRU5ErkJggg=="
          alt=""
          draggable="false"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="block mb-6 text-sm text-slate-900 dark:text-white font-medium">
        Solved Problems
      </span>
      <span className="block mb- text-2xl text-slate-900 dark:text-white font-medium mb-6">
        32
      </span>
      <div className="flex space-x-2 rtl:space-x-reverse">
        <div className="flex-none text-xl text-primary-500">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              className="iconify iconify--heroicons"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </span>
        </div>
     
      </div>
    </div>
    <div className="bg-info-500 rounded-md p-4  dark:bg-opacity-25 bg-[#DDFBFE] relative z-[1]">
      <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
        <img
          src="data:image/png;base64,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"
          alt=""
          draggable="false"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="block mb-6 text-sm text-slate-900 dark:text-white font-medium">
        unsolved Problem{" "}
      </span>
      <span className="block mb- text-2xl text-slate-900 dark:text-white font-medium mb-6">
        900
      </span>
      <div className="flex space-x-2 rtl:space-x-reverse">
        <div className="flex-none text-xl text-primary-500">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              className="iconify iconify--heroicons"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </span>
        </div>
        <div className="flex-1 text-sm">
          <span className="block mb-[2px] text-primary-500">8.67%</span>
          <span className="block mb-1 text-slate-600 dark:text-slate-300">
            From last week
          </span>
        </div>
      </div>
    </div>
    <div className="bg-primary-500 rounded-md p-4 bg-[#E5DFFE] dark:bg-opacity-25 relative z-[1]">
      <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
        <img
          src="data:image/png;base64,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"
          alt=""
          draggable="false"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="block mb-6 text-sm text-slate-900 dark:text-white font-medium">
        attempoted Problem
      </span>
      <span className="block mb- text-2xl text-slate-900 dark:text-white font-medium mb-6">
        15%
      </span>
      <div className="flex space-x-2 rtl:space-x-reverse">
        <div className="flex-none text-xl text-danger-500">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              className="iconify iconify--heroicons"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
              />
            </svg>
          </span>
        </div>
        <div className="flex-1 text-sm">
          <span className="block mb-[2px] text-danger-500">1.67%</span>
          <span className="block mb-1 text-slate-600 dark:text-slate-300">
            From last week
          </span>
        </div>
      </div>
    </div>
    <div className="bg-success-500 rounded-md p-4 bg-[#DEF6EF] dark:bg-opacity-25 relative z-[1]">
      <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
        <img
          src="data:image/png;base64,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"
          alt=""
          draggable="false"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="block mb-6 text-sm text-slate-900 dark:text-white font-medium">
        beginer
      </span>
      <span className="block mb- text-2xl text-slate-900 dark:text-white font-medium mb-6">
        654
      </span>
      <div className="flex space-x-2 rtl:space-x-reverse">
        <div className="flex-none text-xl text-primary-500">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              className="iconify iconify--heroicons"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </span>
        </div>
        <div className="flex-1 text-sm">
          <span className="block mb-[2px] text-primary-500">11.67%</span>
          <span className="block mb-1 text-slate-600 dark:text-slate-300">
            From last week
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

       

              <div className='flex'>
               <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700 mr-[18px] mt-3">
  <div className="flex items-center gap-x-4">
    <img
      className="rounded-full w-20 h-20"
      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
      alt="Image Description"
    />
    <div className="grow">
      <h3 className="font-medium text-gray-800 dark:text-gray-200">
        Delia Pawelke
      </h3>
      <p className="text-xs uppercase text-gray-500">Front-end Developer</p>
    </div>
  </div>
  <p className="mt-3 text-gray-500">
    I am an ambitious workaholic, but apart from that, pretty simple person.
  </p>
  {/* Social Brands */}
  <div className="mt-3 space-x-1">
    <a
      className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href="#"
    >
      <svg
        className="flex-shrink-0 w-3.5 h-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
      </svg>
    </a>
    <a
      className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href="#"
    >
      <svg
        className="flex-shrink-0 w-3.5 h-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    </a>
    <a
      className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href="#"
    >
      <svg
        className="flex-shrink-0 w-3.5 h-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
      </svg>
    </a>
  </div>
  {/* End Social Brands */}
               </div>



                {/* {--qus_solved} */}
                <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700 mr-[18px] mt-3">
                    <div className="bg-layer-1 dark:bg-dark-layer-1 rounded-lg lc-xl:h-[186px] min-h-[186px] w-full pb-3 pt-4"
                        style={{
                        boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 6px, rgba(0, 0, 0, 0.02) 0px 4px 8px, rgba(0, 0, 0, 0.02) 0px 6px 12px"
                        }}>
                        <div className="px-[13px] text-xs font-medium text-label-3 dark:text-dark-label-3">
                            Solved Problems
                        </div>
                        <div className="lc-xl:mx-8 mx-3 flex items-center">
                            <div className="mr-8 mt-6 flex min-w-[100px] justify-center">
                                <div className="shrink-1 z-base relative max-h-[100px] max-w-[100px]">
                                    <svg className="h-full w-full origin-center -rotate-90 transform" viewBox="0 0 100 100">
                                        <circle fill="none" cx="50px" cy="50px" r={46} strokeWidth={3} strokeLinecap="round"
                                            stroke="currentColor" className="text-gray-4 dark:text-dark-gray-4 w-[100px]" />
                                        <circle fill="none" cx="50px" cy="50px" r={46} strokeWidth={5} strokeLinecap="round"
                                            stroke="currentColor"
                                            className="cursor-pointer text-brand-orange dark:text-dark-brand-orange drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                                            strokeDasharray="16.002152053691823 273.02437207656914" strokeDashoffset={0}
                                            data-difficulty="ALL" />
                                    </svg>
                                    <div
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                                        <div>
                                            <div className="text-[24px] font-medium text-label-1 dark:text-dark-label-1">
                                                162
                                            </div>
                                            <div className="whitespace-nowrap text-xs text-label-3 dark:text-dark-label-3">
                                                Solved
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lc-xl:max-w-[228px] flex w-full flex-col space-y-4">
                                <div className="space-y-2">
                                    <div className="flex w-full items-end text-xs">
                                        <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                                            Easy
                                        </div>
                                        <div className="flex flex-1 items-center">
                                            <span
                                                className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                                                40
                                            </span>
                                            <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                                                /743
                                            </span>
                                        </div>
                                        
    
                                    </div>
                                    <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                                        <div className="absolute h-full w-full bg-green-1 dark:bg-dark-green-1" />
                                        <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-olive dark:bg-dark-olive"
                                            style={{ width: "5.38358%" }} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex w-full items-end text-xs">
                                        <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                                            Medium
                                        </div>
                                        <div className="flex flex-1 items-center">
                                            <span
                                                className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                                                98
                                            </span>
                                            <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                                                /1542
                                            </span>
                                        </div>
    
                                    </div>
                                    <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                                        <div className="absolute h-full w-full bg-yellow-1 dark:bg-dark-yellow-1" />
                                        <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-yellow dark:bg-dark-yellow"
                                            style={{ width: "6.35538%" }} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex w-full items-end text-xs">
                                        <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                                            Hard
                                        </div>
                                        <div className="flex flex-1 items-center">
                                            <span
                                                className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                                                24
                                            </span>
                                            <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                                                /641
                                            </span>
                                        </div>
                                        <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                                            <span className="space-x-1.5">
                                                <span>Beats</span>
                                                <span className="font-medium text-label-2 dark:text-dark-label-2">
                                                    80.9%
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                                        <div className="absolute h-full w-full bg-red-1 dark:bg-dark-red-1" />
                                        <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-red-s dark:bg-dark-red-s"
                                            style={{ width: "3.74415%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* {--qus_end} */}

                 <div className="flex flex-col rounded-xl p-4 md:p-6  border border-gray-200 dark:bg-slate-900 dark:border-gray-700 mr-[18px] mt-3">

    <div className="pointer-events-auto w-[21rem] rounded-lg  p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5  ring-1 ring-slate-700/10">
    <div className="flex">
    <div class="mt-4 flex flex-col space-y-3"><div class="flex items-center justify-between text-xs text-label-1 dark:text-dark-label-1"><div class="text-xs"><span color="text-label-2 dark:text-dark-label-2" class="inline-flex items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3 notranslate">Java</span></div><div class="flex"><span class="text-xs font-medium text-label-1 dark:text-dark-label-1">155</span> &nbsp;<span class="text-label-3 dark:text-dark-label-3">problems solved</span></div></div><div class="flex items-center justify-between text-xs text-label-1 dark:text-dark-label-1"><div class="text-xs"><span color="text-label-2 dark:text-dark-label-2" class="inline-flex items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3 notranslate">JavaScript</span></div><div class="flex"><span class="text-xs font-medium text-label-1 dark:text-dark-label-1">9</span> &nbsp;<span class="text-label-3 dark:text-dark-label-3">problems solved</span></div></div><div class="flex items-center justify-between text-xs text-label-1 dark:text-dark-label-1"><div class="text-xs"><span color="text-label-2 dark:text-dark-label-2" class="inline-flex items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 bg-fill-3 dark:bg-dark-fill-3 notranslate">C++</span></div><div class="flex"><span class="text-xs font-medium text-label-1 dark:text-dark-label-1">4</span> &nbsp;<span class="text-label-3 dark:text-dark-label-3">problems solved</span></div></div></div>
    </div>
    


  </div>
</div>
 

 

                  


                 </div>


 <div className='flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700 mr-[18px] mt-3'>
 <Strek />

    </div>                
  

               


                 


    </div>
    )
}

export default dash_bord