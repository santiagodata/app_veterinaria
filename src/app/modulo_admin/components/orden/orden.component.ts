import { Component, OnInit } from '@angular/core';
import {OrdenModel} from "../../../models/Orden.Model";
import {OrdenesService} from "../../../services/ordenes.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";
import {Observable} from "rxjs";

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  orden:OrdenModel = new OrdenModel();

  constructor(
    private _ordenService: OrdenesService,
    private _route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    console.log("ID: " , id);

    if(id !== 'registrar'){
      this._ordenService.listarOrden( id )
        // @ts-ignore
        .subscribe((resp: OrdenModel) => {
          this.orden = resp;
          this.orden._id = id;
        })
    }
  }

  guardar( formOrden: NgForm){

    if(formOrden.invalid){
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Espere...',
      text: 'Guardando la información!',
      allowOutsideClick: false,
      showConfirmButton: false,
      allowEscapeKey: false
    });

    Swal.showLoading();

    let peticion:Observable<any>;

    if(this.orden._id) {
      peticion = this._ordenService.actualizar( this.orden );
    } else {
      peticion = this._ordenService.crear( this.orden );
    }

    peticion.subscribe( resp => {
      Swal.fire({
        icon: 'success',
        title: this.orden.productName,
        text: '¡Se almacenó correctamente!'
      });
    });
  }
}
