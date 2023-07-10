import classNames from "classnames";
import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";
import Loading from "../Loading/Loading";

export interface IButtonProps {
  label: string | React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  outline?: boolean;
  leftElementIcon?: React.ReactNode;
  rightElementIcon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  googleBtn?: boolean;
  third?: boolean;
  icon?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  label = "Button",
  leftElementIcon,
  rightElementIcon,
  onClick,
  outline,
  className,
  isLoading,
  type = "button",
  disabled,
  primary,
  secondary,
  third,
  googleBtn,
  icon,
}) => {
  var btnClass = classNames({
    "w-full px-[20px] py-[15px] rounded-md text-base cursor-pointer": true,
    "bg-default-color text-white border hover:bg-default-color/80": primary,
    "bg-white border-default-color font-bold border text-default-color hover:bg-default-color/10":
      secondary,
    "bg-black-color-200 text-white border": third,
    "mb-8 border border-black hover:bg-black/10": googleBtn,
    [`${className}`]: className,
    "flex justify-center items-center hover:border-default-color, ": icon,
    "bg-gray-700 hover:bg-gray-600 transition": disabled,
  });

  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={btnClass}
      type={type}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {leftElementIcon ? leftElementIcon : null}
          <div className={icon ? "pl-2" : ""}>{label}</div>
          {rightElementIcon ? rightElementIcon : null}
        </>
      )}
    </button>
  );
};

export default Button;
