-- Tabela Editoras
CREATE TABLE Editoras (
    codigo SERIAL not null PRIMARY KEY,
    nome_editora VARCHAR(255) NOT NULL
);

-- Tabela Livros
CREATE TABLE Livros (
    codigo SERIAL not null PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255),
    preco DECIMAL(10, 2),  -- Coluna para preço em formato decimal
    descricao TEXT,        -- Coluna para descrição em formato de texto
    editora INT,
    FOREIGN KEY (editora) REFERENCES Editoras(codigo)
);
