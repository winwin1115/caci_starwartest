
export interface IButtonProps {
  label: string | React.ReactNode;
  onClick?: () => void;
}

const Button2: React.FC<IButtonProps> = ({
  label = "Button",
  onClick,
}) => {
  
  return (
    <button 
    onClick={onClick}
    className="border w-full px-[20px] py-[15px] rounded-md text-base cursor-pointer bg-[#FFFFFF] hover:bg-[#312Ec8] text-[#312Ec8] hover:text-white text-inter font-semibold border-[#312EC8] disabled">{label}</button>
  );
};

export default Button2;
