export interface ProdutoInterface {
  id: string;
  nome: string;
  descricao: string;
  valor: number;
  imagem: Array<string>;
  estoque: number;
  valor_promocao: number;
  vendidos: number;
}
