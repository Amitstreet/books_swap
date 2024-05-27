import { useState } from 'react';

const useStepper = (initialStep = 1, steps = 3) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const resetStep = () => {
    setCurrentStep(initialStep);
  };

  
  return {
    currentStep,
    nextStep,
    prevStep,
    resetStep,
  };
};

export default useStepper;
