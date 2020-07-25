import React from "react";
import Spinner from "../CircleSpinner";
import { Button } from "./styles";
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}
const SpinnerButton: React.FC<IProps> = ({ loading, children }) => {
  return <Button>{loading ? <Spinner /> : children}</Button>;
};

export default SpinnerButton;
