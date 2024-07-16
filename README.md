# SENAI Fullstack [Education]

## Resolução dos exercícios da Semana 10 - Módulo 02

### M2S10 | Roteiro Mini-Projeto Marketplace

Olá dev!

Para encerrar os conteúdos de Angular desse módulo, vamos realizar um mini projeto e ele será a construção de um Marketplace!

Utilizando todos os conceitos que nós vimos em sala, vamos nos dividir em squads para construção deste projeto.

A forma de realização e a divisão das tarefas ficam com vocês, mas é importante que todos tenham participação ATIVA na construção das soluções.

Os cards que seguem possuem as descrições das atividades.
Bom trabalho e divirtam-se!

### M2S10 | Ex. 01 - Home

Nesta primeira atividade, vamos construir a estrutura da home da nossa aplicação.

A home possuirá:

- Um cabeçalho (definição do header no Ex. 02);
- Abaixo do cabeçalho, um banner contendo um carousel para apresentação das ofertas atuais do site. Essas ofertas podem ser texto ou imagens. (escolha livre)
- Abaixo do banner principal terão 2 sessões:
  - **Mais vendido da semana**: Sessão que possuirá alguns cards com a apresentação dos produtos mais vendidos na semana (definição dos cards de produtos no Ex. 3);
  - **Ofertas do dia**: Sessão que possuirá alguns cards com a apresentação dos produtos em oferta;
  - Caso algum card dessas sessões sejam clicados, redirecione o usuário para a tela de detalhes daquele produto (definição da tela de detalhes no Ex. 06)
- Ao final na página, teremos um rodapé (definição do rodapé no Ex. 4)

### M2S10 | Ex. 02 - Header

Aqui definiremos o header da nossa aplicação.

Ele será composto por:

- Um logo da aplicação do lado esquerdo; (imagem de livre escolha)
- Na parte central, um input para a busca de produtos e um botão de pesquisar:
  - Que, ao ser clicado, redirecionará o usuário para a tela de listagem de produtos (definido no Ex. 05).
- Do lado direito do header, as opções:
  - Link Crie sua conta
    - Sem ação
  - Link Entrar
    - Sem ação
  - Carrinho (pode ser texto, texto + ícone ou apenas ícone)
    - Quando um produto for adicionado no carrinho, deverá aparecer um indicador ao lado desse elemento contendo o número de itens no carrinho, ou seja, para toda alteração no carrinho, esse elemento deverá ser alterado também;
    - Quando esse elemento for clicado, o usuário deverá ser redirecionado para a tela de carrinho (definição no Ex. 07)

### M2S10 | Ex. 03 - Card Produto

Os cards de produtos que serão apresentados em nossa aplicação terão as seguintes características:

- De forma centralizada, uma imagem que represente o produto em questão;
- Abaixo da imagem do produto:
  - O nome do produto;
  - Seu valor.

### M2S10 | Ex. 04 - Footer

O footer da nossa aplicação será composto por:

- Logo da aplicação centralizado;
- Abaixo do logo:
  - Os links em linha (um ao lado do outro):
    - Condições de uso
      - Sem ação;
    - Notificação de Privacidade
      - Sem ação;
    - Trabalhe Conosco
      - Sem ação;
    - Acessibilidade
      - Sem ação;
    - Contato
      - Sem ação;
- Ao final, o nome de registro da empresa (fictício) e seu CNPJ (também fictício)

### M2S10 | Ex. 05 - Listagem de produtos

Ao pesquisar um produto pelo input de busca no header:

1. Caso a pesquisa não encontre nenhum produto para o texto digitado pelo usuário: Exiba uma mensagem informando que não há produtos para o termo digitado e solicite para que o usuário faça uma nova busca
2. Caso a pesquisa encontre produtos para o texto digitado: Liste os produtos encontrados em seus cards.
   1. Caso um card seja clicado: redirecione o usuário para a tela de detalhes daquele produto (definição da detalhes de produtos no Ex. 06).

### M2S10 | Ex. 06 - Detalhes do produto

Quando algum produto for selecionado, o usuário será redirecionado para esta tela de detalhes de produto.

Ela será composta por:

- Uma ou mais imagens do produto que está sendo exibido;
- O nome do produto;
- Uma descrição com mais detalhes sobre ele;
- Seu valor;
- Um botão Adicionar ao Carrinho:
  - Quando esse botão for clicado, o usuário será redirecionado para a tela de carrinho (definição Ex. 07);
- Abaixo, teremos uma sessão de comentários de clientes que já compraram esse produto:
  - Esses comentários são ilustrativos. O texto é de livre escolha

### M2S10 | Ex. 07 - Carrinho

Nesta tela teremos:

- À esquerda: Uma listagem de todos os produtos adicionados no carrinho.
  - Cada item deve possuir:
    - Uma imagem do produto;
    - O nome do produto;
    - A quantidade desde produto no carrinho, com botões para adicionar 1 ou subtrair 1 da quantidade;
      - Não deixar quantidade menor que 1;
    - Seu valor total (valor unitário \* quantidade);
    - Um botão excluir;
      - Que se clicado, removerá o item do carrinho
- À direita teremos um resumo de compra, que possuirá:
  - O valor de todos os produtos (soma do valor total de todos os produtos);
  - Valor do frente;
  - Valor total da compra (valor total dos produtos + valor do frete);
  - Botão Comprar:
    - Sem ação.

Caso não tenha itens no carrinho:

- Deverá ser apresentada uma mensagem informando que o carrinho está vazio;
- Abaixo desta mensagem, será exibido um botão de Iniciar Busca:
  - Que ao ser clicado retornará para a home do site.

### M2S10 | Ex. 08 - Integrações

Neste exercício, definiremos como ocorrerão algumas integrações da aplicação.

- Home:
  - Teremos um endpoint para buscar os produtos mais vendidos da semana, e o seu retorno populará a sessão **Mais vendido da semana;**
  - Teremos um endpoint para buscar os produtos em ofertas e o seu retorno populará a sessão **Ofertas do dia.**
- Detalhes do Produto:
  - Teremos um endpoint que irá receber o produto selecionado e retornará os detalhes daquele produto;
  - Teremos um endpoint de comentários que irá receber o produto selecionado e retornará todos os comentários daquele produto;
  - Quando o botão Adicionar ao Carrinho for clicado, armazene o produto selecionado em um estado global representando os itens do carrinho.
