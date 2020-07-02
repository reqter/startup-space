import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ExpanderItemConatiner, Top, Title, Description } from "./styles";

const ExpanderItem = ({}) => {
  const [isOpen, toggleExpander] = useState(false);
  function handleClick() {
    toggleExpander((prev) => !prev);
  }
  return (
    <ExpanderItemConatiner>
      <Top onClick={handleClick}>
        <Title>In which cities do you offer your services?</Title>
        {!isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </Top>
      {isOpen ? (
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Description>
      ) : null}
    </ExpanderItemConatiner>
  );
};

export default ExpanderItem;
