import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemProdutosComponent } from './pages/listagem-produtos/listagem-produtos.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    component: ListagemProdutosComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
