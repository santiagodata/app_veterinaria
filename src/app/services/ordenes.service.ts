import {HttpClient} from "@angular/common/http";
import {delay, map} from "rxjs";
import {Injectable} from "@angular/core";
import {OrdenModel} from "../models/Orden.Model";

@Injectable({
  providedIn: 'root'
})

export class OrdenesService {

  private url = "https://proyectoveterinaria-91275-default-rtdb.firebaseio.com";

  constructor( private _http: HttpClient ) { }

  crear( orden: OrdenModel ){
    return this._http.post(`${ this.url }/ordenes.json`, orden )
      .pipe(
        map( (resp: any) => {
          orden._id = resp.name;
          return orden;
        })
      )
  }

  actualizar( orden: OrdenModel ){

    const ordenAux = {
      ...orden
    }

    // @ts-ignore
    delete ordenAux._id;

    return this._http.put(`${ this.url }/ordenes/${ orden._id }.json`, ordenAux);
  }

  listarOrden(id: string | null){
    return this._http.get(`${ this.url }/ordenes/${ id }.json`);
  }

  eliminar(id: string | null){
    return this._http.delete(`${ this.url }/ordenes/${ id }.json`);
  }

  listar(){
    return this._http.get(`${ this.url }/ordenes.json`)
      .pipe(
        map( this._convertirAArreglo ),
        delay(1000)
      );
  }

  private _convertirAArreglo( ordenObj: object){
    const ordenes: OrdenModel[] = [];
    console.log( ordenObj );

    if(ordenObj === null) {
      return [];
    }

    Object.keys( ordenObj ).forEach( key => {
      // @ts-ignore
      const orden: OrdenModel = ordenObj[key];
      orden._id = key;

      ordenes.push( orden );
    } )

    return ordenes;
  }
}
