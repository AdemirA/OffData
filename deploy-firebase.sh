#!/bin/bash

# Script para fazer build e deploy no Firebase

echo "🔥 Build e Deploy no Firebase"
echo ""

# Verificar se Firebase CLI está instalado
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI não encontrado!"
    echo "📦 Instalando Firebase CLI..."
    npm install -g firebase-tools
fi

# Verificar login
echo "🔐 Verificando autenticação Firebase..."
firebase login

# Build do frontend
echo ""
echo "📦 Building frontend..."
cd frontend
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    echo ""
    echo "🚀 Fazendo deploy..."
    firebase deploy
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Deploy concluído com sucesso!"
        echo "🌐 Sua aplicação está online!"
    else
        echo ""
        echo "❌ Erro no deploy!"
        exit 1
    fi
else
    echo ""
    echo "❌ Erro no build!"
    exit 1
fi

cd ..
