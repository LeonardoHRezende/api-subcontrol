# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instala dependências sem cache do npm (pra não salvar lixo)
RUN npm ci --omit=dev

# Copia o resto do projeto
COPY . .

# Gera os arquivos JS
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

# Copia apenas o que é necessário pra rodar a app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3333

CMD ["node", "dist/main"]
