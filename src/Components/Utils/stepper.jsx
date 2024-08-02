import React from 'react';

const Stepper = ({ currentStep, nextStep, prevStep } ) => {

  return (
    <div className="container ml-[105px] mx-auto p-6">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl">
          {/* Stepper Container */}
          <div className="flex items-center justify-between">
            {/* Step 1 */}
            <div className="relative flex-1">
              <div className="flex items-center">
                <div className={`w-10 h-10 flex items-center justify-center ml-[-41px] ${currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'} rounded-full`}>
                  1
                </div>
                <div className="ml-4 text-sm font-medium text-gray-700 mt-7 dark:text-white">Image upload</div>
              </div>
              <div className={`absolute top-5 left-0 w-full h-1 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
            </div>
            {/* Step 2 */}
            <div className="relative flex-1">
              <div className="flex items-center">
                <div className={`w-10 h-10 flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'} rounded-full`}>
                  2
                </div>
                <div className="ml-4 text-sm  font-medium text-gray-700 mt-7 dark:text-white"> Book upload</div>
              </div>
              <div className={`absolute top-5 left-0 w-full h-1 ml-[35px] ${currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
            </div>
            {/* Step 3 */}
            <div className="relative flex-1">
              <div className="flex items-center">
                <div className={`w-10 h-10 flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'} rounded-full`}>
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Stepper;
