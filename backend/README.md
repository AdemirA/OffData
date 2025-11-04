# OffData Backend API

API Node.js com Express e TypeScript para gerenciar contatos da landing page.

## 🚀 Desenvolvimento

```bash
npm install
cp .env.example .env
npm run dev
```

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```env
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# Email (configure seu SMTP)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
EMAIL_FROM=noreply@offdata.com
EMAIL_TO=contato@offdata.com
```

## 📝 Endpoints

### POST /api/v1/contact
Enviar mensagem de contato

### GET /health
Health check

## 🏗️ Estrutura

```
backend/
├── src/
│   ├── controllers/     # Lógica de negócio
│   ├── routes/         # Definição de rotas
│   ├── middleware/     # Middlewares (validação, erro)
│   ├── types/          # Types TypeScript
│   └── index.ts        # Entry point
├── dist/               # Build output
└── package.json
```
