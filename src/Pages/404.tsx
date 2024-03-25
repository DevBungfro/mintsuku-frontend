import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col sm:p-0 p-7 justify-center items-center h-screen">
      <div>
        <h1 className="text-5xl text-white mb-4">404</h1>
        <p className="text-lg text-gray-300">Oops! It seems like this page doesn't exist.</p>
        <p className="text-lg text-gray-300">Maybe it's a secret page you haven't discovered yet?</p>
        <button
          onClick={goBack} 
          className="mt-4 px-4 py-2 bg-[#7e5af2] text-white rounded-md hover:bg-purple-600 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
