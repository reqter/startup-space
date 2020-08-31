import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { SearchInput, Input, SearchInputRight } from "./styles";
const FullSearchInput = ({ placeholder, onSearchClicked }) => {
  const [value, setValue] = useState("");
  function handleKeyDown(e: React.KeyboardEvent): void {
    const key = e.which || e.key;
    if (key === 13) onSearchClicked(value);
  }

  function handleChanged(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  function handleClickedSearchIcon(e: React.MouseEvent) {
    if (onSearchClicked) {
      onSearchClicked(value);
    }
  }
  return (
    <SearchInput>
      <Input
        value={value}
        onChange={handleChanged}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
      <SearchInputRight onClick={handleClickedSearchIcon}>
        <IoIosSearch />
      </SearchInputRight>
    </SearchInput>
  );
};
export default FullSearchInput;
