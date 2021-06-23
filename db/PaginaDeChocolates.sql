CREATE SCHEMA PaginaDeChocolates;
USE PaginaDeChocolates;
CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL,
apellido VARCHAR(255) NOT NULL,
dni INT UNIQUE NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
avatar VARCHAR(255),
birthDate DATE NOT NULL,
createdAt DATETIME,
updatedAt DATETIME,
deletedAt DATETIME
);

CREATE TABLE products(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
productName VARCHAR(255) NOT NULL,
image VARCHAR(255) NOT NULL,
userId INT UNSIGNED NOT NULL,
createdAt DATETIME,
updatedAt DATETIME,
deletedAt DATETIME,

FOREIGN KEY (userId) REFERENCES users(id)

);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
text TEXT NOT NULL,
userId INT UNSIGNED NOT NULL,
productID INT UNSIGNED NOT NULL,
createdAt DATETIME,
updatedAt DATETIME,
deletedAt DATETIME,

FOREIGN KEY (userId) REFERENCES users(id),
FOREIGN KEY (productId) REFERENCES products(id)

);

INSERT INTO users(id, nombre, apellido, dni, email, password, birthDate, createdAt, updatedAt, deletedAt)
VALUES
(default, "Lali", "Esposito", "41234567", "lesposito@netflix.com.ar", "gg888g", "1985-04-22", null, null, null),
(default, "Peter", "Lanzani", "49876434", "peterlanza@gmail.com", "gg999g", "1985-04-22", null, null, null),
(default, "Eugenia", "Suarez", "45636363", "eugesuarez@gmail", "gg000g", "1985-04-22", null, null, null),
(default, "Nico", "Riera", "48886363", "nicobebe@netflix.com.ar", "gg111g", "1985-04-22", null, null, null),
(default, "Gaston", "Dalmau", "42737337", "gdalmau@masterchef.com.ar", "gg222g", "1985-04-22", null, null, null);

INSERT INTO products(id, image, productName, userId, createdAt, updatedAt, deletedAt)
VALUES
(default, "chcolateDDL.jpg", "Chocolate con dulce de leche", 1, null, null, null),
(default, "chocolateAL.jpg", "Chocolate con almendras", 2, null, null, null),
(default, "chocolateFR.jpg", "Chocolate con frutilla", 3, null, null, null),
(default, "chocolateMani.jpg", "Chocolate con mani", 4, null, null, null),
(default, "chocolateN.jpg", "Chocolate negro", 1, null, null, null),
(default, "chocolateB.jpg", "Chocolate blanco", 4, null, null, null),
(default, "chocolateR.jpg", "Chocolate con Rocklets", 5, null, null, null),
(default, "chocolateM.jpg", "Chocolate con menta", 5, null, null, null),
(default, "chocolateA.jpg", "Chocolate con aji", 1, null, null, null),
(default, "chocolateCafe.jpg", "Chocolate con cafe", 5, null, null, null);

INSERT INTO comments(id, text, userId, productId, createdAt, updatedAt, deletedAt)
VALUES
(default, "Escuchame, esto es bacansisimo", 1, 10, null, null, null),
(default, "Es lo mas rico que probe", 2, 8, null, null, null),
(default, "Que rica esta vaina, me enamore", 3, 7, null, null, null),
(default, "Delicioso por dios", 5, 5, null, null, null),
(default, "Que cosa asquerosa", 2, 9, null, null, null),
(default, "Toltamente asqueroso", 5, 10, null, null, null),
(default, "Que cosa deliciosa", 4, 3, null, null, null),
(default, "esto me gusta tanto que se lo voy a regalar a mi abuelita, gracias dios mio", 4, 1, null, null, null),
(default, "por dios, ¿quien comeria esta basura?", 1, 4, null, null, null),
(default, "Mucha calidad", 2, 7, null, null, null),
(default, "delicioso!!!!!!!!", 5, 3, null, null, null),
(default, "Me encanta esto, es delicioso", 4, 6, null, null, null),
(default, "Comeria esto popr el resto de mi vida", 1, 2, null, null, null),
(default, "He probado cosas horribles, luego esta esta basura. ESPANTOSO!!!!!", 5, 1, null, null, null),
(default, "Esto es una vaina espectacular", 3, 3, null, null, null),
(default, "Esto es una belleza", 5, 2, null, null, null),
(default, "Gracias Jesucristo por esta delicia", 1, 8, null, null, null),
(default, "Riquisimo, me encanta", 5, 7, null, null, null),
(default, "Mas caro que la ropa de Camilo! Horrible!!!!!!", 3, 1, null, null, null),
(default, "Disfruto mucho esto, que lindo", 4, 4, null, null, null),
(default, "Voy a intentar no comerme todo en 10 segundos, pero creo que sera imposible. ES MUY RICO!!!!", 1, 6, null, null, null),
(default, "La calidad es impresionante", 2, 2, null, null, null),
(default, "Deberian dedicarse a otra cosa, farsantes!!!!! ESTO ES UNA BASURA", 3, 2, null, null, null),
(default, "Esto es como comer basura, estoy triste", 4, 9, null, null, null),
(default, "Muy buen producto!", 1, 1, null, null, null),
(default, "Pésimo producto, muy caro para la basura que ofrecen", 2, 1, null, null, null),
(default, "Terriblemente horrible", 3, 6, null, null, null),
(default, "Amablemente les digo que esto es horrible", 5, 4, null, null, null),
(default, "Hecho por los aliens... UNA HERMOSURA!!!!!!!!", 1, 7, null, null, null),
(default, "ESTOY MUY FELIZ. GRACIAS AL CREADOR DE ESTE PRODUCTO INCREIBLE!!!!!! MUCHAS GRACIAS!!!!!!!!!!!", 2, 3, null, null, null),
(default, "Disfruto este instante... Que delicia... Que placer... Hermoso", 5, 3, null, null, null),
(default, "Lo mejor que probe... lejos...", 3, 2, null, null, null),
(default, "Esto es una belleza mi pana. BACANSISIMO.", 4, 4, null, null, null),
(default, "Mucha finura, mucho chocolate", 2, 4, null, null, null),
(default, "Nada mejor que un trozo de chocolate, mis panas y un vinito. Esto es la vida...", 3, 10, null, null, null),
(default, "Sabor y amor, esto es demasiado rico", 4, 2, null, null, null),
(default, "Rico, rico, rico. YUMMMMMMM!", 1, 3, null, null, null),
(default, "Un asco. Los odio!!!!", 5, 6, null, null, null),
(default, "Haganme una radiografia, estoy seguro que mi panza esta ahora llena de amor... Felicidad!!!!", 3, 9, null, null, null),
(default, "Una belleza absoluta, una obra de arte", 5, 9, null, null, null);