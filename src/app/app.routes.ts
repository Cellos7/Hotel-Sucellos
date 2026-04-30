import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cadastro } from './pages/cadastro/cadastro';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cadastro', component: Cadastro }
];
