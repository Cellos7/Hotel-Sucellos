import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Reserva } from './pages/reserva/reserva';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'reserva', component: Reserva }
];