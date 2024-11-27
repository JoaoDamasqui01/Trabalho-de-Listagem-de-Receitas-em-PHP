-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27/11/2024 às 15:55
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `confeitaria3`
--

-- --------------------------------------------------------

--
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
  `idReceitas` int(11) NOT NULL,
  `idCategorias` int(11) DEFAULT NULL,
  `titulo` varchar(40) DEFAULT NULL,
  `ingredientes` varchar(200) DEFAULT NULL,
  `tempo_preparo` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `receitas`
--

INSERT INTO `receitas` (`idReceitas`, `idCategorias`, `titulo`, `ingredientes`, `tempo_preparo`) VALUES
(1, 1, 'Vinagrete', '2 cebolas grandes cortadas em cubos\r\ntomate\r\n2 tomates sem semente e cortados em cubos\r\npimentão ver', '3Minutos'),
(2, 17, 'Macarrão', 'Meio pacote de macarrão de sua preferência;\r\n2 litros e meio de água;\r\nSal a gosto;\r\n4 colheres de sopa de óleo;\r\nMeia cebola em cubos;\r\nMeia xícara d', '1Hora');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`idCategorias`);

--
-- Índices de tabela `receitas`
--
ALTER TABLE `receitas`
  ADD PRIMARY KEY (`idReceitas`),
  ADD KEY `idCategorias` (`idCategorias`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categorias`
--
ALTER TABLE `categorias`
  MODIFY `idCategorias` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `receitas`
--
ALTER TABLE `receitas`
  MODIFY `idReceitas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `receitas`
--
ALTER TABLE `receitas`
  ADD CONSTRAINT `receitas_ibfk_1` FOREIGN KEY (`idCategorias`) REFERENCES `categorias` (`idCategorias`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
