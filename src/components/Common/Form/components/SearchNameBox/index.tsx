import React from "react";
import { IoIosSearch, IoIosPin } from "react-icons/io";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import {
  SearchInput,
  SearchInputLeft,
  Input,
  SearchInputRight,
  SearchIcon,
} from "./styles";
const FullSearchInput = ({
  data,
  onChange,
  isBlack,
  initValue,
  onSearchClicked,
}) => {
  const inputRef = React.useRef(null);
  const { currentLanguage } = useGlobalState();
  function handleKeyDown(e: React.KeyboardEvent): any {
    const key = e.which || e.key;
    if (key === 13) onSearchClicked();
  }
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <SearchInput>
      <SearchInputLeft>
        <IoIosPin />
      </SearchInputLeft>
      <Input
        placeholder={data.description && data.description[currentLanguage]}
        onChange={onChange}
        defaultValue={initValue}
        onKeyDown={handleKeyDown}
        isBlack={isBlack}
        ref={inputRef}
      />
      <SearchInputRight onClick={onSearchClicked}>
        <IoIosSearch />
      </SearchInputRight>
    </SearchInput>
  );
};
export default FullSearchInput;
