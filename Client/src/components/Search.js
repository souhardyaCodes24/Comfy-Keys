import React, { useContext } from 'react';

import { RiSearchLine } from 'react-icons/ri';

const Search = () => {
  const handleClick = () => {
    // Handle search logic here
  };

  return (
    <div className="px-4 py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur lg:rounded-lg">
      <div className="flex-1">
      <div className="flex w-full">
      <input
        type="text"
        placeholder="Search for houses..."
       
        className="flex-grow border rounded-md p-2 focus:outline-none"
      />
      </div>
      </div>
     
     
      <button
        onClick={handleClick}
        className="bg-violet-700 hover:bg-violet-800 transition w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-2xl"
      >
        <RiSearchLine />
      </button>
    </div>
  );
};

export default Search;