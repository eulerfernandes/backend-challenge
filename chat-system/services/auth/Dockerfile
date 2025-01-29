FROM node:18-alpine

# Instala o pnpm globalmente
RUN npm install -g pnpm

WORKDIR /app

# Copia apenas os arquivos essenciais para instalar dependências
COPY package.json ./

RUN pnpm install

COPY . .

CMD ["pnpm", "start"]
