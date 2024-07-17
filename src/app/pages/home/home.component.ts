import { Component } from '@angular/core';
import { CardProdutoComponent } from '../../shared/components/card-produto/card-produto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProdutoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
