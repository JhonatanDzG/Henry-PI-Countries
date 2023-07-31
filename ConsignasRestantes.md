## **📋 SOBRE LA API**

En este proyecto la API de Countries **correrá localmente desde tu computadora**. De esta manera, siempre tendrás disponible los datos de forma local para poder realizar tu proyecto.

Para lograr que esta API funcione desde tu computadora deberás dirigirte, desde tu terminal, a la carpeta **`server`** y ejecutar el comando:

```bash
   npm start
```

Podrás ver el siguiente mensaje en tu terminal.

``` 
[0] 
[0] > server@1.0.0 server
[0] > nodemon index.js
[0] 
[1] 
[1] > server@1.0.0 api
[1] > echo 'Local API listening on PORT 5000' & json-server --watch api/db.json -p 5000 -q
[1] 
[1] 'Local API listening on PORT 5000' 
[0] [nodemon] 2.0.22
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node index.js`
[0] Server listening on port 3001

```

Esto significa que la API ya está corriendo en tu computadora en el puerto 5000. Es decir que podrás acceder a ella desde la URL **`http://localhost:5000`**. Para poder comunicarte con esta API deberás dejar la terminal levantada.

**IMPORTANTE**
No debes modificar **NINGÚN** archivo dentro de la carpeta **`/server/api`**. Cualquier modificación en estos archivos puede alterar el funcionamiento normal de la API y de tu proyecto.

<br />



## **📌 DISEÑO**

-  Intenta utilizar estilos uniformes en todo la SPA. Puedes buscar una [**paleta de colores**](https://coolors.co/) y mantenerla.
-  Es recomendable utilizar la misma fuente y el mismo tamaño de letra, botones con el mismo estilo y color para los que realizan la misma acción (por ejemplo, borrar).
-  No se permitirá utilizar librerías externas para aplicar estilos a la aplicación.
-  Los elementos deben estar centrados y estilizados.
-  La **Landing Page** debe tener alguna imagen de fondo representativa al proyecto y un botón que redirija a la Home Page.

> [ **CONSEJO** ]: observa varios sitios web para ver la uniformidad en sus estilos.

⛔️ Está rotundamente prohibido utilizar librerías externas para aplicar estilos a la SPA. Tendrás que utilizar CSS mediante algunas de las opciones vistas en el bootcamp (CSS, Legacy, Inline Styling, CSS Modules o Styled Components).

## 📖 ENUNCIADO GENERAL
La idea de este proyecto es construir una aplicación web a partir de la API 
[countries] en la que se pueda:

>Filtrarlos.

>Ordenarlos.

>Crear actividades turísticas.

⚠️ Para las funcionalidades de filtrado y ordenamiento NO se puede utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados.

Único end-point que se puede utilizar
[http://localhost:5000/countries]
<br/>
<br/>


### **🖱 FRONT-END**

Se debe desarrollar una aplicación utilizando **React** y **Redux** que contenga las siguientes vistas:

**📍 LANDING PAGE |** deberás crear una página de inicio o bienvenida con:

-  Alguna imagen de fondo representativa al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de tu SPA debe contener:

-  SearchBar: un input de búsqueda para encontrar países por nombre.
-  Sector en el que se vea un listado de cards con los países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /countries`** y deberá mostrar su:
   -  Imagen de la bandera.
   -  Nombre.
   -  Continente.
-  Cuando se le hace click a una Card deberá redirigir al detalle de ese país específico.
-  Botones/Opciones para **filtrar** por continente y por tipo de actividad turística.
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población.
-  Paginado: el listado de países se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 10 países por página.

<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de un país:

-  ID (Código de tres letras).
-  Nombre.
-  Imagen de la bandera.
-  Continente.
-  Capital.
-  Subregión (si tiene).
-  Área (si tiene).
-  Población.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear una actividad turística.

Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

-  Nombre.
-  Dificultad.
-  Duración.
-  Temporada.
-  Posibilidad de seleccionar/agregar varios países en simultáneo.
-  Botón para crear la actividad turística.

> [**IMPORANTE**]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre de la actividad no pueda contener números, o que la duración no pueda exceder determinado valor, etc.

<br>
🖱 TESTING
Ten en cuenta que en esta instancia no es obligatorio el desarrollo de testing para tu aplicación. De igual manera, te desafiamos a que los hagas, ¡ya que suman puntos!

Al menos tener un componente del frontend con sus tests respectivos.
Al menos tener dos rutas del backend con sus tests respectivos.
Al menos tener un modelo de la base de datos con sus tests respectivos.