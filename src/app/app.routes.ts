import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
<<<<<<< HEAD
import {ReservasComponent} from './reservas/reserva.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'reservas', component: ReservasComponent },
];
=======
import { Reserva } from './pages/reserva/reserva';
import { Cadastro } from './pages/cadastro/cadastro';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'reserva', component: Reserva },
  { path: 'cadastro', component: Cadastro }
];
>>>>>>> Victor
