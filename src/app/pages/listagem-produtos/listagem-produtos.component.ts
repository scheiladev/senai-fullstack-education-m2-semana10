import { Component } from '@angular/core';
import { CardProdutoComponent } from '../../shared/components/card-produto/card-produto.component';

@Component({
  selector: 'app-listagem-produtos',
  standalone: true,
  imports: [CardProdutoComponent],
  templateUrl: './listagem-produtos.component.html',
  styleUrl: './listagem-produtos.component.scss',
})
export class ListagemProdutosComponent {}
