-- DDL: Criação das tabelas
-- ==================================

-- Tabela de Cardápio
CREATE TABLE Cardapio (
    cardapio_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_cafe VARCHAR(100) NOT NULL UNIQUE,
    descricao TEXT,
    preco_unitario DECIMAL(10, 2) NOT NULL
);

-- Tabela de Comanda
CREATE TABLE Comanda (
    comanda_id INT PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    mesa INT NOT NULL,
    nome_cliente VARCHAR(100) NOT NULL
);

-- Tabela de Itens da Comanda
CREATE TABLE ItemComanda (
    item_comanda_id INT PRIMARY KEY AUTO_INCREMENT,
    comanda_id INT NOT NULL,
    cardapio_id INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (comanda_id) REFERENCES Comanda(comanda_id) ON DELETE CASCADE,
    FOREIGN KEY (cardapio_id) REFERENCES Cardapio(cardapio_id) ON DELETE CASCADE,
    UNIQUE (comanda_id, cardapio_id) -- Não permitir o mesmo café duas vezes na mesma comanda
);

-- ==================================
-- DML: Consultas solicitadas
-- ==================================

-- 1) Listagem do cardápio ordenada por nome
SELECT nome_cafe, descricao, preco_unitario
FROM Cardapio
ORDER BY nome_cafe;

-- 2) Listagem de comandas com itens da comanda
SELECT C.comanda_id, C.data, C.mesa, C.nome_cliente, 
       CA.nome_cafe, CA.descricao, IC.quantidade, CA.preco_unitario, 
       (IC.quantidade * CA.preco_unitario) AS preco_total
FROM Comanda C
JOIN ItemComanda IC ON C.comanda_id = IC.comanda_id
JOIN Cardapio CA ON IC.cardapio_id = CA.cardapio_id
ORDER BY C.data, C.comanda_id, CA.nome_cafe;

-- 3) Listagem de comandas com valor total da comanda
SELECT C.comanda_id, C.data, C.mesa, C.nome_cliente, 
       SUM(IC.quantidade * CA.preco_unitario) AS valor_total_comanda
FROM Comanda C
JOIN ItemComanda IC ON C.comanda_id = IC.comanda_id
JOIN Cardapio CA ON IC.cardapio_id = CA.cardapio_id
GROUP BY C.comanda_id, C.data, C.mesa, C.nome_cliente
ORDER BY C.data;

-- 4) Listagem de comandas com mais de um tipo de café
SELECT C.comanda_id, C.data, C.mesa, C.nome_cliente, 
       SUM(IC.quantidade * CA.preco_unitario) AS valor_total_comanda
FROM Comanda C
JOIN ItemComanda IC ON C.comanda_id = IC.comanda_id
JOIN Cardapio CA ON IC.cardapio_id = CA.cardapio_id
GROUP BY C.comanda_id, C.data, C.mesa, C.nome_cliente
HAVING COUNT(IC.cardapio_id) > 1
ORDER BY C.data;

-- 5) Total de faturamento por data
SELECT C.data, SUM(IC.quantidade * CA.preco_unitario) AS faturamento_total
FROM Comanda C
JOIN ItemComanda IC ON C.comanda_id = IC.comanda_id
JOIN Cardapio CA ON IC.cardapio_id = CA.cardapio_id
GROUP BY C.data
ORDER BY C.data;