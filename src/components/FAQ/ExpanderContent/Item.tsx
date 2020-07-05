import useObjectPropsValue from "hooks/useObjectPropsValue";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ExpanderItemContainer, Top, Title, Description } from "./styles";

const ExpanderItem = ({ item }) => {
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const [isOpen, toggleExpander] = useState(false);
  function handleClick() {
    toggleExpander((prev) => !prev);
  }
  return (
    <ExpanderItemContainer>
      <Top onClick={handleClick}>
        <Title>{getValue(item, "name")}</Title>
        {!isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </Top>
      {isOpen ? (
        <Description>{getValue(item, "description")}</Description>
      ) : null}
    </ExpanderItemContainer>
  );
};

export default ExpanderItem;
