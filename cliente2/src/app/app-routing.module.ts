import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CeldasComponent } from './celdas/celdas.component';
import { HomeComponent } from './home/home.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

//se crea las rutas
const routes: Routes = [
  //para indicar que es la pagina por defecto utilizamos pathMatch:'full'
  {path:'',component:HomeComponent, pathMatch:'full'},
  {path:'celdas',component:CeldasComponent},
  {path:'vehiculos',component:VehiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
