import Image from "next/image";
import cup from "../../../public/images/cup.svg";

interface IHeaderProps {
  title?: string;
}
const Description: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <>
      <h3 className="text-xl font-semibold font-inter text-center text-yellow-300">
        Sample Next.js project using the SWAPI API
      </h3>
      <p className="text-lg font-medium text-center text-yellow-300">
        Results are filtered to starships with a crew less than 10 and sorted by
        crew size
      </p>
      <div className="flex justify-center mb-2">
        <p className="text-base font-normal text-center flex text-yellow-300 mr-2">
          The starship that has featured in the most films will show a
        </p>
        <Image src={cup} alt="cup" className="w-7 h-7"></Image>
      </div>
    </>
  );
};

export default Description;
