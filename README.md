# Aprendendo Next e Nest

Repositório de estudos e testes com os frameworks **Next.js** (front-end) e **NestJS** (back-end), criado durante o processo trainee da empresa júnior **CJR** da Universidade de Brasília.

---

## Sumário

- [Nest (Back-end)](#nest-back-end)
  - [Instalação](#instalação)
  - [Criando o projeto](#criando-o-projeto)
  - [Criando um CRUD de usuário](#criando-um-crud-de-usuário)
  - [Prisma (Banco de dados)](#prisma-banco-de-dados)
- [Next (Front-end)](#next-front-end)

---

## Nest (Back-end)

### Instalação

Instale o CLI do Nest globalmente:

```bash
npm i -g @nestjs/cli
```

### Criando o projeto

```bash
nest new <nome-do-projeto>
cd <nome-do-projeto>
```

### Criando um CRUD de usuário
Depois utilizamos para criar o CRUID de Tasks

```bash
nest g resource user
```

Durante a execução, o CLI faz duas perguntas:

1. **Transport layer:** escolha `REST API`.
2. **Generate CRUD entry points?** responda `Y` para gerar o esqueleto do CRUD.

---

### Prisma (Banco de dados)

#### Instalação

```bash
npm install -D prisma@6
npm install @prisma/client@6
```

> **Obs.:** se algum pacote for bloqueado durante a instalação, aprove-o com:
>
> ```bash
> npm approve-builds
> ```

#### Inicialização

```bash
npx prisma init --datasource-provider sqlite
```

#### Migrations

Depois de configurar o `schema.prisma`, rode a migration:

```bash
npx prisma migrate dev
```

> **Obs.:** o editor pode exibir um erro de `url` no `schema.prisma`. Pode ignorá-lo.

#### Visualizando os dados

```bash
npx prisma studio
```

Ou com algum software como o Insomnia
```bash
npm run start:dev
```

---

## Next (Front-end)

### Instalação

```bash
npx create-next-app@latest <nome-do-app>
cd <nome-do-app>
```

### Rodando em desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.