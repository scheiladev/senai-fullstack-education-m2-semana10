import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PesquisaService {
  campoPesquisa = new BehaviorSubject<string>('');
  textoPesquisa = this.campoPesquisa.asObservable();

  pesquisar(termo: string) {
    this.campoPesquisa.next(termo);
  }
}
