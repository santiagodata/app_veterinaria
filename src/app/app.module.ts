import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

/** COMPONENTS **/
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './modulo_admin/components/dashboard-admin/dashboard-admin.component';
import { MenuAdminComponent } from './modulo_admin/components/shared/menu-admin/menu-admin.component';
import { MenuTiendaComponent } from './modulo_tienda/components/shared/menu-tienda/menu-tienda.component';
import { DashboardTiendaComponent } from './modulo_tienda/components/dashboard-tienda/dashboard-tienda.component';
import { DashboardUsuarioComponent } from './modulo_usuario/components/dashboard-usuario/dashboard-usuario.component';
import { MenuUsuarioComponent } from './modulo_usuario/components/shared/menu-usuario/menu-usuario.component';
import { MenuHeaderComponent } from './modulo_admin/components/shared/menu-header/menu-header.component';
import { GeneralAdminComponent } from './modulo_admin/general-admin/general-admin.component';
import { GeneralTiendaComponent } from './modulo_tienda/general-tienda/general-tienda.component';
import { GeneralUsuarioComponent } from './modulo_usuario/general-usuario/general-usuario.component';
import { MenuHeaderTiendaComponent } from './modulo_tienda/components/shared/menu-header-tienda/menu-header-tienda.component';
import { MenuHeaderUsuarioComponent } from './modulo_usuario/components/shared/menu-header-usuario/menu-header-usuario.component';
import { UsuarioComponent } from './modulo_admin/components/usuario/usuario.component';
import { UsuariosComponent } from './modulo_admin/components/usuarios/usuarios.component';
import { ProveedorComponent } from './modulo_admin/components/proveedor/proveedor.component';
import { OrdenComponent } from './modulo_admin/components/orden/orden.component';
import { ProveedoresComponent } from './modulo_admin/components/proveedores/proveedores.component';
import {OrdenesComponent} from "./modulo_admin/components/ordenes/ordenes.component";




@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    MenuAdminComponent,
    MenuTiendaComponent,
    DashboardTiendaComponent,
    DashboardUsuarioComponent,
    MenuUsuarioComponent,
    MenuHeaderComponent,
    GeneralAdminComponent,
    GeneralTiendaComponent,
    GeneralUsuarioComponent,
    MenuHeaderTiendaComponent,
    MenuHeaderUsuarioComponent,
    UsuarioComponent,
    UsuariosComponent,
    ProveedorComponent,
    OrdenComponent,
    ProveedoresComponent,
    OrdenesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
