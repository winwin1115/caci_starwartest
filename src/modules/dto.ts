export interface IShip {
  name: string;
  model: string;
  crew: string;
  films: Array<string>;
}

export interface IShipsData {
  results: Array<IShip>;
}
