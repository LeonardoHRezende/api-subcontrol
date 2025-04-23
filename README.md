# SubControl API

## 📝 Descrição
SubControl API é uma aplicação backend desenvolvida com NestJS para gerenciar assinaturas de serviços e plataformas. O sistema permite o controle de contas, plataformas e suas respectivas assinaturas, oferecendo funcionalidades para monitoramento de preços, status de assinaturas e categorização de serviços.

## 🚀 Funcionalidades Principais
- Gerenciamento de contas de usuários
- Controle de assinaturas (mensal/anual)
- Monitoramento de plataformas e seus preços
- Histórico de preços por plataforma
- Categorização de serviços (social, streaming, gaming, etc.)
- Status de assinaturas (ativo, alerta, cancelado)

## 🛠️ Tecnologias Utilizadas
- NestJS (Framework)
- TypeScript
- Prisma (ORM)
- PostgreSQL
- Swagger (Documentação)

## 📋 Pré-requisitos
- Node.js (versão LTS recomendada)
- PostgreSQL
- npm ou yarn

## 🔧 Instalação e Configuração

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd api-subcontrol
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/nome_do_banco"
```

4. Execute as migrações do Prisma:
```bash
npx prisma migrate dev
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run start:dev
```

## 🏗️ Estrutura do Projeto

```
src/
├── modules/
│   ├── users/           # Módulo de usuários
│   ├── platforms/       # Módulo de plataformas
│   └── subs/           # Módulo de assinaturas
├── app.module.ts       # Módulo principal
├── app.controller.ts   # Controlador principal
└── app.service.ts      # Serviço principal
```

### Arquitetura

O projeto segue a arquitetura modular do NestJS, com a seguinte estrutura em cada módulo:

- **Controllers**: Responsáveis por receber as requisições HTTP e retornar as respostas
- **Services**: Contêm a lógica de negócios
- **Repositories**: Gerenciam o acesso ao banco de dados (via Prisma)
- **DTOs**: Definem a estrutura dos dados de entrada/saída
- **Entities**: Representam as entidades do banco de dados

## 📊 Modelo de Dados

O sistema possui três entidades principais:

1. **Accounts**: Usuários do sistema
2. **Platforms**: Serviços/plataformas disponíveis
3. **Subscriptions**: Assinaturas dos usuários

## 🚀 Comandos Disponíveis

- `npm run start:dev`: Inicia o servidor em modo desenvolvimento
- `npm run build`: Compila o projeto
- `npm run start:prod`: Inicia o servidor em modo produção
- `npm run test`: Executa os testes
- `npm run lint`: Executa o linter
- `npm run format`: Formata o código

## 📚 Documentação da API

A documentação da API está disponível através do Swagger quando o servidor estiver rodando:
```
para a tipagem: http://localhost:3333/docs-json
swagger: http://localhost:3333/docs
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença UNLICENSED.
