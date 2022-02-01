import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAdminComponent} from "./modulo_admin/components/dashboard-admin/dashboard-admin.component";
import {UsuariosComponent} from "./modulo_admin/components/usuarios/usuarios.component";
import {UsuarioComponent} from "./modulo_admin/components/usuario/usuario.component";
import { ProveedorComponent } from './modulo_admin/components/proveedor/proveedor.component';
import { OrdenComponent } from './modulo_admin/components/orden/orden.component';
import {ProveedoresComponent} from "./modulo_admin/components/proveedores/proveedores.component";
import {OrdenesComponent} from "./modulo_admin/components/ordenes/ordenes.component";

const routes: Routes = [
  { path: 'dashboard-admin' , component: DashboardAdminComponent},
  { path: 'usuarios' , component: UsuariosComponent},
  { path: 'usuario/:id', component: UsuarioComponent},
  {path: 'proveedor' , component:ProveedorComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  { path: 'ordenes' , component: OrdenesComponent},
  { path: 'orden/:id', component: OrdenComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard-admin'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
