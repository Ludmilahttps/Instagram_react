# Projeto #07 - Instagram [React]

Para trabalhar os conceitos aprendidos nesta semana, vamos recuperar o nosso segundo projeto da formação: o Instagram! :)

Como o propósito desta vez não é treinar layout, estamos entregando junto a este mini projeto um Instagram completo, nas mesmas especificações do projeto que fizeram. **A única diferença é a adição de um botão de editar ao lado do nome do usuário.**

Neste mini projeto vocês devem transformar o projeto entregue num projeto React, com os requisitos descritos abaixo.

# Requisitos

- Layout
    - [x]  O layout é quase o mesmo do Instagram que vocês fizeram no início do curso! A única diferença é o ícone de lápis após o nome da pessoa dona do perfil, como visto abaixo:
    - [x]  Você pode utilizar o seu próprio código do Instagram para iniciar o projeto ou utilizar o que nós fornecemos no fim desse enunciado 😃
    
- CSS e Imagens
    - [x]  Arquivos CSS podem ser colocados na pasta `public` e linkados diretamente no `index.html` da pasta `public`
    - [x]  Você também deve criar, dentro da `public`, uma pasta `assets` para colocar as images
- Componentes
    - [x]  A página deve ser componentizada em **arquivos diferentes**, utilizando import/export
        - Lista dos componentes que deverão ser feitos
            - App
            - Corpo
            - SideBar
            - NavBar
            - Usuario
            - Stories (onde cada item será um componente diferente, o Story)
            - Posts (onde cada item será um componente diferente, o Post)
            - Sugestoes (onde cada item será um componente diferente, o Sugestao)
    - [x]  Todos os itens repetitivos do projeto devem ser representados como Arrays/Objetos nos componentes e renderizados no JSX usando `map`. No projeto, esses itens são:
        - Os stories (deve ter pelo menos 2 stories)
        - Os posts (deve ter pelo menos 2 posts)
        - As sugestões de seguidores (deve ter pelo menos 2 sugestões)
        - O usuário acima das sugestões (este não é um array, mas os dados devem vir de props)
                
- Dados Dinâmicos
    - [ ]  O projeto também deverá ter alguns dados dinâmicos que irão mudar na tela. São eles:
        - [ ]  Nome de usuário (ao apertar o lápis, aparece um prompt para alterá-lo)
            - O texto que deve ser mudado é apenas o que aparece ao lado do lápis!   
        - [ ]  Imagem de perfil (ao clicar uma vez na imagem, aparece um prompt pedindo novo link)
        - [ ]  Salvar o post (ao clicar no ícone de salvar o post, ele deverá ficar preenchido)
        - [ ]  Like no post
            - Ao clicar no ícone do like o usuário poderá curtir a postagem, caso a postagem já esteja curtida ao clicar no ícone a postagem não deve ficar curtida.
            - Ao clicar na imagem de um post do feed, o usuário poderá curtir a postagem, ou seja, o botão do like deverá ficar preenchido em vermelho
                - OBS: assim como no Instagram real, clicar na imagem **NÃO** retira likes, apenas adiciona caso já não tenha
            - O número de likes deverá aumentar quando a pessoa der um like e diminuir quando retirá-lo.
    
    🤔 **Por quê?** Porque atributos colocados nas tags dos componentes não são inseridos no HTML final gerado pelo React, somente atributos explicitamente colocados nas tags HTML.