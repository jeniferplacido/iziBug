#!/bin/sh
echo "[Script - start.sh] Instalando pacote do express."
npm install
echo "[Script - start.sh] Iniciando servidor react."
npx nodemon server.js