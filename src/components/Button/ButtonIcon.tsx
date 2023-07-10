import classNames from "classnames";
import Loading from "../Loading/Loading";

export interface IButtonProps {
  label: string | React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  setRef?:
    | React.RefObject<HTMLInputElement>
    | React.RefCallback<HTMLInputElement>;
  leftElementIcon?: React.ReactNode;
  rightElementIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const ButtonIcon: React.FC<IButtonProps> = ({
  label = "Button",
  leftElementIcon,
  rightElementIcon,
  onClick,
  className,
  isLoading,
  disabled,
}) => {
  var btnClass = classNames({
    "flex text-base cursor-pointer text-blue-color-100": true,
    [`${className}`]: className,
  });

  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={btnClass}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {leftElementIcon ? leftElementIcon : null}
          <div className="ml-2  font-bold">{label}</div>
          {rightElementIcon ? rightElementIcon : null}
        </>
      )}
    </button>
  );
};

export default ButtonIcon;
