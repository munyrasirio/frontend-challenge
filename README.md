# Frontend Challenge

O desafio a seguir consiste em aplicar um conjunto de técnicas e lógicas ao fluxo de navegação de um site com listagem de membros de determinada plataforma. O projeto se divide em duas telas: Listagem de membros e perfil do membro.

Existem algumas regras de negócio para serem seguidas e estão descritas no decorrer deste documento:

- Filtrar membros por estado;
- Buscar membros por nome e/ou sobrenome;
- Paginação entre os _cards_ de membros;
- Acessar o perfil do membro ao clicar no _card_ do mesmo;
- Criar uma tela de perfil para os membros;
- Teste unitários (opcional);
- Para a tela com todos os membros, era necessário seguir o _Figma_ apresentado no repositório de origem do desafio;
- Para a base de dados, também deveria utilizar-se da fornecida no repositório.

Para a estruturação do _front-end_, foi utilizada a biblioteca _React.JS_. No desenvovimento das interfaces, optou-se por utilizar _React Bootstrap_ em conjunto com _styled-components_ para ter mais facilidade na customização das telas e componentes.

No _backend_, optou-se por simular o servidor com _json-server_. As chamadas dos _endpoints_ foram feitas com Axios.

Como o _mock server_ possui padrões de _query_ limitados, foram feitas duas adaptações no _json_ original:

- Inclusão de um _ID_ em cada membro;
- Inclusão do campo "_fullname_" para possibilitar a busca por nome/sobrenome dos membros.

## Como começar

Após clonar o projeto, realizar a instalação das dependências por meio do NPM.

```sh
npm install
```

Finalizada a instalação, primeiro deve-se executar o "servidor" criado com o _json-server_:

```sh
npm run server
```

O servidor retornará com a mensagem:

```sh
Json Server is Up & Running at port 3001
```

É importante que o servidor esteja em uma porta diferente de 3000 porque esta é reservada ao _React.JS_.
Agora é hora de fazer funcionar!

```sh
npm start
```

Assim que terminar de compilar a aplicação, a primeira tela que o projeto vai apresentar é a "Lista de Membros".

## Header

Possui o filtro por nome/sobrenome;

## Lista de Membros

A tela possui:
- Paginação;
- Filtro por estados;
- Ordenação por nome _ASC_ e _DESC_.

## Membro (checkout)

Traz os dados do membro selecionado na tela anterior.