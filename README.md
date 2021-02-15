# API com NestJS e GraphQL

## Descrição

  Projeto feito a partir do curso [Criando Aplicação do Zero | NestJS com GraphQL](https://www.youtube.com/watch?v=tVQwV-c19RU).

<br/>

## Instação

O único pré-requisito é a instalação do NodeJS. Siga as instruções de instalação no [site oficial](https://nodejs.org/en/).

Instalado o NodeJS, basta instalar o `Nest CLI` através do npm:


    # Instalação do 'Nest CLI'
    $ npm i -g @nestjs/cli

    # Para criar um novo projeto
    $ nest new <project-name>

    # Para executar o projeto
    $ npm run start

    # Modo Dev
    $ npm run start:dev

    # Modo Prod
    $ npm run start:prod

<br/>

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

<br/>


## Banco de Dados

A aplicação será integrada com [TypeORM](https://typeorm.io/) e [PostgresSQL](https://www.postgresql.org/). O framework `NestJS` oferece integração nativa com `TypeORM` e este com `PostgreSQL`:

    $ npm install --save @nestjs/typeorm typeorm pg

Caso queira utilizar com o `MySQL`: 

    $ npm install --save @nestjs/typeorm typeorm mysql

<br>

### Instalação do PostgreSQL no Windows

No Windows, através do [Chocolatey](https://chocolatey.org/packages/postgresql):

    # choco install postgresql --params '/Password:123456'

Executar o comando acima com `privilégios de Administrador`.

<br/>

## GraphQL

O `NestJS` já possui integração com `GraphQL`. Basta instalar basta executar:

    $ npm i @nestjs/graphql graphql-tools graphql

Necessário também instalar as dependências do `Apollo Server` para o `Express`. Isso caso utilize Express no projeto, que é o default:

    $ npm i apollo-server-express

Caso utilize O Fastify, instalar o `apollo-server-fastify`.

