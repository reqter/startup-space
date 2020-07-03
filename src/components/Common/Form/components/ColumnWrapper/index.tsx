import React from "react";
import { Wrapper } from "./styles";
interface IProps {
  fieldsLength: number;
  rowColumns: number;
  colSpan: number;
  index: string;
}
const ColumnWrapper: React.FC<IProps> = ({
  fieldsLength,
  rowColumns = 1,
  colSpan = 1,
  children,
}) => {
  return (
    <Wrapper
      rowColumns={rowColumns}
      fieldsLength={fieldsLength}
      colSpan={colSpan}
    >
      {children}
    </Wrapper>
  );
};
export default ColumnWrapper;
