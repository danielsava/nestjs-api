# API com NestJS e GraphQL

## Descrição

  Projeto feito a partir do curso [Criando Aplicação do Zero | NestJS com GraphQL](https://www.youtube.com/watch?v=tVQwV-c19RU).

<br/>

## Instalação

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

<br/>

## Módulo CRUD 'Usuário'

Projeto conterá um CRUD de Usuários. Para isso será criado um módulo para esta entidade. O `NestJS CLI` facilita a criação de módulos, serviços, controllers e outros

<br/>

### Módulo 'User'

Para criar o módulo `user`:

    $ nest g module user


<br/>

### Service 'User'

Para criar o serviço User:

    $ nest g s user

<br/>

### Resolver (GraphQL) 'User'

Como o projeto utilzia GraphQL será criado um resolver e não um controller:

    $ nest g r user


<br/>

### Entidade 'User'

Para representar a entidade `User` foi criado no diretório raiz do módulo User um arquivo `user.entity.ts`. Documentação do NestJS recomenda utilizar `classes` para criar as entidades ao invés de utilizar interfaces.

<br/>

## Nest CLI Plugin GraphQL

As configurações das entidades para GraphQL (Object Type) exige a anotação `@Field` em todos os campos da entidade. Devido á limtações de reflection do Typescript a equipe de desenvolvimento do NestJS criou um plugin para ajudar na geração desses códigos.

Com este plugin é necessário anotar com o `@Field` somente os campos especiais., como por exemplo o campo `Id`. 

Para mais informações, acesse a [Documentação Oficial](https://docs.nestjs.com/graphql/cli-plugin).

Para instalar o plugin, adicione as seguintes linhas ao `nest-cli.json`:

    
    # nest-cli.json
    {
        "collection": "@nestjs/schematics",
        "sourceRoot": "src",
        "compilerOptions": {
            "plugins": ["@nestjs/graphql/plugins"]
        }
    }

<br/>

## BeanValidation do TypeORM

O TypeORM possui uma espécie de Bean Validation. Para instalar:

    # Validator
    $ npm i class-validator

    # Transformes
    $ npm i class-transformer

<br/>

## GraphQL Playground

Para acessar o `Playground` do GraphQL:

    http://localhost:3000/graphql


Abaixo segue alguns exemplos de consultas para este projeto:

    # Query 'users'
    {
        users {
            id 
            name
        }
    }


    # Query 'user'
    {
        user(
            id: "1"
        ) {
            id
            name
            email
        }
    }


    # Mutatation 'createUSer'
    mutation {
        createUser(
            data: {
                name: "Daniel Sava"
                email: "danielsavas@gmail.com"
            }
        ) {
            id
            name
        }
    }


    # Mutation 'updateUser'
    mutation {
        updateUser(
            id: "1"
            data: {
                name: "Daniel Sava Pupak"
            }
        ) {
            id
            name
            email
        }
    }


    # Mutation 'deleteUser'
    mutation {
        deleteUser(id: "3")
    }


As operações acima estão implementadas no resolver do User: `user.resolver.ts`

<br/>

## Docker

Criado o arquivo `Dockerfile` para o projeto, executar o comando abaixo no `mesmo diretório` onde foi criado o Dockerfile: 

    $ docker build -t nest_api .

<br/>

No mesmo diretório do arquivo `docker-compose.yml`, executar:

    $ docker-compose up --build

Com este comando acima do docker-compose não é necessário executar o `docker build -t `.


<br/>

## Autenticação

Será configurado no porjeto o framework [PassportJS](http://www.passportjs.org) para implementação dos processos de autenticação. O `NestJS` já possui uma integraçao com este framework.


Foi instalado no projeto a biblioteca [BCrypt](https://www.npmjs.com/package/bcrypt) para realizar na criptografia de senhas do usuário:

    # Biblioteca BCrypt
    $ npm i bcrypt

    # ´Types´ para BCrypt (auto-complete na ide) instalado em modo desenv
    $ npm i @types/bcrypt -D

<br/>

Além das alterações na entidade User, para adicionar um campo Senha, e nas classes de serviço e resolver para adicionar um método de consultar por email, foi criado um módulo específico para autenticação, chamado de `auth`:

    # Módulo
    $ nest g mo auth

    # Servico
    $ nest g s auth

    # Resolver
    $ nest g r auth

<br/>

### PassportJS com Token JWT

Abaixo segue os comandos necessários para instalar e configurar as depedências do `PassportJS com JWT`:

    # PassportJs com JWT no NestJS
    $ npm i @nestjs/passport passport @nestjs/jwt passport-jwt

    # Types (desenv)
    $ npm i @types/passport-jwt -D

<br/>

### Testando Rotas Protegidas no GraphQL

Através `Playground` podemos testar as rotas protegidas com o `@UserGuards` configurando os `HTTP HEADERS` da seguinte forma:

    {
        "Authorization" : "Bearer       eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiRGFuaWVsIFNhdmEiLCJpYXQiOjE2MTM3MDYzNzMsImV4cCI6MTYxMzcwNjQ5M30.ajerp06IN8LyP9oF83mmBNosYayfHLg9KXMu4YsedmI"
    }

