import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarrinhoService } from '../../shared/services/carrinho.service';
import { CommonModule } from '@angular/common';
import { CarrinhoInterface } from '../../shared/interfaces/carrinho-interface';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss',
})
export class CarrinhoComponent implements OnInit {
  contadorCarrinho = 0;
  totalProdutos = this.carrinhoService.totalProdutos;
  itensPedido: Array<CarrinhoInterface> = [];
  frete = 5;

  constructor(private carrinhoService: CarrinhoService) {
    this.carrinhoService.itensPedido.subscribe(() => {
      this.contadorCarrinho = this.carrinhoService.getQuantidade();
    });
  }

  ngOnInit() {
    this.carrinhoService.itensPedido.subscribe((itens) => {
      this.itensPedido = itens;
      this.totalProdutos = 0;
      for (let produto of this.itensPedido) {
        this.totalProdutos +=
          (produto.valor_promocao > 0
            ? produto.valor_promocao
            : produto.valor) * produto.quantidade;
      }
    });
  }

  adicionarQuantidade(idProduto: string) {
    this.carrinhoService.adicionarQuantidade(idProduto);
  }

  subtrairQuantidade(idProduto: string) {
    this.carrinhoService.subtrairQuantidade(idProduto);
  }

  removerProduto(idProduto: string) {
    this.carrinhoService.removerProduto(idProduto);
  }
}
