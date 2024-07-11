import { ChangeEvent } from "react";

interface Inputprops {
  name: string;
  text: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = ({ name, text, type, onChange, value }: Inputprops) => {
  let width = type === "half" ? "200px" : "420px";
  return (
    <div className="flex flex-col p-[10px]" style={{ width: width }}>
      <label htmlFor={name} className="mb-[10px] pl-[4px]">
        {text}
      </label>
      <input id={name} type="text" onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
