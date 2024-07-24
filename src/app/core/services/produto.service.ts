import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoInterface } from '../../shared/interfaces/produto-interface';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  url = 'http://localhost:3000/produtos';

  constructor(private httpClient: HttpClient) {}

  getProdutos() {
    return this.httpClient.get<Array<ProdutoInterface>>(this.url);
  }

  getProduto(id: number) {
    return this.httpClient.get<ProdutoInterface>(this.url + `/${id}`);
  }
}
