# Escolha a imagem base
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Builder para produção
RUN npm run build

# Por padrão, use start:prod (pode ser sobrescrito via CMD no compose)
CMD ["npm", "run", "start:prod"]
