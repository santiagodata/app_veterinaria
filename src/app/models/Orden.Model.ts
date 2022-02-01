import {OrdenInterface} from "../interfaces/Orden.Interface";

export class OrdenModel implements OrdenInterface{
  _id: string | null = "";
  date: Date = new Date();
  supplierName: string = "";
  productName: string = "";
  amount: number = 0;
  cost: number = 0;
}
