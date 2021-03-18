CREATE DATABASE events;
use events;
CREATE TABLE notification(
event_id int NOT NULL AUTO_INCREMENT ,
event_message MEDIUMTEXT NOT NULL,
scheduled_time  DATETIME NOT NULL,
PRIMARY KEY(event_id));

START TRANSACTION;

select * from notification where scheduled_time < '2021-04-03 14:00:45' ;

delete  from notification where scheduled_time < '2021-04-03 14:00:45' ;

COMMIT;