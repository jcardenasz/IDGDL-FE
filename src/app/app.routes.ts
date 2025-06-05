import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { Productos } from './productos/productos';
import { Cotizaciones } from './cotizaciones/cotizaciones';
import { Contactenos } from './contactenos/contactenos';
import { MainLayout } from './main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'home', component: HomeComponent }, // default child route
      { path: 'productos', component: Productos },
      { path: 'cotizaciones', component: Cotizaciones },
      { path: 'contactenos', component: Contactenos },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
