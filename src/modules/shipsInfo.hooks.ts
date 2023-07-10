import type { IShipsData, IShip } from "./dto";

export const useShipsInfoHooks = (shipsData: IShipsData) => {
  if (shipsData) {
    const filteredShipsData = shipsData.results.filter(
      (ship) => Number(ship.crew) < 10
    );
    let sortedShipsData = filteredShipsData.sort(function (a: IShip, b: IShip) {
      return Number(a.crew) - Number(b.crew);
    });

    const filmHighestShip = sortedShipsData.reduce((prev, current) => {
      return prev.films.length > current.films.length ? prev : current;
    });
    const highestFilmNumber = filmHighestShip.films.length;

    return {
      sortedShipsData,
      highestFilmNumber,
    };
  }
  return {};
};
