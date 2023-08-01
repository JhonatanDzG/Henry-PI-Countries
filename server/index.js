const server = require("./src/server");
const PORT = 3001;

// Importar conexión a la base de datos
const { conn } = require("./src/db.js");

// Sincronizar la base de datos con los modelos y opciones especificadas
conn
  .sync({ force: true })
  .then(() => {
    // Iniciar el servidor y lo ponerlo a escuchar en el puerto definido
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
