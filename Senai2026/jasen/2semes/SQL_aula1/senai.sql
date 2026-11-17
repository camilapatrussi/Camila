CREATE DATABASE db_senai;

Use db_senai;

-- criação de tabela --

CREATE TABLE cliente(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT, 
    nome_cliente VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    dt_nasc DATE NOT NULL
);

CREATE TABLE produto(
    id_produto INT PRIMARY KEY AUTO_INCREMENT, 
    produto VARCHAR(100) NOT NULL,
    dt_entrega DATE NOT NULL,
    preco DECIMAL(20, 2) NOT NULL,
    qtd INT NOT NULL
);

CREATE TABLE venda(
    id_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    data_entrada DATE NOT N
);



INSERT INTO cliente(nome_cliente, email, dt_nasc)
VALUES ("Camila", "camilagarcia@gmail.com", "2009-09-19");

INSERT INTO cliente(nome_cliente, email, dt_nasc)
VALUES ("Luis", "luisfernando@gmail.com", "1980-03-19");

INSERT INTO cliente(nome_cliente, email, dt_nasc)
VALUES ("Jansen", "jansendasilva@gmail.com", "1980-05-19");

Use db_senai;

SELECT * FROM cliente

Use db_senai;

INSERT INTO produto(produto, dt_entrega, preco, qtd)
VALUES ("Chocolate", "2026-09-30", 6.99, 5);

INSERT INTO produto(produto, dt_entrega, preco, qtd)
VALUES ("Fini", "2026-09-27", 4.99, 4);

INSERT INTO produto(produto, dt_entrega, preco, qtd)
VALUES ("Salgadinho", "2026-09-28", 8.99, 3);

Use db_senai;

jasen/2semes/atividadesBCD/SQL_aula1

Use db_senai;

INSERT INTO venda(id_cliente, id_produto, data_entrada)
VALUES ( 1, 1, "2026-09-30");

INSERT INTO venda(id_cliente, id_produto, data_entrada)
VALUES ( 2, 2, "2026-09-27");

INSERT INTO venda(id_cliente, id_produto, data_entrada)
VALUES ( 3, 3, "2026-09-25");


Use db_senai;

SELECT * FROM venda

Use db_senai;

-- atribuicao de chave estrangeira do cliente na tabela venda (FK) --

ALTER TABLE venda
ADD CONSTRAINT fk_venda_cliente
FOREIGN KEY (id_cliente)
REFERENCES cliente (id_cliente);

Use db_senai;

-- atribuicao de chave estrangeira do produto na tabela venda (FK) --

ALTER TABLE venda
ADD CONSTRAINT fk_venda_produto
FOREIGN KEY (id_produto)
REFERENCES produto (id_produto);

-- comando DELETE --

DELETE FROM produto WHERE id_produto = 4;
