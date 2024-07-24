import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ProdutoInterface } from '../../shared/interfaces/produto-interface';
import { ProdutoService } from '../../core/services/produto.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ComentarioInterface } from '../../shared/interfaces/comentario-interface';
import { ComentariosService } from '../../core/services/comentarios.service';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe-produto.component.html',
  styleUrl: './detalhe-produto.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetalheProdutoComponent implements OnInit {
  produto!: ProdutoInterface;
  comentarios: Array<ComentarioInterface> = [];
  idProduto!: number;

  constructor(
    public produtoService: ProdutoService,
    public comentarioService: ComentariosService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idProduto = this.activatedRoute.snapshot.params['id'];

    if (this.idProduto) {
      this.produtoService.getProduto(this.idProduto).subscribe((retorno) => {
        if (retorno) {
          console.log(retorno);
          this.produto = retorno;
        }
      });
    }

    this.comentarioService
      .getComentariosProduto(this.idProduto)
      .subscribe((retorno) => {
        retorno.forEach((comentario) => {
          this.comentarios.push(comentario);
        });
      });
  }
}
