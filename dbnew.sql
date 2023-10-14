-- Tabela Editoras
CREATE TABLE editoras (
    codigo SERIAL not null PRIMARY KEY,
    nome VARCHAR(40) NOT NULL
);

-- Tabela Livros
CREATE TABLE livros (
    codigo SERIAL not null PRIMARY KEY,
    titulo VARCHAR(40) NOT NULL,
    autor VARCHAR(40),
    preco DECIMAL(10, 2),  -- Coluna para preço em formato decimal
    descricao TEXT,        -- Coluna para descrição em formato de texto
    editora INT,
    FOREIGN KEY (editora) REFERENCES Editoras(codigo)
);

-- Inserir algumas editoras de exemplo
INSERT INTO editoras (nome) VALUES
    ('Editora A'),
    ('Editora B'),
    ('Editora C');

-- Inserir alguns livros relacionados a editoras
INSERT INTO livros (titulo, autor, preco, descricao, editora) VALUES
    ('Livro 1', 'Autor 1', 19.99, 'Descrição do Livro 1', 1),
    ('Livro 2', 'Autor 2', 24.99, 'Descrição do Livro 2', 1),
    ('Livro 3', 'Autor 3', 14.99, 'Descrição do Livro 3', 2);
