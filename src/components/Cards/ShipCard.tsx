import Image from "next/image";
import React from "react";
import cup from "../../../public/images/cup.svg";

interface IShipCard {
  name: string;
  model: string;
  filmsNumber: number;
  highestNumber: number;
}

const HistoryCard: React.FC<IShipCard> = ({
  name,
  model,
  filmsNumber,
  highestNumber,
}) => {
  return (
    <div className="border grid grid-cols-2 border-white mb-1 px-2 py-1">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="font-normal text-yellow-300 text-xs 2xl:text-xl mr-2">
            {name}
          </div>
          {filmsNumber === highestNumber ? (
            <Image src={cup} alt="cup" className="w-3"></Image>
          ) : null}
        </div>
        <div className="font-normal text-yellow-300 text-xs 2xl:text-xl">
          Model
        </div>
        <div className="font-normal text-yellow-300 text-xs 2xl:text-xl">
          {model}
        </div>
      </div>
      <div className="grid grid-rows-3">
        <div className="font-normal text-yellow-300 text-xs 2xl:text-xl  row-start-2">
          Number of films
        </div>
        <div className="font-normal text-yellow-300 text-xs  2xl:text-xl row-start-3">
          {filmsNumber}
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
