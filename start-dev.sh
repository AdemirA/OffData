#!/bin/bash

# Script para iniciar o projeto em desenvolvimento local

echo "🚀 Iniciando OffData Landing Page..."
echo ""

# Verificar se as dependências estão instaladas
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Instalando dependências do frontend..."
    cd frontend && npm install && cd ..
fi

if [ ! -d "backend/node_modules" ]; then
    echo "📦 Instalando dependências do backend..."
    cd backend && npm install && cd ..
fi

# Verificar se existe .env no backend
if [ ! -f "backend/.env" ]; then
    echo "⚙️  Criando arquivo .env do backend..."
    cp backend/.env.example backend/.env
    echo "✅ Arquivo .env criado. Configure suas variáveis de ambiente em backend/.env"
fi

echo ""
echo "✨ Iniciando serviços..."
echo ""
echo "🔗 Frontend: http://localhost:3000"
echo "🔗 Backend:  http://localhost:3001"
echo ""

# Abrir dois terminais para frontend e backend
if command -v osascript &> /dev/null; then
    # macOS
    osascript -e 'tell app "Terminal" to do script "cd '"$(pwd)"'/backend && npm run dev"'
    osascript -e 'tell app "Terminal" to do script "cd '"$(pwd)"'/frontend && npm run dev"'
else
    echo "⚠️  Por favor, abra dois terminais e execute:"
    echo "   Terminal 1: cd backend && npm run dev"
    echo "   Terminal 2: cd frontend && npm run dev"
fi
