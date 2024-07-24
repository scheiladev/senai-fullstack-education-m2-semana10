import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoInterface } from '../../shared/interfaces/produto-interface';
import { ProdutoService } from '../../shared/services/produto.service';
import { ComentarioInterface } from '../../shared/interfaces/comentario-interface';
import { ComentariosService } from '../../shared/services/comentarios.service';
import { CarrinhoService } from '../../shared/services/carrinho.service';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe-produto.component.html',
  styleUrl: './detalhe-produto.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetalheProdutoComponent implements OnInit {
  produto: ProdutoInterface = {
    id: '',
    nome: '',
    descricao: '',
    valor: 0,
    valor_promocao: 0,
    imagem: [],
    estoque: 0,
    vendidos: 0,
  };
  comentarios: Array<ComentarioInterface> = [];
  idProduto!: string;
  estoque!: number;

  constructor(
    public produtoService: ProdutoService,
    public comentarioService: ComentariosService,
    private activatedRoute: ActivatedRoute,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idProduto = this.activatedRoute.snapshot.params['id'];

    if (this.idProduto) {
      this.produtoService.getProduto(this.idProduto).subscribe((retorno) => {
        if (retorno) {
          this.produto = retorno;
          this.estoque = retorno.estoque;
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

  adicionarProduto() {
    this.carrinhoService.adicionarProduto(this.produto);
    this.router.navigate(['/carrinho']);
  }
}
