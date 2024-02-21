create table appuser(id int primary key AUTO_INCREMENT,name varchar(250),email varchar(50),password varchar(250),UNIQUE (email));

insert into appuser(email,password) values('Admin','admin@gmail.com','admin');

insert into newcenter(centername,centerlocation,vaccinecount) values('Center1','Center1location','10');

create table category(
    id int primary key AUTO_INCREMENT, 
    name varchar(255) NOT NULL
);

INSERT INTO centers (name, address, location) VALUES
('Center 1', '123 Main St, City 1', 'location1'),
('Center 2', '456 Elm St, City 2', 'location2'),
('Center 3', '789 Oak St, City 3', 'location1');

CREATE TABLE centers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    location_id INT NOT NULL,
    FOREIGN KEY (location_id) REFERENCES Locations(id)
    -- Add more columns as needed
);


INSERT INTO centers (name, address, location_id)
VALUES ('Center 1', 'Address 1', 1), 
       ('Center 2', 'Address 2', 2),
       ('Center 3', 'Address 3', 3); 
