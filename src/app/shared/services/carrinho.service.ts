import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarrinhoInterface } from '../interfaces/carrinho-interface';
import { ProdutoInterface } from '../interfaces/produto-interface';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itensPedido: BehaviorSubject<Array<CarrinhoInterface>>;
  totalProdutos = 0;

  constructor() {
    this.itensPedido = new BehaviorSubject<Array<CarrinhoInterface>>([]);
  }

  zerarCarrinho() {}

  getQuantidade() {
    return this.itensPedido.getValue().length;
  }

  adicionarProduto(produto: ProdutoInterface) {
    let carrinho = this.itensPedido.getValue();

    let item: CarrinhoInterface = {
      id: produto.id,
      nome: produto.nome,
      imagem: produto.imagem[0],
      valor: produto.valor,
      valor_promocao: produto.valor_promocao,
      quantidade: 1,
    };

    item.valor_promocao > 0
      ? (this.totalProdutos += item.valor_promocao)
      : (this.totalProdutos += item.valor);

    let itemExiste = carrinho.find((produto) => produto.id === item.id);
    if (itemExiste) {
      itemExiste.quantidade += 1;
    } else {
      carrinho.push(item);
    }

    this.itensPedido.next(carrinho);
  }

  removerProduto(idProduto: string) {
    let carrinho = this.itensPedido.getValue();

    let index = carrinho.findIndex((produto) => produto.id === idProduto);
    if (index !== -1) {
      carrinho.splice(index, 1);
    }

    this.itensPedido.next(carrinho);
  }

  adicionarQuantidade(idProduto: string) {
    let carrinho = this.itensPedido.getValue();

    let item = carrinho.find((produto) => produto.id === idProduto);
    if (item) {
      item.quantidade += 1;
    }

    this.itensPedido.next(carrinho);
  }

  subtrairQuantidade(idProduto: string) {
    let carrinho = this.itensPedido.getValue();

    let item = carrinho.find((produto) => produto.id === idProduto);
    if (item) {
      item.quantidade -= 1;
    }

    this.itensPedido.next(carrinho);
  }
}
