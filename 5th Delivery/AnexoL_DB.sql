-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 24-Jan-2020 √†s 23:01
-- Vers√£o do servidor: 8.0.13-4
-- vers√£o do PHP: 7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `EFrCxDdGao`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `Categories`
--

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Categories`
--

INSERT INTO `Categories` (`id`, `name`, `image`, `description`) VALUES
(1, 'Jogging', 'https://static01.nyt.com/images/2014/01/10/health/10well_askwell/10well_askwell-tmagArticle.jpg', 'Jogging is a form of trotting or running at a slow or leisurely pace.'),
(2, 'Photography', 'https://d36iur3orme9ke.cloudfront.net/wp-content/uploads/2016/06/blog_top-image_Open-Source-Photography.jpg', 'Photography is the art, application and practice of creating durable images by recording light or other electromagnetic radiation.'),
(3, 'Cooking', 'https://assets.epicurious.com/photos/5dc6dbfbd482f10008d4fad9/4:3/w_4013,h_3010,c_limit/NewJoyCooking_HERO_110519_6023.jpg', 'Cooking or cookery is the art, technology, science and craft of preparing food for consumption.'),
(4, 'Gardening', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gardening-1521662873.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*', 'Gardening is the practice of growing and cultivating plants as part of horticulture.'),
(5, 'Drawing', 'https://xo3d.co.uk/wp-content/uploads/2019/11/Colour-Palette.jpg', 'Drawing is a form of visual art in which a person uses various drawing instruments to mark paper or another two-dimensional medium.'),
(6, 'Knitting', 'https://static.wixstatic.com/media/baafc9_775d60d666fe4395820506d79d1b9e6d~mv2.jpg', 'Knitting is a method by which yarn is manipulated to create a textile or fabric; it is used in many types of garments.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `EventGroup`
--

CREATE TABLE `EventGroup` (
  `idRelation` int(11) NOT NULL,
  `idUsers` int(11) NOT NULL,
  `idEvent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `EventGroup`
--

INSERT INTO `EventGroup` (`idRelation`, `idUsers`, `idEvent`) VALUES
(77, 2, 80),
(78, 1, 80),
(80, 1, 82),
(81, 1, 83),
(83, 1, 85),
(84, 1, 88),
(85, 1, 89),
(87, 1, 92),
(88, 1, 93);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Events`
--

CREATE TABLE `Events` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `latlon` point NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `host` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `status` varchar(15) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Events`
--

INSERT INTO `Events` (`id`, `name`, `description`, `latlon`, `image`, `host`, `category`, `startDate`, `endDate`, `status`) VALUES
(75, 'Correr', 'Correr bastante', '\0\0\0\0\0\0\0yØèCYC@\0\0’ws\"¿', NULL, 9, 1, '2020-01-18 01:00:00', '2020-01-22 01:00:00', 'expired'),
(76, 'Evento Exemplo Funcional', 'Teste Localhost', '\0\0\0\0\0\0\0Â§ókC@\0ÄqW‡\"¿', NULL, 1, 1, '2020-01-07 10:00:00', '2020-01-31 10:00:00', 'deleted'),
(79, 'Fotografias √†s nuvens', 'Exato', '\0\0\0\0\0\0\0ıíÖ∞£kC@\0Ä—KÊ\"¿', NULL, 1, 2, '2020-01-15 10:00:00', '2020-01-15 10:00:00', 'expired'),
(80, 'This is an Event', 'this is the description of the event', '\0\0\0\0\0\0\0dÀVßC@\0 @∫!¿', NULL, 1, 1, '2020-01-22 12:00:00', '2020-01-31 12:00:00', 'deleted'),
(82, 'Teste', 'adasd', '\0\0\0\0\0\0\0OóÿÏlC@\0ÄÁ\"¿', NULL, 1, 1, '2020-01-24 10:00:00', '2020-01-24 10:00:00', 'deleted'),
(83, 'asd', 'asd', '\0\0\0\0\0\0\0`>º:lC@\0Ä{˙Á\"¿', NULL, 1, 1, '2020-01-24 10:00:00', '2020-01-24 10:00:00', 'deleted'),
(84, 'asdasd', 'asdasd', '\0\0\0\0\0\0\0æ\Z‘ˇlC@\0ÄõºÁ\"¿', NULL, 1, 1, '2020-01-24 10:00:00', '2020-01-25 10:00:00', 'deleted'),
(85, 'Correr em Santos', 'Correr Bastante', '\0\0\0\0\0\0\0$÷{ZC@\0¿∞P\"¿', NULL, 1, 1, '2020-01-24 10:00:00', '2020-01-30 10:00:00', 'deleted'),
(86, 'Teste', 'Teste', '\0\0\0\0\0\0\0∏ÕÚµ\\üC@\0@¿f¿', NULL, 2, 1, '2020-01-24 10:00:00', '2020-01-24 00:00:00', 'deleted'),
(87, 'Test1', 'Test1', '\0\0\0\0\0\0\0;ºøïÓbC@ ‡Ãó\"¿', NULL, 2, 1, '2020-01-24 22:00:00', '2020-01-24 12:00:00', 'deleted'),
(88, 'Nome', 'Descri√ß√£o', '\0\0\0\0\0\0\0è=Ò5âZC@\0$\0ƒ¿D\"¿', NULL, 2, 2, '2020-01-24 10:00:00', '2020-01-24 00:00:00', 'deleted'),
(89, 'Nome', 'Descri√ß√£o', '\0\0\0\0\0\0\0Ëô”âZC@\0$\0î√D\"¿', NULL, 2, 2, '2020-01-24 10:00:00', '2020-01-24 00:00:00', 'deleted'),
(90, 'TesteNome', 'TesteDescri√ß√£o', '\0\0\0\0\0\0\0¨\'JüâZC@$\0ºπD\"¿', NULL, 2, 3, '2020-01-24 10:00:00', '2020-01-24 00:00:00', 'deleted'),
(91, 'Nome', 'Descri√ß√£o', '\0\0\0\0\0\0\0è=Ò5âZC@\0$\0p∫D\"¿', NULL, 2, 3, '2020-01-24 10:00:00', '2020-01-24 00:00:00', 'deleted'),
(92, 'Nome', 'Descri√ß√£o', '\0\0\0\0\0\0\0» g¬âZC@$\08∂D\"¿', NULL, 2, 3, '2020-01-24 10:00:00', '2020-01-24 00:00:00', 'deleted'),
(93, 'Nome', 'Descri√ß√£o', '\0\0\0\0\0\0\0qÑ,|âZC@$\0®æD\"¿', NULL, 2, 3, '2020-01-24 10:00:00', '2020-01-24 00:00:00', 'active'),
(94, 'Correr em Santos', 'Correr muito', '\0\0\0\0\0\0\0[zjœÜZC@\0¿)P\"¿', NULL, 1, 1, '2020-01-27 10:00:00', '2020-01-28 10:00:00', 'active'),
(95, 'Fotografias a aves raras', 'Fotos a aves raras muito bonitas', '\0\0\0\0\0\0\0Æ˙˙\nRaC@\0¿≠x\"¿', NULL, 1, 2, '2020-01-27 10:00:00', '2020-01-28 10:00:00', 'active'),
(96, 'Cozinha do Chefe', 'Evento de culinaria muito bom para novatos', '\0\0\0\0\0\0\04∂7Ã-lC@\0¿›˜¿\"¿', NULL, 1, 3, '2020-01-27 10:00:00', '2020-01-28 10:00:00', 'active'),
(97, 'Corrida no passeio', 'Correr muito na berma', '\0\0\0\0\0\0\0ÄÀYZC@\0Ä€‚r\"¿', NULL, 1, 1, '2020-01-27 10:00:00', '2020-01-28 10:00:00', 'active'),
(98, 'Corrida no Parque', 'Corrida matinal no parque porque faz bem a saude', '\0\0\0\0\0\0\0È6#ükC@\0Ä{¯⁄\"¿', NULL, 1, 1, '2020-01-24 10:00:00', '2020-01-25 10:00:00', 'active');

-- --------------------------------------------------------

--
-- Estrutura da tabela `UserPreferences`
--

CREATE TABLE `UserPreferences` (
  `idCat` int(11) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `UserPreferences`
--

INSERT INTO `UserPreferences` (`idCat`, `idUser`) VALUES
(1, 1),
(5, 1),
(6, 1),
(1, 3),
(3, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `latlon` point DEFAULT NULL,
  `distrito` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mail` varchar(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `discId` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Users`
--

INSERT INTO `Users` (`id`, `name`, `latlon`, `distrito`, `mail`, `password`, `discId`) VALUES
(1, 'Manuel B.', '\0\0\0\0\0\0\09ˆGsøkC@úΩÿ 8€\"¿', 'Lisboa', 'admin@GroupUp', 'admin123', '152794805464858624'),
(2, 'Bruno R.', NULL, 'Lisboa', 'Bac.R@outlook.com', 'boostedbymanuel', '152794805464858624'),
(3, 'TestUser', NULL, 'Lisboa', 'testuser@groupup', 'teste', NULL),
(5, 'dude', NULL, 'Lisboa', 'dude@', 'dorce0-fobmoK-jiqkor', NULL),
(6, 'fernando', NULL, 'Lisboa', 'fernando.ramos@farminveste.pt', 'teste', NULL),
(7, 'Block around Corners', NULL, 'Leiria', 'block@asd', 'asd', NULL),
(9, 'MiB', NULL, 'Leiria', 'miguel.bugalho@gmail.com', 'aaa123', '260843155237109772'),
(10, 'Profefor Rui', NULL, 'Leiria', 'neto@zippar.com', 'soulindo', NULL),
(11, 'test', NULL, NULL, 'test@gmail.com', '123', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `EventGroup`
--
ALTER TABLE `EventGroup`
  ADD PRIMARY KEY (`idRelation`),
  ADD KEY `idEvent` (`idEvent`),
  ADD KEY `idUsers` (`idUsers`);

--
-- Indexes for table `Events`
--
ALTER TABLE `Events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `UserPreferences`
--
ALTER TABLE `UserPreferences`
  ADD UNIQUE KEY `idx_pref` (`idCat`,`idUser`),
  ADD KEY `idUser` (`idUser`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `EventGroup`
--
ALTER TABLE `EventGroup`
  MODIFY `idRelation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT for table `Events`
--
ALTER TABLE `Events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `EventGroup`
--
ALTER TABLE `EventGroup`
  ADD CONSTRAINT `EventGroup_ibfk_1` FOREIGN KEY (`idEvent`) REFERENCES `Events` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `EventGroup_ibfk_2` FOREIGN KEY (`idUsers`) REFERENCES `Users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `UserPreferences`
--
ALTER TABLE `UserPreferences`
  ADD CONSTRAINT `UserPreferences_ibfk_1` FOREIGN KEY (`idCat`) REFERENCES `Categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `UserPreferences_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `Users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
