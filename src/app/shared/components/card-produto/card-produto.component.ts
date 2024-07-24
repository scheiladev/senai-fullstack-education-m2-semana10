import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardInterface } from '../../interfaces/card-interface';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.scss',
})
export class CardProdutoComponent {
  @Input() elemento: CardInterface | undefined;
}
