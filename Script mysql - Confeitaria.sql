CREATE TABLE categorias (
    idCategorias INT PRIMARY KEY AUTO_INCREMENT,
    tipoCategorias VARCHAR(30)
);

CREATE TABLE receitas (
    idReceitas INT PRIMARY KEY AUTO_INCREMENT,
    idCategorias INT,
    titulo VARCHAR(40),
    ingredientes varchar(200),
    tempo_preparo VARCHAR(30),
    FOREIGN KEY (idCategorias) REFERENCES categorias(idCategorias)
);

INSERT INTO categorias (tipoCategorias)
VALUES('Saladas'),('Sopas'),('Refogados'),('Purês'),('Sobremesas'),('Bolos'),('Tortas'),('Pudins'),('Doces'),('Sorvetes'),('Pães'),('Biscoitos'),('Muffins'),('Torradas'),('Caldos'),('Cremes');