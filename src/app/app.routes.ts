import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { Productos } from './pages/productos/productos';
import { Cotizaciones } from './pages/cotizaciones/cotizaciones';
import { Contactenos } from './pages/contactenos/contactenos';
import { MainLayout } from './layout/main-layout/main-layout';

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
