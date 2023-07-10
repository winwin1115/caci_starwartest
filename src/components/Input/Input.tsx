import classNames from "classnames";

export interface IinputProps {
  placeHolder: string;
  onClick?: () => void;
  onChange?: (e: any) => void;
  setRef?:
    | React.RefObject<HTMLInputElement>
    | React.RefCallback<HTMLInputElement>;
  className?: string;
  disabled?: boolean;
  type?: "password" | "number" | "text";
}

const InputBase: React.FC<IinputProps> = (props: any) => {
  let { onClick, onChange, className, disabled, type, placeHolder } = props;
  let inputClass = classNames({
    "w-full px-[15px] py-[15px] rounded-md text-base bg-white border border-black-color-100 hover:border-black":
      true,
    "border border-default-color text-default-color hover:border-default-color focus-visible:border-default-color":
      type === "password",
    [`${className}`]: className,
  });

  return (
    <input
      type={type}
      onClick={onClick}
      onChange={onChange}
      className={inputClass}
      disabled={disabled || false}
      placeholder={placeHolder || "Button"}
    />
  );
};

export default InputBase;
