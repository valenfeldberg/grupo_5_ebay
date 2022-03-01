-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: barter_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(95) COLLATE utf8_unicode_ci DEFAULT NULL,
  `valor` smallint(10) NOT NULL,
  `ubicacion` varchar(95) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usado` varchar(95) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imagen` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imagen1` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imagen2` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imagen3` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imagen4` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `descripcion` varchar(95) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_id` smallint(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (19,'Bicicleta con suspension',32767,'Moron','false','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','Bicicleta con suspension como nueva',12),(20,'Microondas',30000,'Haedo','true','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','Microondas con muy poco uso. Funciona perfecto',12),(21,'Mesa de comedor con Sillas',32767,'Caseros','true','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','Mesa de comedor con Sillas. Esta como nueva',12),(22,'Placard de melamina',20000,'Caballito','false','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','Placard de melamina. Color Wengue',12),(23,'Heladera',32767,'Palomar','true','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','Heladera muy buena. Poco uso',12),(24,'Heladera',32767,'Palomar','true','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','Heladera muy buena. Poco uso',12),(25,'Bicicleta con suspension',32767,'Moron','false','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','Bicicleta con suspension como nueva',12),(26,'Microondas',30000,'Haedo','true','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','Microondas con muy poco uso. Funciona perfecto',12),(27,'Mesa de comedor con Sillas',32767,'Caseros','true','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','Mesa de comedor con Sillas. Esta como nueva',12),(28,'Placard de melamina',20000,'Caballito','false','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','Placard de melamina. Color Wengue',12),(29,'Bicicleta con suspension',32767,'Moron','false','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','Bicicleta con suspension como nueva',12),(30,'Microondas',30000,'Haedo','true','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','Microondas con muy poco uso. Funciona perfecto',12),(31,'Mesa de comedor con Sillas',32767,'Caseros','true','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','Mesa de comedor con Sillas. Esta como nueva',12),(32,'Placard de melamina',20000,'Caballito','false','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','Placard de melamina. Color Wengue',12),(33,'Heladera',32767,'Palomar','true','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','Heladera muy buena. Poco uso',12),(34,'Bicicleta con suspension',32767,'Moron','false','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','Bicicleta con suspension como nueva',12),(35,'Bicicleta con suspension',32767,'Moron','false','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','Bicicleta con suspension como nueva',12),(36,'Microondas',30000,'Haedo','true','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','Microondas con muy poco uso. Funciona perfecto',12),(37,'Microondas',30000,'Haedo','true','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','Microondas con muy poco uso. Funciona perfecto',12),(38,'Mesa de comedor con Sillas',32767,'Caseros','true','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','Mesa de comedor con Sillas. Esta como nueva',12),(39,'Mesa de comedor con Sillas',32767,'Caseros','true','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','Mesa de comedor con Sillas. Esta como nueva',12),(40,'Placard de melamina',20000,'Caballito','false','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','Placard de melamina. Color Wengue',12),(41,'Placard de melamina',20000,'Caballito','false','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','Placard de melamina. Color Wengue',12),(42,'Heladera',32767,'Palomar','true','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','Heladera muy buena. Poco uso',12),(44,'Bicicleta con suspension',32767,'Moron','false','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','Bicicleta con suspension como nueva',12),(45,'Bicicleta con suspension',32767,'Moron','false','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','/images/1646139656397-bicicleta.jpg','Bicicleta con suspension como nueva',12),(46,'Microondas',30000,'Haedo','true','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','Microondas con muy poco uso. Funciona perfecto',12),(47,'Microondas',30000,'Haedo','true','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','/images/1646139690969-microondas.jpg','Microondas con muy poco uso. Funciona perfecto',12),(48,'Mesa de comedor con Sillas',32767,'Caseros','true','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','Mesa de comedor con Sillas. Esta como nueva',12),(49,'Mesa de comedor con Sillas',32767,'Caseros','true','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','/images/1646139724987-mesa.jpg','Mesa de comedor con Sillas. Esta como nueva',12),(50,'Placard de melamina',20000,'Caballito','false','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','Placard de melamina. Color Wengue',12),(51,'Placard de melamina',20000,'Caballito','false','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','/images/1646139761049-ropero.jpg','Placard de melamina. Color Wengue',12),(52,'Heladera',32767,'Palomar','true','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','Heladera muy buena. Poco uso',12),(53,'Heladera',32767,'Palomar','true','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','Heladera muy buena. Poco uso',12),(54,'Heladera',32767,'Palomar','true','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','Heladera muy buena. Poco uso',12),(55,'Heladera',32767,'Palomar','true','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','/images/1646139785367-heladera.jpg','Heladera muy buena. Poco uso',12);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(95) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(95) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(95) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` varchar(95) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ubicacion` varchar(95) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imagen` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Javier','Bonaventura','javier@gmail.com','masculino','1234','Haedo','/images/avatars/1643379003273_img.png'),(2,'Javier','Bonaventura','javier2@gmail.com','masculino','1234','Haedo','/images/avatars/1643379003273_img.png'),(3,'Esteban','Juan','esteban@gmai.com',NULL,NULL,NULL,'/images/avatars/1645490969637_img.jpg'),(4,'juan','juan','juan@gmail.com',NULL,'12345',NULL,'/images/avatars/1645491236765_img.jpg'),(5,'Javier','Bonaventura','javier@gmail.com',NULL,'1234',NULL,'/images/avatars/1645493058913_img.jpg'),(7,'Javier','Bonaventura','prueba@gmail.com',NULL,'$2a$10$Qbrp3oeurqnxI7c/CZd3M.MuuP9v8nS6W6vB/lKPLx/UMTdpQQXYS',NULL,'/images/avatars/1645496404313_img.jpg'),(8,'Javier','Bonaventura','prueba2@gmail.com',NULL,'$2a$10$vLe9dXovnZ74f.TpC1blZuSOoTXNxr4aui7f0EXWJTlFivDpCq5/2',NULL,'/images/avatars/1645544607034_img.jpg'),(9,'Javier','Bonaventura','prueba2@gmail.com',NULL,'$2a$10$QlT61wXR.UXU.dh.gJ9hT.CF0kdZxjNum18X0A9XmaHwmEx4gbMPq',NULL,'/images/avatars/1645544699330_img.jpg'),(10,'Javier','Bonaventura','prueba1111@gmail.com',NULL,'$2a$10$e80Y.1KCOnLtVUDGPhLPRe7IZA0zDP7mv82oBWsu1sXuLCPy/Gfoq',NULL,'/images/avatars/1645545086706_img.jpg'),(11,'Javier','Bonaventura','prueba11111@gmail.com',NULL,'$2a$10$zPJa9FJC/O1BirDuV1SWgOnMyaHoydevYsiHJmnCRJlsfkkWwidJ.',NULL,'/images/avatars/1645545353502_img.jpg'),(12,'Javier','Bonaventura','bonaventura.javier@gmail.com',NULL,'$2a$10$QFwkA5aT6up6yhIeweaEiOPuncTIbx6JSxE3Tw39/.DfMoFadRLwK',NULL,'/images/avatars/1645807733567_img.jpg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'barter_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-01 10:09:37
