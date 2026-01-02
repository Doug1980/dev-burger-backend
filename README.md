# Dev Burger - Backend

Backend do projeto **Dev Burger**, responsável por gerenciar usuários, produtos, pedidos e integrações de pagamento. Desenvolvido em **Node.js** com **Express** e utilizando **Sequelize** como ORM para banco de dados.

## Tecnologias
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL / MySQL (ou outro banco que você estiver usando)
- dotenv (para variáveis de ambiente)
- Cors, Helmet, morgan (boas práticas de segurança e logs)
- Stripe (para pagamentos, se aplicável)

## Estrutura do Projeto

dev-burger-backend/
├─ config/ # Configurações (DB, Stripe, etc.)
├─ controllers/ # Lógica de rotas
├─ models/ # Modelos Sequelize
├─ routes/ # Rotas da API
├─ middlewares/ # Middlewares (autenticação, erros, etc.)
├─ migrations/ # Migrations do banco
├─ seeders/ # Dados iniciais (opcional)
├─ .sequelizerc
├─ package.json
└─ server.js (ou app.js)
