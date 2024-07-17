import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemProdutosComponent } from './pages/listagem-produtos/listagem-produtos.component';
import { DetalheProdutoComponent } from './pages/detalhe-produto/detalhe-produto.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    children: [
      {
        path: '',
        component: ListagemProdutosComponent,
      },
      {
        path: 'produto/:id',
        component: DetalheProdutoComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
