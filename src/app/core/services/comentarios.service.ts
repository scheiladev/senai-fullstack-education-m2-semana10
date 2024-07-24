import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComentarioInterface } from '../../shared/interfaces/comentario-interface';

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  url = 'http://localhost:3000/comentarios';

  constructor(private httpClient: HttpClient) {}

  getComentariosProduto(produtoId: number) {
    return this.httpClient.get<Array<ComentarioInterface>>(
      this.url + `?produto_id=${produtoId}`
    );
  }
}
