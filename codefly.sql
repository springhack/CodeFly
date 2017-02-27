-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: localhost    Database: codefly
-- ------------------------------------------------------
-- Server version	5.7.17-0ubuntu0.16.04.1

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
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `record` (
  `uuid` varchar(40) NOT NULL DEFAULT '',
  `code` varchar(10000) DEFAULT NULL,
  `input` varchar(10000) DEFAULT NULL,
  `output` varchar(10000) DEFAULT NULL,
  `time` float DEFAULT NULL,
  `memory` float DEFAULT NULL,
  `lang` varchar(10) DEFAULT NULL,
  `time_use` float DEFAULT NULL,
  `memory_use` float DEFAULT NULL,
  `judged` tinyint(1) DEFAULT NULL,
  `timestamp` int(11) DEFAULT '0',
  PRIMARY KEY (`uuid`),
  KEY `judged` (`judged`),
  KEY `timestamp` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
INSERT INTO `record` VALUES ('126309d1-4986-4d52-9ef8-ff57445acb4d','#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a, b;\n    while (cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n','1 2','OUTPUT:\n3\n\nJUDGER:\nAccepted\n\nCOMPILER:\n\n',2000,128,'G++',0,0.477,1,1487866222),('1682ab64-56e7-40d6-b3c4-326a2b16d312','#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a, b;\n    while (cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n','1 2','COMPILER:\nMain.java:1: error: illegal character: \'#\'\n#include <iostream>\n^\nMain.java:1: error: class, interface, or enum expected\n#include <iostream>\n         ^\nMain.java:5: error: class, interface, or enum expected\nint main()\n^\nMain.java:8: error: class, interface, or enum expected\n    while (cin >> a >> b)\n    ^\nMain.java:10: error: class, interface, or enum expected\n    return 0;\n    ^\nMain.java:11: error: class, interface, or enum expected\n}\n^\n6 errors\n\n',2000,128,'Java',0,0,1,1487861651),('1e18723a-c215-44c6-815e-03c9d1758552','#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a, b;\n    while (cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n','1 2','OUTPUT:\n3\n\nJUDGER:\nAccepted\n\nCOMPILER:\n\n',2000,128,'G++',0,0.477,1,1487866251),('21a0031d-3e7a-4ccb-8843-412540a3e60d','#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a, b;\n    while (cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n','1 2','OUTPUT:\n3\n\nJUDGER:\nAccepted\n\nCOMPILER:\n\n',2000,128,'G++',0,0.477,1,1487861635),('290010c2-8493-4215-b97d-7cef48919fd2','/**\n        Author: SpringHack - springhack@live.cn\n        Last modified: 2017-02-09 21:23:30\n        Filename: xml.js\n        Description: Created by SpringHack using vim automatically.\n**/\nexport default {\n    obtainTicket(Config, req, res) {\n        return `<ObtainTicketResponse><message></message><prolongationPeriod>${Config.PROLONGATION_PERIOD}</prolongationPeriod><responseCode>OK</responseCode><salt>${req.query.salt}</salt><ticketId>1</ticketId><ticketProperties>licensee=${Config.LICENSEE}	licenseType=0	</ticketProperties></ObtainTicketResponse>`;\n    },\n    ping(Config, req, res) {\n        return `<PingResponse><message></message><responseCode>OK</responseCode><salt>${req.query.salt}</salt></PingResponse>`;\n    },\n    prolongTicket(Config, req, res) {\n        return `<ProlongTicketResponse><message></message><responseCode>OK</responseCode><salt>${req.query.salt}</salt><ticketId>${req.query.ticketId}</ticketId></ProlongTicketResponse>`;\n    },\n    releaseTicket(Config, req, res) {\n        res.status(301);\n        return \'301 Not accept\';\n    } \n}\n','1 2','COMPILER:\nmain.cpp:9:9: error: stray ‘`’ in program\n         return `<ObtainTicketResponse><message></message><prolongationPeriod>${Config.PROLONGATION_PERIOD}</prolongationPeriod><responseCode>OK</responseCode><salt>${req.query.salt}</salt><ticketId>1</ticketId><ticketProperties>licensee=${Config.LICENSEE} licenseType=0 </ticketProperties></ObtainTicketResponse>`;\n         ^\nmain.cpp:9:9: error: stray ‘`’ in program\nmain.cpp:12:9: error: stray ‘`’ in program\n         return `<PingResponse><message></message><responseCode>OK</responseCode><salt>${req.query.salt}</salt></PingResponse>`;\n         ^\nmain.cpp:12:9: error: stray ‘`’ in program\nmain.cpp:15:9: error: stray ‘`’ in program\n         return `<ProlongTicketResponse><message></message><responseCode>OK</responseCode><salt>${req.query.salt}</salt><ticketId>${req.query.ticketId}</ticketId></ProlongTicketResponse>`;\n         ^\nmain.cpp:15:9: error: stray ‘`’ in program\nmain.cpp:19:16: warning: character constant too long for its type\n         return \'301 Not accept\';\n                ^\nmain.cpp:7:1: warning: keyword ‘export’ not implemented, and will be ignored\n export default {\n ^\nmain.cpp:7:16: error: expected ‘template’ before ‘{’ token\n export default {\n                ^\nmain.cpp:7:16: error: expected unqualified-id before ‘{’ token\n\n',2000,128,'G++',0,0,1,1487861052),('2b53dab5-a3ee-428f-9a07-c325c5cb4b29','#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a, b;\n    while (cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n','1 2','OUTPUT:\n3\n\nJUDGER:\nAccepted\n\nCOMPILER:\n\n',2000,128,'G++',0,0.477,1,1487866259),('38328588-0d55-4d7b-9930-ba8f22885937','#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a, b;\n    while (cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n','1 2','COMPILER:\nMain.java:1: error: illegal character: \'#\'\n#include <iostream>\n^\nMain.java:1: error: class, interface, or enum expected\n#include <iostream>\n         ^\nMain.java:5: error: class, interface, or enum expected\nint main()\n^\nMain.java:8: error: class, interface, or enum expected\n    while (cin >> a >> b)\n    ^\nMain.java:10: error: class, interface, or enum expected\n    return 0;\n    ^\nMain.java:11: error: class, interface, or enum expected\n}\n^\n6 errors\n\n',2000,128,'Java',0,0,1,1487861655),('4eaa6b3a-9d64-4d6e-ae25-d63c0ab66017','#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a, b;\n    while (cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n','1 2','OUTPUT:\n3\n\nJUDGER:\nAccepted\n\nCOMPILER:\n\n',2000,128,'G++',0,0.477,1,1487866255),('5462324a-a7b3-44e4-941d-8b484f93362c','/**\n        Author: SpringHack - springhack@live.cn\n        Last modified: 2017-02-09 21:23:30\n        Filename: xml.js\n        Description: Created by SpringHack using vim automatically.\n**/\nexport default {\n    obtainTicket(Config, req, res) {\n        return `<ObtainTicketResponse><message></message><prolongationPeriod>${Config.PROLONGATION_PERIOD}</prolongationPeriod><responseCode>OK</responseCode><salt>${req.query.salt}</salt><ticketId>1</ticketId><ticketProperties>licensee=${Config.LICENSEE}	licenseType=0	</ticketProperties></ObtainTicketResponse>`;\n    },\n    ping(Config, req, res) {\n        return `<PingResponse><message></message><responseCode>OK</responseCode><salt>${req.query.salt}</salt></PingResponse>`;\n    },\n    prolongTicket(Config, req, res) {\n        return `<ProlongTicketResponse><message></message><responseCode>OK</responseCode><salt>${req.query.salt}</salt><ticketId>${req.query.ticketId}</ticketId></ProlongTicketResponse>`;\n    },\n    releaseTicket(Config, req, res) {\n        res.status(301);\n        return \'301 Not accept\';\n    } \n}\n','1 2','COMPILER:\nmain.cpp:9:9: error: stray ‘`’ in program\n         return `<ObtainTicketResponse><message></message><prolongationPeriod>${Config.PROLONGATION_PERIOD}</prolongationPeriod><responseCode>OK</responseCode><salt>${req.query.salt}</salt><ticketId>1</ticketId><ticketProperties>licensee=${Config.LICENSEE} licenseType=0 </ticketProperties></ObtainTicketResponse>`;\n         ^\nmain.cpp:9:9: error: stray ‘`’ in program\nmain.cpp:12:9: error: stray ‘`’ in program\n         return `<PingResponse><message></message><responseCode>OK</responseCode><salt>${req.query.salt}</salt></PingResponse>`;\n         ^\nmain.cpp:12:9: error: stray ‘`’ in program\nmain.cpp:15:9: error: stray ‘`’ in program\n         return `<ProlongTicketResponse><message></message><responseCode>OK</responseCode><salt>${req.query.salt}</salt><ticketId>${req.query.ticketId}</ticketId></ProlongTicketResponse>`;\n         ^\nmain.cpp:15:9: error: stray ‘`’ in program\nmain.cpp:19:16: warning: character constant too long for its type\n         return \'301 Not accept\';\n                ^\nmain.cpp:7:1: warning: keyword ‘export’ not implemented, and will be ignored\n export default {\n ^\nmain.cpp:7:16: error: expected ‘template’ before ‘{’ token\n export default {\n                ^\nmain.cpp:7:16: error: expected unqualified-id before ‘{’ token\n\n',2000,128,'G++',0,0,1,1487861243),('85b3090b-2b97-4ba5-885b-79c383ba39e6','#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a, b;\n    while (cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n','1 2','OUTPUT:\n3\n\nJUDGER:\nAccepted\n\nCOMPILER:\n\n',2000,128,'G++',0,0.477,1,1487866680),('99814dbc-3390-4e73-bee1-3ae6a0fce5e5','#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a, b;\n    while (cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n','1 2','OUTPUT:\n3\n\nJUDGER:\nAccepted\n\nCOMPILER:\n\n',2000,128,'G++',0,0.477,1,1487866675),('99c51ede-b3c4-4c84-aade-8d81c482ee2e','#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a, b;\n    while (cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n','1 2','OUTPUT:\n3\n\nJUDGER:\nAccepted\n\nCOMPILER:\n\n',2000,128,'G++',0,0.477,1,1487866227),('f7ea8b85-c840-4a11-b7fe-6c58cef70679','#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a, b;\n    while (cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n','1 2','COMPILER:\nmain.c:1:20: fatal error: iostream: No such file or directory\ncompilation terminated.\n\n',2000,128,'GCC',0,0,1,1487861643);
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-27 14:56:47
