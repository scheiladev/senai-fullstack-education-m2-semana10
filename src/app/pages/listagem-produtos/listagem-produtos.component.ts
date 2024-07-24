import { Component, OnInit } from '@angular/core';
import { CardProdutoComponent } from '../../shared/components/card-produto/card-produto.component';
import { ProdutoService } from '../../core/services/produto.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardInterface } from '../../shared/interfaces/card-interface';

@Component({
  selector: 'app-listagem-produtos',
  standalone: true,
  imports: [CardProdutoComponent, CommonModule, RouterModule],
  templateUrl: './listagem-produtos.component.html',
  styleUrl: './listagem-produtos.component.scss',
})
export class ListagemProdutosComponent implements OnInit {
  listagemProdutos: Array<CardInterface> = [];

  constructor(public produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((retorno) => {
      retorno.forEach((produto) => {
        this.listagemProdutos.push({
          nome: produto.nome,
          valor: produto.valor,
          valor_promocao: produto.valor_promocao,
          imagem: produto.imagem[0],
          rota: produto.id,
        });
      });
    });
  }
}
