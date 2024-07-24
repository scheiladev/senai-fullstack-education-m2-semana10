import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardProdutoComponent } from '../../shared/components/card-produto/card-produto.component';
import { ProdutoService } from '../../shared/services/produto.service';
import { CardInterface } from '../../shared/interfaces/card-interface';
import { PesquisaService } from '../../shared/services/pesquisa.service';

@Component({
  selector: 'app-listagem-produtos',
  standalone: true,
  imports: [CardProdutoComponent, CommonModule, RouterModule],
  templateUrl: './listagem-produtos.component.html',
  styleUrl: './listagem-produtos.component.scss',
})
export class ListagemProdutosComponent implements OnInit {
  textoPesquisa: string = '';
  listagemProdutos: Array<CardInterface> = [];
  listagemPesquisa: Array<CardInterface> = [];

  constructor(
    public produtoService: ProdutoService,
    private pesquisaService: PesquisaService
  ) {}

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
        this.listagemPesquisa = this.listagemProdutos;
      });
      this.pesquisaService.textoPesquisa.subscribe((termo) => {
        this.textoPesquisa = termo;
        this.pesquisarProdutos();
      });
    });
  }

  pesquisarProdutos() {
    this.listagemPesquisa = this.listagemProdutos.filter((produto) =>
      produto.nome.toUpperCase().includes(this.textoPesquisa!.toUpperCase())
    );
  }
}
