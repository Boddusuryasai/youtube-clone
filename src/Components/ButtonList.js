import React from 'react';

const buttonNames = [
  "All",
  "javascript",
  "Cricket",
  "Gaming",
  "Sports",
  "Entertainment",
  "Music",
  "Comedy",
  "Programming",
  "Live"
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap  gap-2 mt-3">
      {buttonNames.map((name,index) => (
        <button key={name}className={`px-4 py-2 rounded-md ${index === 0 ? 'bg-black text-white' : 'bg-gray-100'}`}>{name}</button>
      ))}
    </div>
  );
}

export default ButtonList;
