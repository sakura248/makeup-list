import React from "react";

function SuggestList({ filteredList, selectBrand }) {
  return (
    <ul className="mb-3 bg-gray-200 border-4 border-r-gray-400 border-b-gray-400 border-t-gray-50 border-l-gray-50">
      {filteredList.length > 0 ? (
        filteredList.map((item) => (
          <li className="m-1 hover:bg-blue-800 hover:text-white">
            <button
              onClick={selectBrand}
              name={item}
              className="w-full p-3  text-left text-lg"
            >
              {item}
            </button>
          </li>
        ))
      ) : (
        <li className="m-1 hover:bg-blue-800 hover:text-white">No result!</li>
      )}
    </ul>
  );
}

export default SuggestList;
