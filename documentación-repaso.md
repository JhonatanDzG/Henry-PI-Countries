# server/src/controllers/getDetailCountryById.js

### getDetailCountryById
> Una función asincrónica que actúa como controlador para obtener el detalle de un país por su ID y sus actividades asociadas.

### Country.findByPk(idCountry, { include: [{ model: Activity, as: 'Activities' }] }) 
> Método para buscar un país por su ID utilizando el modelo Country. Además, se utiliza la opción include para incluir las actividades asociadas al país utilizando el alias 'Activities'. Esto permite obtener el país y sus actividades relacionadas en una sola consulta a la base de datos.

### if (!country) { ... }
> Si el país no se encuentra en la base de datos, se devuelve un mensaje de error con el código de estado 404.

### return res.json(country)
> Si se encuentra el país, se devuelve la información del país y sus actividades asociadas en formato JSON.

### catch (error) { ... }
> Captura cualquier error que ocurra durante la búsqueda del país y sus actividades y muestra un mensaje de error con el código de estado 500.

#

