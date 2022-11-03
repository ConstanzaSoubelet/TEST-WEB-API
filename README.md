Lo primero que hice fue leer las palabras claves del documento:

Token de autenticación: El usuario manda un codigo al servidor y el servidor se encarga de traducir ese codigo y ver que usuario es.
Autenticación: usuario / Autorzación: contraseña

Api JSON: Es un archivo que contiene los datos ordenados dentro de objetos. Es un formato ligero de intercambio de datos de distintos lenguajes de programación.Todos los lenguajes deben tener un soporte JSON. hay 2 métodos: json.parse() - json.stringify()

Componente: Nos permiten organizar tres aspectos fundamentales: - Estructura e información (codigo HTML) - Aspecto visual ( codigo CSS) - Funcionalidad ( codigo javascript). En un solo fichero podemos encontrar las 3 tecnologías del frotend: HTML -JAVASCRIPT Y CSS.

-----------------------------------------------------------------------------------------------------------------------

SIGUIENDO CON LA ESTRUCTURA DEL DOCUMENTO:

Mi aplicación esta hecho con el frameworks Vue3 y para la autenticación lo integre con la aplicación Firebase

El acceso es : Usuario: coni@coni.com
              Password: conita90
              
Tambien te puedes registrar, logear con ese registro y cerrar sesión

-----------------------------------------------------------------------------------------------------------------------

Para hacer funcionar la aplicación tuve que instalar node, vue, axios y chart

Comando para levantar el servidor: npm run serve

----------------------------------------------------------------------------------------------------------------------

PD: me costo identificar la API de los índices, la verdad es que no sabia si tenia que hacerlo con CORS para acceder al http específico del índice, o para crear mi propio JSON con los datos explícitos que tambien requiere de CORS. La api que utilice, NO me trae errores en la console.

Actualizacion
PD2: En la console no encontraba el link de La API que utilize "https://startup.bolsadesantiago.com/api/consulta/TickerOndemand/getIndices?access_token=ADB7E0D67F4143AF8DCF6C9B8084E02E" 
