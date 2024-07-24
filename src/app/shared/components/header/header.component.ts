import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho.service';
import { PesquisaService } from '../../services/pesquisa.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  contadorCarrinho = 0;
  textoPesquisa = '';

  constructor(
    private carrinhoService: CarrinhoService,
    private pesquisaService: PesquisaService,
    private router: Router
  ) {
    this.carrinhoService.itensPedido.subscribe(() => {
      this.contadorCarrinho = this.carrinhoService.getQuantidade();
    });
  }

  pesquisar() {
    this.pesquisaService.pesquisar(this.textoPesquisa);
    this.router.navigate(['/produtos']);
  }
}
