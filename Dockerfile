# Use uma imagem oficial do Node como base
FROM node:18

# Cria e entra na pasta do app
WORKDIR /app

# Copia os arquivos do projeto
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Instala o Prisma
RUN npx prisma generate

# Aplica as migrations em produção
RUN npx prisma migrate deploy

# Gera os arquivos JS a partir do TypeScript
RUN npm run build

# Expõe a porta usada pelo Nest
EXPOSE 3333

# Comando padrão
CMD ["npm", "run", "start:prod"]
