import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemProdutosComponent } from './pages/listagem-produtos/listagem-produtos.component';
import { DetalheProdutoComponent } from './pages/detalhe-produto/detalhe-produto.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';

export const routes: Routes = [
  {
    path: '',
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
        path: ':id',
        component: DetalheProdutoComponent,
      },
    ],
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent,
  },
];
