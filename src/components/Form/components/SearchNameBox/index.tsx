import React from "react";
import { IoIosSearch, IoIosPin } from "react-icons/io";
import useGlobalState from "../../../../hooks/useGlobal/useGlobalState";
import {
  SearchInput,
  SearchInputLeft,
  Input,
  SearchInputRight,
  SearchIcon,
} from "./styles";
const FullSearchInput = ({ data }) => {
  const { currentLanguage } = useGlobalState();
  return (
    <SearchInput>
      <SearchInputLeft>
        <IoIosPin />
      </SearchInputLeft>
      <Input
        placeholder={data.description && data.description[currentLanguage]}
      />
      <SearchInputRight>
        <IoIosSearch />
      </SearchInputRight>
    </SearchInput>
  );
};
export default FullSearchInput;
