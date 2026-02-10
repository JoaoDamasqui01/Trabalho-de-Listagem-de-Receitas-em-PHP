
-- Estrutura para tabela `categorias`
--

CREATE TABLE `categorias` (
  `idCategorias` int(11) NOT NULL,
  `tipoCategorias` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `categorias`
--

INSERT INTO `categorias` (`idCategorias`, `tipoCategorias`) VALUES
(1, 'Saladas'),
(2, 'Sopas'),
(3, 'Refogados'),
(4, 'Purês'),
(5, 'Sobremesas'),
(6, 'Bolos'),
(7, 'Tortas'),
(8, 'Pudins'),
(9, 'Doces'),
(10, 'Sorvetes'),
(11, 'Pães'),
(12, 'Biscoitos'),
(13, 'Muffins'),
(14, 'Torradas'),
(15, 'Caldos'),
(16, 'Cremes'),
(17, 'Massa');

-- --------------------------------------------------------

--
-- Estrutura para tabela `receitas`
--

CREATE TABLE `receitas` (
  `idReceitas` int(11) NOT NULL PRIMARY KEY,
  `idCategorias` int(11) DEFAULT NULL,
  `titulo` varchar(40) DEFAULT NULL,
  `ingredientes` varchar(200) DEFAULT NULL,
  `tempoPreparo` varchar(30) DEFAULT NULL,
  FOREIGN KEY (`idCategorias`) REFERENCES `categorias`(`idCategorias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `receitas`
--

INSERT INTO `receitas` (`idReceitas`, `idCategorias`, `titulo`, `ingredientes`, `tempoPreparo`) VALUES
(1, 1, 'Vinagrete', '2 cebolas grandes cortadas em cubos\r\ntomate\r\n2 tomates sem semente e cortados em cubos\r\npimentão ver', '3Minutos'),
(2, 17, 'Macarrão', 'Meio pacote de macarrão de sua preferência;\r\n2 litros e meio de água;\r\nSal a gosto;\r\n4 colheres de sopa de óleo;\r\nMeia cebola em cubos;\r\nMeia xícara d', '1Hora');


