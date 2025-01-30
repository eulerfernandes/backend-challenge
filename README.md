# Backend Challenge - Real-Time Chat

![Tech Stack](https://img.shields.io/badge/Tech%20Stack-Node.js%20%7C%20TypeScript%20%7C%20PostgreSQL%20%7C%20Redis%20%7C%20Docker%20%7C%20Socket.io-blue)

## 📌 Sobre o Projeto
Este projeto é um **sistema de chat em tempo real** desenvolvido como parte de um teste técnico para a **Labzz**. Ele foi construído com foco em **escalabilidade**, **performance** e **segurança**, utilizando tecnologias modernas para garantir um funcionamento eficiente.

## 🚀 Tecnologias Utilizadas
### Backend:
- **Node.js** com **TypeScript** para um código mais seguro e organizado.
- **PostgreSQL** como banco de dados relacional.
- **Redis** para caching e pub/sub, garantindo um chat rápido e responsivo.
- **Socket.io** para comunicação bidirecional em tempo real.
- **Docker** para facilitar a implantação e execução em diferentes ambientes.
- **BullMQ** para processamento assíncrono de tarefas.
- **ElasticSearch** para indexação e busca eficiente de mensagens.
- **JWT + OAuth2** para autenticação segura.

## 📂 Estrutura do Projeto
```
/backend
├── src
│   ├── config/          # Configurações globais do sistema
│   ├── controllers/     # Lógica dos endpoints
│   ├── middleware/      # Middlewares de segurança e validação
│   ├── models/          # Definição das entidades do banco de dados
│   ├── routes/          # Rotas da API
│   ├── services/        # Regras de negócio e comunicação com o banco
│   ├── utils/           # Funções auxiliares
│   └── index.ts         # Ponto de entrada da aplicação
├── Dockerfile           # Configuração do Docker
├── .env.example         # Exemplo de variáveis de ambiente
├── package.json         # Dependências do projeto
└── README.md            # Documentação do projeto
```

## ⚡ Como Executar o Projeto
### 🛠️ Requisitos
Antes de iniciar, certifique-se de ter instalado:
- **Node.js** (versão recomendada: 18+)
- **Docker** e **Docker Compose**
- **PostgreSQL** e **Redis**

### 📥 Clonando o Repositório
```bash
git clone https://github.com/eulerfernandes/backend-challenge.git
cd backend-challenge
```

### 🔧 Configuração do Ambiente
Crie um arquivo `.env` baseado no `.env.example`:
```bash
cp .env.example .env
```
Edite o `.env` com suas configurações locais.

### 🚢 Executando com Docker
```bash
docker-compose up --build
```
Isso iniciará o backend com PostgreSQL e Redis prontos para uso.

### 🏃 Executando Localmente (sem Docker)
```bash
npm install  # Instala dependências
npm run dev  # Inicia o servidor em modo desenvolvimento
```

## 🔥 Endpoints da API
A API segue padrões REST e conta com os seguintes endpoints principais:
- **Autenticação:** `/auth/login`, `/auth/register`, `/auth/logout`
- **Usuários:** `/users`, `/users/:id`
- **Mensagens:** `/messages`, `/messages/:id`
- **WebSockets:** `/ws` para comunicação em tempo real

A documentação completa da API está disponível no **Swagger**, rodando em `/api-docs`.

## 📈 Monitoramento e Logging
- **Prometheus + Grafana** para monitoramento de métricas.
- **Datadog** para logging centralizado.

## 📌 Próximos Passos
- [ ] Melhorar a documentação da API
- [ ] Implementar testes automatizados
- [ ] Otimizar a busca com ElasticSearch
- [ ] Criar exemplos de requisição e resposta para a API
- [ ] Adicionar screenshots e diagramas da arquitetura do projeto
---
📌 **Autor:** [Euler Fernandes](https://github.com/eulerfernandes) | 🚀 **Desenvolvido para:** Labzz

