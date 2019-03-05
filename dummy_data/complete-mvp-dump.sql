-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 05, 2019 at 03:33 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `boardgamers`
--

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `hostID` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `gameTitle` varchar(60) NOT NULL,
  `gameImages` text NOT NULL,
  `playerLimit` smallint(2) UNSIGNED NOT NULL,
  `location` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `hostID`, `date`, `startTime`, `endTime`, `gameTitle`, `gameImages`, `playerLimit`, `location`) VALUES
(1, 1, '2019-05-20', '06:00:00', '08:00:11', 'Checkers', 'https://img.digitaltrends.com/image/zelda-5-1500x1000.jpg', 3, 6),
(2, 1, '1911-06-30', '06:00:00', '08:00:11', 'Dominion', 'http://3.bp.blogspot.com/-oJrn4Rkphrs/UAy_PrJQG-I/AAAAAAAAB2k/bHKOHCl_XZk/s1600/the%2Blegend%2Bof%2Bzelda%2Blink%2Bevolution%2Btimeline%2Bwallpaper%2Bbackground%2Bdesktop%2Bnintendo%2Bgame.jpg', 5, 7),
(3, 2, '2019-12-25', '06:00:00', '08:00:11', 'Starwars', 'http://cdn-blog-assets.bigfishgames.com/uploads/2013/11/Link-Top-10-best-video-game-characters.jpg', 4, 8),
(4, 3, '1900-12-20', '03:00:00', '10:00:11', 'Star Track', 'http://cdn-blog-assets.bigfishgames.com/uploads/2013/11/Link-Top-10-best-video-game-characters.jpg', 9, 9),
(5, 4, '2019-03-20', '06:00:00', '08:00:11', 'Settlers of Catain', 'http://cdn-blog-assets.bigfishgames.com/uploads/2013/11/Link-Top-10-best-video-game-characters.jpg', 4, 10),
(6, 4, '2019-03-21', '01:00:00', '20:00:11', 'Exploding Kittens', 'http://cdn-blog-assets.bigfishgames.com/uploads/2013/11/Link-Top-10-best-video-game-characters.jpg', 3, 11);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `streetAddress` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `zipcode` mediumint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `streetAddress`, `city`, `state`, `zipcode`) VALUES
(1, '9999 Town Square', 'Milwaukee', 'WI', 53206),
(2, '189 Orange Tree', 'Orange', 'CA', 98876),
(3, '12 Spectrum Square', 'Irvine', 'CA', 92444),
(4, '9800 Town Square', 'Milwaukee', 'WI', 53206),
(5, '50 Lost Street', 'Orange', 'MI', 44444),
(6, '9500  Square', 'Milwaukee', 'WI', 53206),
(7, '12 Sky Drive', 'Greenfield', 'WI', 55555),
(8, '8851 Lakepoint Cir', 'Franklin', 'WI', 53132),
(9, '8850 Lakepoint Cir', 'Irvine', 'CA', 90210),
(10, '90 Lake Cir', 'Lakeforest', 'CA', 94231),
(11, '8 Circle', 'Lakeforest', 'CA', 94231);

-- --------------------------------------------------------

--
-- Table structure for table `playerList`
--

CREATE TABLE `playerList` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userID` bigint(20) UNSIGNED NOT NULL,
  `eventID` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `playerList`
--

INSERT INTO `playerList` (`id`, `userID`, `eventID`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 1, 2),
(6, 2, 2),
(7, 3, 2),
(8, 5, 2),
(9, 3, 3),
(10, 2, 3),
(11, 4, 3),
(12, 5, 2),
(13, 3, 4),
(14, 1, 4),
(15, 2, 4),
(16, 4, 4),
(17, 4, 5),
(18, 1, 5),
(19, 2, 5),
(20, 3, 5),
(21, 4, 6),
(22, 2, 6),
(23, 3, 6);

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `playerName` varchar(20) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` int(10) UNSIGNED NOT NULL,
  `joinDate` datetime NOT NULL,
  `location` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `playerName`, `firstName`, `lastName`, `dateOfBirth`, `email`, `phone`, `joinDate`, `location`) VALUES
(1, 'Rockstar', 'Matt', 'Stan', '1982-06-22', 'stan@email.com', 2223334444, '2019-02-02 06:33:22', 1),
(2, 'LMFAO', 'John', 'Smith', '2001-06-01', 'smith@email.com', 2223335555, '2019-03-01 07:47:27', 2),
(3, 'AlienHead', 'Joe', 'Bob', '1956-02-27', 'bob@email.com', 2223335566, '2019-02-28 13:29:12', 3),
(4, 'Mr.Awesome', 'Awe', 'Some', '2013-10-22', 'awesome@email.com', 3334445555, '2019-03-01 00:00:00', 4),
(5, 'Yo-Momma', 'Some', 'Guy', '1901-01-01', 'someguy@email.com', 664445555, '2019-02-19 10:11:00', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `playerList`
--
ALTER TABLE `playerList`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `playerList`
--
ALTER TABLE `playerList`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
