# 🚀 Guia Rápido de Deploy

## 📦 1. Subir para o GitHub

```bash
# Na raiz do projeto (/Users/gutocosta/Desktop/OffData/OffData)

# Inicializar Git (se ainda não estiver inicializado)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "🎉 Initial commit - OffData Landing Page"

# Criar repositório no GitHub e adicionar remote
# (Substitua pelo seu URL do GitHub)
git remote add origin https://github.com/seu-usuario/offdata.git

# Fazer push
git push -u origin main
```

## 🔥 2. Deploy no Firebase

### Primeira vez:

```bash
# Entrar na pasta frontend
cd frontend

# Instalar Firebase CLI (se ainda não tiver)
npm install -g firebase-tools

# Fazer login
firebase login

# Inicializar Firebase
firebase init hosting

# Escolha:
# - "Use an existing project" (ou crie um novo)
# - Public directory: out
# - Single-page app: Yes
# - GitHub integration: No (ou Yes se quiser CI/CD)
```

### Fazer Deploy:

```bash
# Build do projeto
npm run build

# Deploy
firebase deploy

# Ou use o script automatizado da raiz do projeto:
cd ..
./deploy-firebase.sh
```

## 🐳 3. Docker (Opcional)

### Desenvolvimento:
```bash
docker-compose -f docker-compose.dev.yml up
```

### Produção:
```bash
docker-compose up --build
```

## ✅ Checklist Antes do Deploy

- [ ] Testar localmente: `npm run dev`
- [ ] Build funciona: `npm run build`
- [ ] Variáveis de ambiente configuradas
- [ ] `.env.example` criado (sem credenciais)
- [ ] README.md atualizado
- [ ] Testar formulário de contato
- [ ] Validar responsividade mobile

## 🔧 Comandos Úteis

```bash
# Ver logs do Firebase
firebase hosting:channel:list

# Deploy de preview
firebase hosting:channel:deploy preview

# Ver projeto ativo
firebase projects:list

# Trocar de projeto
firebase use projeto-id
```

## 🌐 URLs Após Deploy

- **GitHub**: https://github.com/seu-usuario/offdata
- **Firebase**: https://seu-projeto.web.app
- **Firebase (custom domain)**: Configure em Firebase Console > Hosting > Add custom domain
