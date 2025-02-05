# API CRM PRO

Esta é a API do CRMPro, um sistema de gerenciamento de relacionamento com clientes.

## Requisitos

- Node.js
- MySQL

## Instalação

1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o banco de dados no arquivo `knexfile.js` e crie um arquivo `.env` na pasta `src` com as seguintes variáveis:
   ```env
   USER_SMTP=""
   EMAIL_ADDRESS=""
   PASSWORD_SMTP=""
   HOT_SMTP=""
   PORT_SMTP=
   ```

## Execução

Para iniciar a aplicação em modo de desenvolvimento:
```sh
npm run dev
```

Para iniciar a aplicação em modo de produção:
```sh
npm start
```

## Endpoints

### Autenticação

- **POST /login**
  - Request Body:
    ```json
    {
      "user": "string",
      "password": "string"
    }
    ```
  - Response:
    ```json
    {
      "token": "string"
    }
    ```

### Usuários

- **POST /users**
  - Request Body:
    ```json
    {
      "nome": "string",
      "telefone": "string",
      "email": "string",
      "user": "string",
      "password": "string"
    }
    ```
  - Response:
    ```json
    {
      "id": "number"
    }
    ```

### Clientes

- **POST /clients**
  - Request Body:
    ```json
    {
      "nome": "string",
      "sexo": "string",
      "email": "string",
      "telefone": "string",
      "id_user": "number"
    }
    ```
  - Response:
    ```json
    {
      "id": "number"
    }
    ```

### Produtos

- **POST /products**
  - Request Body:
    ```json
    {
      "modelo": "string",
      "fabricante": "string",
      "tipo": "string",
      "valor_unitario": "number",
      "valor_revenda": "number",
      "id_user": "number"
    }
    ```
  - Response:
    ```json
    {
      "id": "number"
    }
    ```

## Estrutura do Projeto

```
src/
  .env
  app.js
  connection/
    connection.js
    migrations/
  controllers/
    auth.controller.js
    clients.controller.js
    home.controller.js
    products.controller.js
    register.controller.js
    user.controller.js
  core/
  routes/
    routes.js
  services/
    calculateRepurchaseDate.js
    createClient.js
    createProduct.js
    createRegister.js
    createUser.js
    selectDescard.js
    selectToken.js
    token.js
  validations/
    attributes.js
    auth.js
```

## Licença

Este projeto está licenciado sob a licença MIT.
