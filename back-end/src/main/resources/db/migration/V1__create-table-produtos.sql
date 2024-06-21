create table produtos(

    id bigint not null auto_increment,
    produto varchar(100) not null,
    codigo_barras varchar(100) not null unique,
    fornecedor varchar(100) not null,
    descricao varchar(1000) not null,
    marca varchar(100),
    modelo varchar(100),
    sku varchar(20),
    preco_venda varchar(10) not null,
    preco_compra varchar(10) not null,
    qtd_estoque varchar(10) not null,
    qtd_minima_estoque varchar(100) not null,
    categoria_produto varchar(100) not null,
    material varchar(100),
    unidade_dimensao char(2),
    unidade_peso varchar(100),
    unidade_volume varchar(100)

    primary key(id)

);