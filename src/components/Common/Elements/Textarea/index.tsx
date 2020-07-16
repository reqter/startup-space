import { useRef, useImperativeHandle, forwardRef } from "react";
import { Input } from "./styles";
const Textarea = (props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return <Input {...props} ref={inputRef} />;
};
export default forwardRef(Textarea);
