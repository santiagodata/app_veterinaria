import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  formUsuario:FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearForm();
  }

  ngOnInit(): void {
  }

  get ccNoValida(){
    return this.formUsuario.get('cc').invalid && this.formUsuario.get('cc').touched
  }

  get nombresNoValido(){
    return this.formUsuario.get('nombres').invalid && this.formUsuario.get('nombres').touched
  }

  get apellidosNoValidos(){
    return this.formUsuario.get('apellidos').invalid && this.formUsuario.get('apellidos').touched
  }

  get emailNoValido(){
    return this.formUsuario.get('email').invalid && this.formUsuario.get('email').touched
  }

  get valorNoValido(){
    return this.formUsuario.get('valor').invalid && this.formUsuario.get('valor').touched
  }


  crearForm(){
    this.formUsuario = this.fb.group({
      cc:['',[
        Validators.required,
        Validators.minLength(3)]],
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      email:['',[
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      valor:['',Validators.required]
      })
  }
  //Validators.required,
  //Validators.pattern('/^[1-9]\d{6,10}$/')]]

  guardar(){
    if( this.formUsuario.invalid){
      Object.values( this.formUsuario.controls ).forEach( control => {
        control.markAllAsTouched();
      })
      return
    }
    console.log( this.formUsuario );
  }
}
