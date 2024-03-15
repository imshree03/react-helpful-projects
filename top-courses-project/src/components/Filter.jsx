import React from "react";

function Filter({ filterData, setCategory }) {
  const handleClick = title => {
    setCategory(title);
  };

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map(courseCategory => {
        return (
          <button
            key={courseCategory.id}
            className={`text-lg px-2 py-1 rounded-md font-medium 
          text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300`}
            onClick={() => handleClick(courseCategory.title)}>
            {courseCategory.title}
          </button>
        );
      })}
    </div>
  );
}

// ${
//   category === data.title
//     ? "bg-opacity-60 border-white"
//     : "bg-opacity-40 border-transparent"
// }

export default Filter;
