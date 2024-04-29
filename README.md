<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Desenvolvi este sistema mesmo com pouca experiência prévia (tempo de desenvolvimento 3 dias). Foi um desafio emocionante! Utilizei as tecnologias solicitadas, TypeScript, Nest.js, TypeORM, Swagger, Docker, Redis e PostgreSQL para construir uma aplicação robusta  com autenticação JWT que disponibiliza rotas de operaçoes basicas (CRUD) que prove manutenção para um catalogo de filmes.

A arquitetura foi cuidadosamente planejada para fornecer uma API RESTful, com Redis utilizado como cache para melhorar o desempenho. Cada endpoint foi validado para garantir a integridade dos dados.

Por fim, fiz o deploy do sistema no Render, onde ele está pronto para ser testado e usado em produção. Foi uma jornada desafiadora, mas gratificante.

## UserMaster

```bash
{
    "user": "admin",
    "password": "admin"
}
```

## Description


A API desenvolvida é um sistema de gerenciamento de catálogo de filmes com autenticação JWT (JSON Web Tokens). Ela fornece endpoints para realizar operações CRUD (Create, Read, Update, Delete) em um banco de dados PostgreSQL, garantindo que apenas usuários autenticados possam acessar e manipular os dados.

## Funcionalidades Principais

- **Autenticação JWT:** A API permite que os usuários se autentiquem por meio de JSON Web Tokens, fornecendo um token de acesso que deve ser enviado em requisições subsequentes para autenticar o usuário.

- **CRUD de Catálogo de Filmes:** A API oferece endpoints para criar, ler, atualizar e excluir registros de filmes no catálogo. Os endpoints são protegidos por autenticação JWT, garantindo que apenas usuários autenticados possam acessá-los.

- **Validação de Dados:** Todas as informações fornecidas nas requisições são validadas para garantir a integridade e consistência dos dados armazenados no banco de dados. Isso ajuda a evitar erros e inconsistências nos registros.

- **Documentação com Swagger:** A API inclui documentação detalhada gerada automaticamente com Swagger, facilitando o entendimento dos endpoints disponíveis e dos parâmetros necessários para cada requisição.

- **Uso de Redis para Cache:** O Redis é utilizado como cache para otimizar o desempenho da API, armazenando temporariamente dados frequentemente acessados e reduzindo a carga no banco de dados principal.

## Tecnologias Utilizadas

- TypeScript
- Nest.js
- TypeORM
- Swagger
- Docker
- Redis
## Description

A API desenvolvida é um sistema de gerenciamento de catálogo de filmes com autenticação JWT (JSON Web Tokens). Ela fornece endpoints para realizar operações CRUD (Create, Read, Update, Delete) em um banco de dados PostgreSQL, garantindo que apenas usuários autenticados possam acessar e manipular os dados.

## Funcionalidades Principais

- **Autenticação JWT:** A API permite que os usuários se autentiquem por meio de JSON Web Tokens, fornecendo um token de acesso que deve ser enviado em requisições subsequentes para autenticar o usuário.

- **CRUD de Catálogo de Filmes:** A API oferece endpoints para criar, ler, atualizar e excluir registros de filmes no catálogo. Os endpoints são protegidos por autenticação JWT, garantindo que apenas usuários autenticados possam acessá-los.

- **Validação de Dados:** Todas as informações fornecidas nas requisições são validadas para garantir a integridade e consistência dos dados armazenados no banco de dados. Isso ajuda a evitar erros e inconsistências nos registros.

- **Documentação com Swagger:** A API inclui documentação detalhada gerada automaticamente com Swagger, facilitando o entendimento dos endpoints disponíveis e dos parâmetros necessários para cada requisição.

- **Uso de Redis para Cache:** O Redis é utilizado como cache para otimizar o desempenho da API, armazenando temporariamente dados frequentemente acessados e reduzindo a carga no banco de dados principal.

## Tecnologias Utilizadas

- TypeScript
- Nest.js
- TypeORM
- Swagger
- Docker
- Redis
- PostgreSQL





## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
