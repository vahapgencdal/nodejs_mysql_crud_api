-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.23 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for employeedb
DROP DATABASE IF EXISTS `employeedb`;
CREATE DATABASE IF NOT EXISTS `employeedb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `employeedb`;

-- Dumping structure for table employeedb.employees
DROP TABLE IF EXISTS `employees`;
CREATE TABLE IF NOT EXISTS `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastName` varchar(50) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `employeeCode` varchar(10) NOT NULL,
  `salary` double NOT NULL,
  `jobTitle` varchar(50) NOT NULL,
  `promoted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `employeeCode_UNIQUE` (`employeeCode`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table employeedb.employees: ~11 rows (approximately)
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` (`id`, `lastName`, `firstName`, `email`, `employeeCode`, `salary`, `jobTitle`, `promoted`) VALUES
	(1, 'Murphy', 'Diane', 'murphy.diane@classicmodelcars.com', 'x5800', 2000, 'President', 1),
	(2, 'Patterson', 'Mary', 'patterso.mary@classicmodelcars.com', 'x4611', 1200, 'VP Sales', 0),
	(3, 'Firrelli', 'Jeff', 'firrelli.jeff@classicmodelcars.com', 'x9273', 1002, 'VP Marketing', 0),
	(4, 'Patterson', 'William', 'patterson.william@classicmodelcars.com', 'x4871', 1056, 'Sales Manager (APAC)', 1),
	(5, 'Bondur', 'Gerard', 'bondur.gerard@classicmodelcars.com', 'x5408', 1056, 'Sale Manager (EMEA)', 0),
	(6, 'Bow', 'Anthony', 'abow@classicmodelcars.com', 'x5428', 1056, 'Sales Manager (NA)', 0),
	(7, 'Jennings', 'Leslie', 'ljennings@classicmodelcars.com', 'x3291', 1143, 'Sales Rep', 1),
	(8, 'Firrelli', 'Julie', 'jfirrelli@classicmodelcars.com', 'x2173', 1143, 'Sales Rep', 1),
	(9, 'Kato', 'Yoshimi', 'ykato@classicmodelcars.com', 'x1021', 1021, 'Sales Rep', 0),
	(10, 'Gerard', 'Martin', 'mgerard@classicmodelcars.com', 'x2312', 1102, 'Sales Rep', 0),
	(11, 'Vahap', 'Gencdal', 'vahap.gencdal@classicmodelcars.com', 'xdf034b', 2000, 'Sales Rep', 0);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
