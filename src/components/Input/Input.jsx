import React from "react";
import InputBox from "./InputBox";
import InputSuggest from "./InputSuggest";

function Input({
  handleSearch,
  placeholder,
  showSuggest,
  filteredList,
  selectBrand,
  searchWord,
}) {
  return (
    <div className="w-9/12">
      <InputBox
        handleSearch={handleSearch}
        placeholder={placeholder}
        searchWord={searchWord}
      />
      {showSuggest && (
        <InputSuggest filteredList={filteredList} selectBrand={selectBrand} />
      )}
    </div>
  );
}

export default Input;
