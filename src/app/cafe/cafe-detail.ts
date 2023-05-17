import { Cafe } from "./cafe";

export class CafeDetail extends Cafe{

  constructor(
      id: number,
      nombre: string,
      tipo: string,
      region: string,
      sabor: string,
      altura: number,
      imagen: string,

  )  {
    super(id, nombre,tipo,region,sabor,altura,imagen);
  }
}
