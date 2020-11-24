-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: blquuwyhye6u7xmtf4yd-mysql.services.clever-cloud.com:3306
-- Generation Time: Nov 24, 2020 at 03:00 PM
-- Server version: 8.0.15-5
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blquuwyhye6u7xmtf4yd`
--

-- --------------------------------------------------------

--
-- Table structure for table `encargado`
--

CREATE TABLE `encargado` (
  `documento` bigint(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `cargo` varchar(20) NOT NULL,
  `usuario` varchar(25) NOT NULL,
  `contraseña` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `encargado`
--

INSERT INTO `encargado` (`documento`, `nombre`, `cargo`, `usuario`, `contraseña`) VALUES
(100, 'ffdffsgsgh', 'master', 'fsfsfdsf', '454545'),
(200, 'dfdfd', 'master', 'fdgd', 'dgdgdf'),
(321, 'usuarioTest', 'master', 'Usuario', '123'),
(400, 'ggd', 'master', 'jjsjsj', 'hdhdhd'),
(600, 'master', 'master', 'master2', 'adad'),
(700, 'daniel', 'master', 'daniel', '455645454'),
(4454, 'fgfgf', 'student', 'fdsfs', 'sfsfs'),
(5554, '452152125', 'student', 'userr', '54545'),
(5555, 'sddfsd', 'master', 'user', '111'),
(20000, 'fabio andres', 'master', 'fabio', '100'),
(96666, 'nameeTest', 'student', 'usuarioTest', '5220000'),
(1521555, 'estudiante1', 'student', 'estudiante1', '1223'),
(1000089769, 'daniel pineda', 'encardago', 'pinedadaniel', '1000'),
(1000294875, 'Leiner Mendoza', 'Desarrollador ', 'leiner875', '1000294875'),
(1000294876, 'Cristian Quintero', 'Desarrollador', 'cristian876', '1000294876');

-- --------------------------------------------------------

--
-- Table structure for table `estudiante`
--

CREATE TABLE `estudiante` (
  `documento` varchar(24) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `cargo` varchar(12) NOT NULL,
  `usuario` varchar(25) NOT NULL,
  `contraseña` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `estudiante`
--

INSERT INTO `estudiante` (`documento`, `nombre`, `cargo`, `usuario`, `contraseña`) VALUES
('1216', 'pepito perez', 'student', 'pepito', '1233'),
('4545454', 'ffdffsgsgh', 'student', 'fsfsfdsf', '454545'),
('4554545', 'test2', 'student', 'test2', '123');

-- --------------------------------------------------------

--
-- Table structure for table `horas`
--

CREATE TABLE `horas` (
  `total_horas_alfa` int(3) DEFAULT '80',
  `total_horas_const` int(3) NOT NULL DEFAULT '50',
  `horas_realizadas_alfa` int(3) NOT NULL,
  `horas_realizadas_const` int(3) NOT NULL,
  `horas_restantes_const` int(11) NOT NULL,
  `horas_restantes_alfa` int(11) NOT NULL,
  `doc` varchar(24) NOT NULL,
  `fecha` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `horas`
--

INSERT INTO `horas` (`total_horas_alfa`, `total_horas_const`, `horas_realizadas_alfa`, `horas_realizadas_const`, `horas_restantes_const`, `horas_restantes_alfa`, `doc`, `fecha`) VALUES
(80, 50, 8, 0, 50, 72, '4554545', '2020-11-26'),
(80, 50, 8, 0, 50, 72, '1216', '2020-11-26'),
(80, 50, 28, 72, -22, 52, '4545454', '2020-11-19');

-- --------------------------------------------------------

--
-- Table structure for table `lugares_disponibles`
--

CREATE TABLE `lugares_disponibles` (
  `cod_lugar` int(5) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `descripcion` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lugares_disponibles`
--

INSERT INTO `lugares_disponibles` (`cod_lugar`, `nombre`, `descripcion`) VALUES
(123, 'Portería', 'disponible en la mañana'),
(565, 'sdfsdf', 'sfsd'),
(1234, 'Bibioteca', 'en este lugar se debe asistir de lunes a viernes en la jornada de la mañana.'),
(1235, 'Secretaria', 'en este lugar se debe asistir de lunes a viernes en la jornada de la tarde.'),
(1236, 'Salon 301', 'En este lugar se debe asistir de lunes a miércoles en la jornada de la tarde'),
(1237, 'Vaso de leche', 'En este lugar se debe asistir de lunes a jueves en la jornada de la tarde'),
(1238, 'Timbre', 'En este lugar se debe asistir de lunes a jueves en tu jornada.'),
(455445, 'fddfsa', 'sfdsf');

-- --------------------------------------------------------

--
-- Table structure for table `validateDoc`
--

CREATE TABLE `validateDoc` (
  `doc` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `validateDoc`
--

INSERT INTO `validateDoc` (`doc`) VALUES
('100'),
('200'),
('300'),
('400'),
('600'),
('700');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `encargado`
--
ALTER TABLE `encargado`
  ADD PRIMARY KEY (`documento`);

--
-- Indexes for table `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`documento`);

--
-- Indexes for table `horas`
--
ALTER TABLE `horas`
  ADD KEY `horas_estudiante` (`doc`);

--
-- Indexes for table `lugares_disponibles`
--
ALTER TABLE `lugares_disponibles`
  ADD PRIMARY KEY (`cod_lugar`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `horas`
--
ALTER TABLE `horas`
  ADD CONSTRAINT `horas_estudiante` FOREIGN KEY (`doc`) REFERENCES `estudiante` (`documento`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
