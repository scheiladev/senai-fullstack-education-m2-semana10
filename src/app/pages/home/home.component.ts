import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardProdutoComponent } from '../../shared/components/card-produto/card-produto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProdutoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {}
