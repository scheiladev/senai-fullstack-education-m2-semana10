import { Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  contadorCarrinho = 0;

  constructor(private carrinhoService: CarrinhoService) {
    this.carrinhoService.itensPedido.subscribe(() => {
      this.contadorCarrinho = this.carrinhoService.getQuantidade();
    });
  }
}
