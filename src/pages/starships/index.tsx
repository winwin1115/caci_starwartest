import { ReactElement } from "react";
import Image from "next/image";

import LayoutMain from "../../layout/main/index";
import { NextPageWithLayout } from "../_app";
import background from "../../../public/images/background.jpg";
import logo from "../../../public/images/logo1.png";
import styles from "./styles.module.css";
import { useGetStarShipsQuery } from "../../services/api.service";
import ShipCard from "../../components/Cards/ShipCard";
import { useShipsInfoHooks } from "../../modules/shipsInfo.hooks";
import LoadingScreen from "../../components/Loading/LoadingScreen";
import Description from "../../components/Description/Description";

const Car: NextPageWithLayout = () => {
  const { data: shipsData, isLoading: shipsDataLoading } =
    useGetStarShipsQuery();

  const { sortedShipsData, highestFilmNumber } = useShipsInfoHooks(shipsData);
  return (
    <div className="border border-color-wallet rounded-lg pl-5 py-10 pr-[22px] mb-20 sm:p-10 sm:w-full relative">
      <Image
        src={background}
        alt="space background"
        className={styles["bgWrap"]}
        fill
        priority
      ></Image>
      <div className="flex justify-center mb-3">
        <Image src={logo} alt="logo" className={styles["bgWrap"]}></Image>
      </div>
      <Description></Description>

      {shipsDataLoading ? (
        <LoadingScreen />
      ) : (
        <div className="mt-5 px-[5px] lg:px-[5px] xl:px-[5px] 2xl:px-[10px] flex flex-col max-h-96 overflow-auto">
          {sortedShipsData &&
            Array.isArray(sortedShipsData) &&
            sortedShipsData.map((ship: any, id: number) => (
              <ShipCard
                name={ship.name}
                model={ship.model}
                filmsNumber={ship.films.length}
                highestNumber={highestFilmNumber}
                key={id}
              />
            ))}
        </div>
      )}
    </div>
  );
};

Car.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default Car;
