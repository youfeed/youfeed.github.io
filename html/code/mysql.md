#### MYSQL代码片段


> 批量更新 同数据

``` 
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

UPDATE `kitty` SET `state` = 0 WHERE `uuid` IN 
(
  '',
  ''
)

UPDATE `kitty` SET `state` = 0 WHERE `uuid` IN 
(
  '',
  ''
)
UPDATE `kitty` SET `state` = 0 WHERE `uuid` IN 
(
  '',
  ''
)
COMMIT;
```

> 批量插入

``` 
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
INSERT INTO `packago` (`h256`) VALUES
('f7e79a1beb389c9cf10add522709cc7f0db86247a62009ec9712df4f1a3e85ac'),
('f7e79a1beb389c9cf10add522709cc7f0db86247a62009ec9712df4f1a3e85ac'),
('f7e79a1beb389c9cf10add522709cc7f0db86247a62009ec9712df4f1a3e85ac'),
COMMIT;
```