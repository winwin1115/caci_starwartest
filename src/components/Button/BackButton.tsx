import classNames from "classnames";
import Image from "next/image";

import BackArrow from "../../assets/SVGs/backarrow.svg";

export interface IBackButton {
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
  third?: boolean;
  icon?: boolean;
}

const BackButton: React.FC<IBackButton> = ({
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
  icon,
}) => {
  var btnClass = classNames({
    "w-full px-[20px] py-[15px] rounded-md text-base font-bold cursor-pointer":
      true,
    "border  border-violet-500  text-blue-700":
      outline && !(isLoading || disabled),
    "border border-gray-600 text-gray-1100 ":
      (isLoading || disabled) && outline,
    "text-white bg-violet-500  opacity-30 cursor-not-allowed":
      (isLoading || disabled) && !outline,
    "bg-default-color text-white border hover:bg-default-color/80": primary,
    "bg-white border-default-color border text-default-color hover:bg-default-color/10":
      secondary,
    "bg-black-color-200 text-white border": third,

    [`${className}`]: className,
    "flex justify-center items-center hover:border-default-color, ": icon,
    "bg-default-color text-white hover:bg-default-color/80": !third && !icon,
  });

  return (
    <div
      className="flex text-base font-semibold font-inter text-[#3278E0] mb-44 hover:"
      onClick={onClick}
    >
      <Image src={BackArrow} alt="back arrow" className="pr-2" />
      <div>Back</div>
    </div>
  );
};

export default BackButton;
