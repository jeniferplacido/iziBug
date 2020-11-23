#!/bin/sh
echo "[Script - start.sh] Iniciando Database."
mongod
echo "[Script - start.sh] Instalando pacote do express."
yarn
echo "[Script - start.sh] Iniciando servidor nodeJS."
npx nodemon server.js
echo "[Script - start.sh] Iniciando servidor react."
yarn start