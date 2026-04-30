import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Reserva } from './pages/reserva/reserva';
import { Cadastro } from './pages/cadastro/cadastro';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'reserva', component: Reserva },
  { path: 'cadastro', component: Cadastro }
];