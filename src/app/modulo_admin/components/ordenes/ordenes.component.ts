import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../models/User.Model";
import {OrdenModel} from "../../../models/Orden.Model";
import {UsersService} from "../../../services/users.service";
import {OrdenesService} from "../../../services/ordenes.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  ordenes: OrdenModel[] = [];
  cargando = true;

  constructor( private _ordenService: OrdenesService ) { }

  ngOnInit(): void {
    this._ordenService.listar()
      .subscribe( resp => {
        this.ordenes = resp;
        this.cargando = false;
      })
  }

  eliminar( orden: OrdenModel, i: number ){

    // @ts-ignore
    Swal.fire({
      title: '¿Está seguro?',
      text: `Desea eliminar a ${ orden.productName }`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then( resp => {
      if(resp.value){
        this.ordenes.splice(i, 1);
        this._ordenService.eliminar( orden._id ).subscribe();
      }
    });

  }

}
