# Desafio Backend - Labzz


## Objetivo do Projeto
Desenvolver um backend escalável e seguro para um sistema de **chat em tempo real**, utilizando **boas práticas de desenvolvimento** e garantindo alta disponibilidade.

## Tecnologias Recomendadas
- **Linguagem:** Node.js com TypeScript
- **Arquitetura:** Microserviços, monorepo
- **Banco de Dados:** PostgreSQL
- **Cache:** Redis 
- **Mecanismo de Busca:** ElasticSearch
- **Comunicação em Tempo Real:** WebSockets (preferencialmente uWebSockets.js)
- **Autenticação e Segurança:** OAuth2, JWT, 2FA
- **Monitoramento:** Datadog

## Requisitos do Projeto
### 1. **Autenticação Segura**
- Implementação de OAuth2 para controle de acesso seguro
- Suporte a autenticação multifator (2FA)
- Hash de senhas utilizando algoritmos seguros ex: bcrypt

### 2. **Gerenciamento de Usuários**
- CRUD completo de usuários
- Definição de papéis e permissões (RBAC)

### 3. **Chat em Tempo Real**
- Comunicação via WebSockets
- Suporte a múltiplos usuários e grupos de conversa
- Mensagens criptografadas de ponta a ponta (opcional)

### 4. **Segurança e Compliance**
- Proteção contra injeção de SQL, XSS e CSRF
- Comunicação via HTTPS
- Armazenamento seguro de dados sensíveis

### 5. **Performance e Escalabilidade**
- Implementação de caching com Redis
- Uso de filas assíncronas para processamento de eventos (ex: RabbitMQ)
- Design stateless para facilitar escalabilidade horizontal

### 6. **Testes e Qualidade de Código**
- Testes unitários e de integração
- Cobertura de código mínima de 80%
- Aplicação de princípios SOLID e design patterns

### 7. **Documentação e Observabilidade**
- API documentada com Swagger/OpenAPI
- Logging estruturado e coleta de métricas de performance

### 8. **Boas Práticas de Versionamento**
- Uso de Git com estratégia de branching estruturada
- Commits semânticos seguindo o padrão Conventional Commits

### 9. **DevOps e Implantação**
- Containerização com Docker
- Pipeline de CI/CD configurado para deploy automatizado

## Como Rodar o Projeto
### 1. **Pré-requisitos**
Antes de iniciar, certifique-se de ter os seguintes requisitos instalados:
- [Node.js](https://nodejs.org/) (versão 16+ recomendada)
- [Docker](https://www.docker.com/) e Docker Compose
- PostgreSQL ou outro banco de dados compatível

### 2. **Instalação**
Clone o repositório e instale as dependências:
```sh
  git clone https://github.com/seu-usuario/nome-do-repositorio.git
  cd nome-do-repositorio
  npm install
```

### 3. **Configuração**
Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias:
```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/chat
JWT_SECRET=sua_chave_secreta
REDIS_HOST=localhost
REDIS_PORT=6379
```

### 4. **Rodando o projeto**
Para iniciar o servidor de desenvolvimento:
```sh
  npm run dev
```

### 5. **Executando Testes**
Para rodar os testes unitários:
```sh
  npm test
```

## Entrega do Desafio
- Repositório Git **público** contendo o código-fonte
- Documentação completa (README e Swagger/OpenAPI)
- Coleção Postman para testes de API
- Teste de performance com k6 ou ferramenta similar (bônus)

## Critérios de Avaliação
- Organização, estrutura e qualidade do código
- Implementação correta das funcionalidades
- Segurança e conformidade com padrões internacionais
- Performance e escalabilidade
- Qualidade e cobertura dos testes
- Clareza e completude da documentação
- Uso de boas práticas de arquitetura e design patterns



