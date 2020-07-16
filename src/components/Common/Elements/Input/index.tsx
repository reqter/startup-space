import { useRef, useImperativeHandle, forwardRef } from "react";
import { Input } from "./styles";
const InputComponent = (props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return <Input {...props} ref={inputRef} />;
};
export default forwardRef(InputComponent);
