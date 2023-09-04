## Documentação da API

### Obter Todas as Categorias

**Rota:** `GET /categoria`
**Descrição:** Recupera uma lista de todas as categorias do banco de dados, ordenadas por nome.
**Resposta:**

```json
[
    {
        "codigo": 1,
        "nome": "Categoria 1"
    },
    {
        "codigo": 2,
        "nome": "Categoria 2"
    }
]
```

### Adicionar Categoria

**Rota:** `POST /categoria`
**Descrição:** Adiciona uma nova categoria ao banco de dados.
**Corpo da Requisição:**

```json
{
    "nome": "Nova Categoria"
}
```
**Resposta:**

```json
{
    "codigo": 3,
    "nome": "Nova Categoria"
}
```

### Atualizar Categoria

**Rota:** `PUT /categoria`
**Descrição:** Atualiza uma categoria existente no banco de dados.
**Parâmetros da Requisição:**

| Parâmetro | Tipo   | Descrição           |
|-----------|--------|---------------------|
| `codigo`  | int    | Código da categoria |

**Corpo da Requisição:**

```json
{
    "codigo": 1,
    "nome": "Categoria Atualizada"
}
```
**Resposta:**

```json
{
    "codigo": 1,
    "nome": "Categoria Atualizada"
}
```

### Excluir Categoria

**Rota:** `DELETE /categoria/:codigo`
**Descrição:** Exclui uma categoria do banco de dados.
**Parâmetros da Requisição:**

| Parâmetro | Tipo   | Descrição           |
|-----------|--------|---------------------|
| `codigo`  | int    | Código da categoria |

**Resposta:**

```json
{
    "message": "Categoria removida com sucesso"
}
```

### Obter Categoria por Código

**Rota:** `GET /categoria/:codigo`
**Descrição:** Recupera uma categoria do banco de dados com base em seu código.
**Parâmetros da Requisição:**

| Parâmetro | Tipo   | Descrição           |
|-----------|--------|---------------------|
| `codigo`  | int    | Código da categoria |

**Resposta:**

```json
{
    "codigo": 1,
    "nome": "Categoria 1"
}
```

### Obter Todos os Produtos

**Rota:** `GET /produto`
**Descrição:** Recupera uma lista de todos os produtos do banco de dados, incluindo informações da categoria a que pertencem.
**Resposta:**

```json
[
    {
        "codigo": 1,
        "nome": "Produto 1",
        "descricao": "Descrição do Produto 1",
        "quantidade_estoque": 10,
        "ativo": true,
        "valor": 29.99,
        "data_cadastro": "2023-09-04",
        "categoria": 1,
        "categoria_nome": "Categoria 1"
    },
    {
        "codigo": 2,
        "nome": "Produto 2",
        "descricao": "Descrição do Produto 2",
        "quantidade_estoque": 5,
        "ativo": true,
        "valor": 19.99,
        "data_cadastro": "2023-09-04",
        "categoria": 2,
        "categoria_nome": "Categoria 2"
    }
]
```
## Adicionar Produto

**Rota:** `POST /produto`
**Descrição:** Adiciona um novo produto ao banco de dados.
**Corpo da Requisição:**
```json
{
    "nome": "Novo Produto",
    "descricao": "Descrição do Novo Produto",
    "quantidade_estoque": 20,
    "ativo": true,
    "valor": 39.99,
    "categoria": 1
}
**Resposta:**

```json
{
    "codigo": 3,
    "nome": "Novo Produto",
    "descricao": "Descrição do Novo Produto",
    "quantidade_estoque": 20,
    "ativo": true,
    "valor": 39.99,
    "data_cadastro": "2023-09-04",
    "categoria": 1,
    "categoria_nome": "Categoria 1"
}
```

### Atualizar Produto

**Rota:** `PUT /produto`
**Descrição:** Atualiza um produto existente no banco de dados.
**Parâmetros da Requisição:**

| Parâmetro | Tipo   | Descrição           |
|-----------|--------|---------------------|
| `codigo`  | int    | Código do produto   |

**Corpo da Requisição:**

```json
{
    "codigo": 1,
    "nome": "Produto Atualizado",
    "descricao": "Descrição Atualizada",
    "quantidade_estoque": 15,
    "ativo": true,
    "valor": 49.99,
    "categoria": 2
}
```
**Resposta:**

```json
{
    "codigo": 1,
    "nome": "Produto Atualizado",
    "descricao": "Descrição Atualizada",
    "quantidade_estoque": 15,
    "ativo": true,
    "valor": 49.99,
    "data_cadastro": "2023-09-04",
    "categoria": 2,
    "categoria_nome": "Categoria 2"
}
```

### Excluir Produto

**Rota:** `DELETE /produto/:codigo`

**Descrição:** Exclui um produto do banco de dados.

#### Parâmetros da Requisição:

| Parâmetro | Tipo | Descrição         |
|-----------|------|-------------------|
| codigo    | int  | Código do produto |

**Resposta:**

```json
{
    "message": "Produto removido com sucesso"
}
```

### Obter Produto por Código

**Rota:** `GET /produto/:codigo`

**Descrição:** Recupera um produto do banco de dados com base em seu código.

#### Parâmetros da Requisição:

| Parâmetro | Tipo | Descrição         |
|-----------|------|-------------------|
| codigo    | int  | Código do produto |

**Resposta:**

```json
{
    "codigo": 1,
    "nome": "Produto 1",
    "descricao": "Descrição do Produto 1",
    "quantidade_estoque": 10,
    "ativo": true,
    "valor": 19.99,
    "data_cadastro": "2023-09-04",
    "categoria": 1,
    "categoria_nome": "Categoria 1"
}
```