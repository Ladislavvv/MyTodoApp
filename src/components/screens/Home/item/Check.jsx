import React from 'react';
import { BsCheck } from 'react-icons/bs';

function Check({ isCompleted }) {
  return (
    <div
      className={`transition-all border-2 rounded-lg w-6 h-6 border-pink-400 ${
        isCompleted ? 'bg-pink-400' : ''
      } mr-2 flex items-center justify-center cursor-pointer`}>
      {isCompleted && <BsCheck size={24} className="text-gray-900" />}
    </div>
  );
}

export default Check;
