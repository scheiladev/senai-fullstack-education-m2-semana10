import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardProdutoComponent } from '../../shared/components/card-produto/card-produto.component';
import { ProdutoService } from '../../shared/services/produto.service';
import { CardInterface } from '../../shared/interfaces/card-interface';
import { ProdutoInterface } from '../../shared/interfaces/produto-interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProdutoComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  listagemProdutos: Array<ProdutoInterface> = [];
  listagemCardsProdutos: Array<CardInterface> = [];
  listagemOfertas: Array<CardInterface> = [];
  listagemPopulares: Array<CardInterface> = [];

  constructor(public produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((retorno) => {
      this.listagemProdutos = retorno;

      this.listagemCardsProdutos = this.listagemProdutos.map((produto) => ({
        nome: produto.nome,
        valor: produto.valor,
        valor_promocao: produto.valor_promocao,
        imagem: produto.imagem[0],
        rota: `produtos/${produto.id}`,
      }));

      this.getOfertas();
      this.getPopulares();
    });
  }

  getOfertas() {
    this.listagemOfertas = this.listagemCardsProdutos.filter(
      (produto) => produto.valor_promocao > 0
    );
  }

  getPopulares() {
    let maisVendidos = this.listagemProdutos
      .sort((a, b) => b.vendidos - a.vendidos)
      .slice(0, 5);
    this.listagemPopulares = maisVendidos.map((produto) => ({
      nome: produto.nome,
      valor: produto.valor,
      valor_promocao: produto.valor_promocao,
      imagem: produto.imagem[0],
      rota: `produtos/${produto.id}`,
    }));
  }
}
