INSERT INTO department(id, name)
VALUES 
(1, "Human Resources"),
(2, "sales"),
(3, "tech"),
(4, "outbound"),
(5, "inbound"),
(6, "returns and recalls"),
(7, "inventory control"),
(8, "transportation"),
(9, "shipping");

INSERT INTO roles(id, title, salary, department_id)
VALUES
(1, "HR", 30000, 1),
(2, "Advisor Human Resources", 45000, 1),
(3, "sales", 35000, 2),
(4, "senior sale", 50000, 2),
(5, "tech", 30000, 3),
(6, "advisor tech", 50000, 3),
(7, "outbound", 30000, 4),
(8, "advisor outbound", 50000, 4),
(9, "inbound", 30000, 5),
(10, "advisor inbound", 50000, 5),
(11, "returns and recalls", 30000, 6),
(12, "inventory control", 35000, 7),
(13, "transportation", 40000, 8),
(14, "shipping", 35000, 9),
(15, "shipping advisor", 45000, 9);

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES
(1, "john", "doe", 5,NULL),
(2, "chris", "smith", 1,1),
(3, "mat", "jackson", 9,NULL),
(4, "emilly", "aguilar", 15,2),
(5, "mark", "green", 10,NULL),
(6, "brook", "kassin", 6,NULL),
(7, "josh", "jest", 3,3),
(8, "rich", "ridge", 4,NULL),
(9, "rachel", "chasin", 7,4),
(10, "anna", "lopez", 2,NULL);