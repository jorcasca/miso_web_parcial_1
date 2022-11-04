export interface ICoffee {
  id: number;
  nombre: string;
  tipo: string;
  region: string;
  sabor: string;
  altura: number;
  imagen: string;
}

export enum CoffeeType {
  ORIGIN = 'Café de Origen',
  BLEND = 'Blend'
}
