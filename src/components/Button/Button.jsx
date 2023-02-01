import { Btn } from "./Styles";

export function Button({ disabled, children }) {
  return <Btn disabled={disabled}>{children}</Btn>;
}
