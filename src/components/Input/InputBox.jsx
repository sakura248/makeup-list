import React from "react";

function InputBox({ handleSearch, placeholder, searchWord }) {
  return (
    <input
      className="my-6 w-full py-3 px-5 text-lg border-2 border-blue-600"
      type="text"
      onChange={handleSearch}
      placeholder={placeholder}
      value={searchWord}
    />
  );
}

export default InputBox;
