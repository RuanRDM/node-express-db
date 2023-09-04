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
