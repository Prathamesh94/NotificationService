CREATE DATABASE events;
use events;
CREATE TABLE notification(
event_id int NOT NULL AUTO_INCREMENT ,
event_message MEDIUMTEXT NOT NULL,
scheduled_time  DATETIME NOT NULL,
PRIMARY KEY(event_id));