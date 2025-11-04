# OffData - Landing Page Institucional

Landing page institucional da OffData, holding de tecnologia especializada em soluções digitais para os mercados imobiliário, agronegócio e compliance.

## 🚀 Projetos

### 1. Homeclick (Kazai)
Plataforma de gestão de leads imobiliários com automação inteligente, CRM integrado e analytics em tempo real.

### 2. GrãoTech
Marketplace B2B para compra e venda de grãos com rastreabilidade blockchain e gestão logística integrada.

### 3. ResolveLGPD
Checklist completo e automatizado para adequação à LGPD com auditoria contínua e gestão de consentimentos.

## 🛠️ Tecnologias

### Frontend
- **Next.js 14+** - React framework com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **React Hooks** - Gerenciamento de estado

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **TypeScript** - Tipagem estática
- **Zod** - Validação de schemas
- **Helmet** - Segurança HTTP
- **CORS** - Cross-Origin Resource Sharing
- **Rate Limiting** - Proteção contra DDoS

### DevOps
- **Docker** - Containerização
- **Docker Compose** - Orquestração de containers
- **Firebase Hosting** - Deploy do frontend

## 📦 Estrutura do Projeto

```
OffData/
├── frontend/                # Aplicação Next.js
│   ├── app/                # App Router (páginas)
│   ├── components/         # Componentes React
│   ├── public/            # Arquivos estáticos
│   ├── Dockerfile         # Container de produção
│   ├── Dockerfile.dev     # Container de desenvolvimento
│   ├── firebase.json      # Configuração Firebase
│   └── next.config.ts     # Configuração Next.js
│
├── backend/               # API Node.js
│   ├── src/
│   │   ├── controllers/   # Controladores
│   │   ├── routes/        # Rotas da API
│   │   ├── middleware/    # Middlewares
│   │   ├── types/         # Definições TypeScript
│   │   └── index.ts       # Entry point
│   ├── Dockerfile         # Container de produção
│   └── Dockerfile.dev     # Container de desenvolvimento
│
├── docker-compose.yml     # Orquestração produção
└── docker-compose.dev.yml # Orquestração desenvolvimento
```

## 🚦 Como Executar

### Pré-requisitos
- Node.js 20+
- npm ou yarn
- Docker e Docker Compose (opcional)

### Opção 1: Desenvolvimento Local (sem Docker)

#### Frontend
```bash
cd frontend
npm install
npm run dev
```
O frontend estará disponível em: http://localhost:3000

#### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
O backend estará disponível em: http://localhost:3001

### Opção 2: Desenvolvimento com Docker

```bash
# Rodar ambos os serviços
docker-compose -f docker-compose.dev.yml up

# Ou em background
docker-compose -f docker-compose.dev.yml up -d

# Ver logs
docker-compose -f docker-compose.dev.yml logs -f

# Parar serviços
docker-compose -f docker-compose.dev.yml down
```

### Opção 3: Produção com Docker

```bash
# Build e rodar
docker-compose up --build

# Ou em background
docker-compose up -d --build

# Parar serviços
docker-compose down
```

## 🔥 Deploy no Firebase

### 1. Instalar Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Login no Firebase
```bash
firebase login
```

### 3. Inicializar projeto (primeira vez)
```bash
cd frontend
firebase init hosting
```

Escolha:
- Use an existing project ou crie um novo
- Public directory: `out`
- Configure as a single-page app: `Yes`
- Set up automatic builds with GitHub: `No` (ou Yes se quiser CI/CD)

### 4. Build e Deploy
```bash
# Build da aplicação
npm run build

# Deploy
firebase deploy

# Ou tudo de uma vez
npm run build && firebase deploy
```

### 5. Scripts úteis no package.json do frontend

Adicione ao `package.json`:
```json
{
  "scripts": {
    "build": "next build",
    "deploy": "npm run build && firebase deploy",
    "deploy:preview": "npm run build && firebase hosting:channel:deploy preview"
  }
}
```

## 🔒 Segurança

O projeto implementa várias camadas de segurança:

- **Helmet.js** - Headers de segurança HTTP
- **CORS** - Controle de origem cruzada
- **Rate Limiting** - Proteção contra DDoS
- **Validação Zod** - Validação de entrada de dados
- **TypeScript** - Tipagem estática para prevenir erros
- **Environment Variables** - Credenciais em variáveis de ambiente

## 🔧 Configuração de Ambiente

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend (.env)
```env
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# Email Configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
EMAIL_FROM=noreply@offdata.com
EMAIL_TO=contato@offdata.com
```

## 📝 API Endpoints

### POST /api/v1/contact
Enviar mensagem de contato

**Body:**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "phone": "(11) 99999-9999",
  "company": "Empresa LTDA",
  "message": "Gostaria de conhecer mais sobre o Homeclick",
  "projectInterest": "homeclick"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!",
  "data": {
    "id": "contact-1234567890",
    "timestamp": "2025-11-04T12:00:00.000Z"
  }
}
```

### GET /health
Health check da API

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-11-04T12:00:00.000Z"
}
```

## 🎨 Customização

### Cores (Tailwind)
As cores principais estão configuradas com gradientes:
- Azul: `from-blue-600 to-cyan-600`
- Verde: `from-green-500 to-emerald-600`
- Roxo: `from-purple-500 to-indigo-600`
- Laranja: `from-orange-500 to-red-500`

Para alterar, edite as classes nos componentes ou configure no `tailwind.config.ts`.

### Projetos
Para adicionar/editar projetos, modifique o array `projects` em:
`frontend/components/Projects.tsx`

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 📞 Contato

**OffData** - contato@offdata.com

Site: [Em breve no Firebase]

---

Desenvolvido com ❤️ pela equipe OffData
