# bootcamp-gostack-desafio02-NestJS

<h1 align="center">
  <img src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67" width="85%"> 
</h1>

<div align="center">
<span align="center">
  <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
</span>
<span align="center">
  <img src="https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png" width="150" alt="typeOrm Logo" />
</span>
<span align="center">
  <img src="https://www.sqlite.org/images/sqlite370_banner.gif" width="150" alt="SQLite" />
</span>
</div>

---

## 🚀 Indice

- 📓 [Sobre](#-Sobre)
- 👨‍💻 [Tecnologias utilizadas](#-Tecnologias-utilizadas)
- 📦 [Como baixar o projeto](#-Como-baixar-o-projeto)
- 🤝 [Considerações](#-Considerações)

## 📓 Sobre

Referência do projeto [Desafio 02: Conceitos do Node.js](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs) da [Rocketseat](https://github.com/Rocketseat)

Essa será uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios.

É uma refatoração do desafio 02, com algumas poucas mudanças, utilizando o nest com typeorm e o banco de dados sqlite.

### Rotas da aplicação

- **POST /repositories**: A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "autoIncrement", title: 'Desafio Node.js', url: 'http://github.com/...', techs: "Node.js, ...", likes: 0 };

- **GET /repositories**: Rota que lista todos os repositórios;

- **PUT /repositories/:id**: A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

- **DELETE /repositories/:id**: A rota deve deletar o repositório com o id presente nos parâmetros da rota;

# 👨‍💻 Tecnologias utilizadas

- [NodeJs](https://nodejs.org/en/)
- [NestJS](https://nestjs.com/)
- [TypeScritp](https://www.typescriptlang.org/)
- [TypeOrm](https://typeorm.io/#/)
- [Sqlite](https://www.sqlite.org/index.html)

---

## 📦 Como baixar o projeto

### Com [Yarn](https://yarnpkg.com/) :

```bash

 # Clonar o repositório
 $ git clone https://github.com/CristianWesleyFront/bootcamp-gostack-desafio02-NestJS

 # Entrar no diretorio
 $ cd bootcamp-gostack-desafio02-NestJS

 # Instalar as dependências
 $ yarn install

 # Iniciar o projeto
 $ yarn dev


```

### Com [Npm](https://www.npmjs.com/) :

```bash

 # Clonar o repositório
 $ git clone https://github.com/CristianWesleyFront/bootcamp-gostack-desafio02-NestJS

 # Entrar no diretorio
 $ cd bootcamp-gostack-desafio02-NestJS

 # Instalar as dependências
 $ npm i

 # Iniciar o projeto
 $ npm run dev


```

---

## 🤝 Considerações

#### Ideia do projeto : https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs
