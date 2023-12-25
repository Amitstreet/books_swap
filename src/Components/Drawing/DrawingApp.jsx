// import React from 'react'

// function DrawingApp() {
//   return (
//     <div>DrawingApp</div>
//   )
// }

// export default DrawingApp


import { useState } from 'react';

const CodeFormatter = () => {
  const [inputText, setInputText] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const formatCode = () => {
    // Assuming the inputText contains the raw code snippet
    // You can implement your formatting logic here

    // For demonstration, replacing newlines and spaces for formatting
    const formatted = inputText.replace(/[\r\n]/g, '<br>').replace(/ /g, '&nbsp;');
    setFormattedText(formatted);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <textarea
        className="w-80 h-48 p-2 border border-gray-300 rounded"
        placeholder="Paste your code here..."
        value={inputText}
        onChange={handleInputChange}
      ></textarea>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={formatCode}
      >
        Format Code
      </button>
      {formattedText && (
        <div className="mt-4 p-2 border border-gray-300 rounded">
          <code
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: formattedText }}
          ></code>
        </div>
      )}
    </div>
  );
};

export default CodeFormatter;
