import classNames from "classnames";
import Loading from "../Loading/Loading";

export interface IButtonProps {
  label: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  rightElementIcon?: React.ReactNode;
}

const ButtonMenu: React.FC<IButtonProps> = ({
  label = "Button",
  onClick,
  className,
  rightElementIcon,
}) => {
  var btnClass = classNames({
    "w-full rounded-md text-sm sm:text-lg font-medium font-DM-San cursor-pointer text-[#4B4B4B] ":
      true,
    "flex justify-between": rightElementIcon,
    [`${className}`]: className,
  });
  return (
    <div onClick={onClick} className={btnClass}>
      <div>{label}</div>
      <div>{rightElementIcon ? rightElementIcon : null}</div>
    </div>
  );
};

export default ButtonMenu;
