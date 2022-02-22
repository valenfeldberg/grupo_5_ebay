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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'la mejor de todas las bicis',1234,'  Haedo','true','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFspQhmrp-2ZDgdZPokEhuN2EyR4f_GAsa9Q&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFspQhmrp-2ZDgdZPokEhuN2EyR4f_GAsa9Q&usqp=CAUcleta1.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFspQhmrp-2ZDgdZPokEhuN2EyR4f_GAsa9Q&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFspQhmrp-2ZDgdZPokEhuN2EyR4f_GAsa9Q&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFspQhmrp-2ZDgdZPokEhuN2EyR4f_GAsa9Q&usqp=CAU','Bicileta como nueva',1),(2,'bicicleta2',1234,'Haedo','true','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFspQhmrp-2ZDgdZPokEhuN2EyR4f_GAsa9Q&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFspQhmrp-2ZDgdZPokEhuN2EyR4f_GAsa9Q&usqp=CAUcleta1.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFspQhmrp-2ZDgdZPokEhuN2EyR4f_GAsa9Q&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFspQhmrp-2ZDgdZPokEhuN2EyR4f_GAsa9Q&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFspQhmrp-2ZDgdZPokEhuN2EyR4f_GAsa9Q&usqp=CAU','Bicileta como nueva',2),(6,'dsfsfdsdf',1,'ñ{}ñ{','true','/images/1645407501010-descarga (1).jpg',NULL,NULL,NULL,NULL,'',2),(7,'dsfsfdsdf',1,'ñ{}ñ{','true','/images/1645407513666-descarga (1).jpg',NULL,NULL,NULL,NULL,'',2),(8,'',0,'',NULL,'/images/1645407596482-descarga (1).jpg',NULL,NULL,NULL,NULL,'',2),(9,'',0,'',NULL,'/images/1645407639755-descarga (1).jpg',NULL,NULL,NULL,NULL,'',2),(10,'',0,'',NULL,'/images/1645407791345-descarga (1).jpg',NULL,NULL,NULL,NULL,'',2);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Javier','Bonaventura','javier@gmail.com','masculino','1234','Haedo','/images/avatars/1643379003273_img.png'),(2,'Javier','Bonaventura','javier2@gmail.com','masculino','1234','Haedo','/images/avatars/1643379003273_img.png'),(3,'Esteban','Juan','esteban@gmai.com',NULL,NULL,NULL,'/images/avatars/1645490969637_img.jpg'),(4,'juan','juan','juan@gmail.com',NULL,'12345',NULL,'/images/avatars/1645491236765_img.jpg'),(5,'Javier','Bonaventura','javier@gmail.com',NULL,'1234',NULL,'/images/avatars/1645493058913_img.jpg');
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

-- Dump completed on 2022-02-21 22:46:14
