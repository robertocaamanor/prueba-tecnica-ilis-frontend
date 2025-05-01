# Prueba Técnica Frontend

Este proyecto es una aplicación desarrollada en React que permite gestionar productos. Incluye funcionalidades para listar, buscar, añadir y validar productos.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   https://github.com/robertocaamanor/prueba-tecnica-ilis-frontend.git```

## Accede al directorio del proyecto:

Instala las dependencias necesarias:

## Scripts Disponibles

En el directorio raíz del proyecto, puedes utilizar los siguientes scripts de npm:

### `npm start`

Ejecuta la aplicación en el entorno de desarrollo. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para visualizarla.

La página se actualizará automáticamente al guardar cambios en los archivos. Adicionalmente, cualquier error de linting o en tiempo de ejecución se mostrará directamente en la consola.

### `npm run build`

Compila la aplicación para su despliegue en un entorno de producción. El resultado de la compilación se guarda en la carpeta `build/`.

Este script optimiza el código fuente para obtener el mejor rendimiento posible, incluyendo la minificación de archivos estáticos y la generación de los assets necesarios para producción.

### `npm test`

Ejecuta el runner de pruebas en modo interactivo (watch mode). Cualquier cambio que realices en los archivos de prueba o en los componentes bajo prueba provocará una nueva ejecución de las pruebas.

Este modo proporciona retroalimentación inmediata sobre el estado de tus pruebas mientras desarrollas.

## 1. ProductList

**Descripción:** Muestra una lista de todos los productos disponibles en el sistema.

**Funcionalidades:**

* **Búsqueda y Filtrado:** Permite a los usuarios buscar productos por nombre, filtrar por categoría y verificar la disponibilidad en stock.
* **Indicadores de Stock:** Visualiza etiquetas distintivas para indicar si un producto está "Sin stock" o tiene "Stock limitado", facilitando la identificación rápida del inventario.
* **Acceso a Formulario de Adición:** Incorpora un botón claramente visible que redirige al usuario al formulario para añadir un nuevo producto al catálogo.
* **Gestión de Resultados Vacíos:** Muestra un mensaje de alerta informativo cuando no se encuentran productos que coincidan con los criterios de búsqueda o cuando la lista está vacía.

## 2. AddProduct

**Descripción:** Proporciona un formulario intuitivo para la creación de nuevos productos dentro del sistema.

**Validaciones:**

* **Campos Obligatorios:** Asegura que todos los campos del formulario sean completados antes de permitir el envío, garantizando la integridad de los datos.
* **Validación Numérica:** Verifica que los campos de precio y stock contengan valores numéricos mayores o iguales a cero, previniendo entradas inválidas.
* **Validación de URL de Imagen:** Comprueba que la URL proporcionada para la imagen del producto contenga una de las extensiones de archivo válidas: JPG, JPEG o PNG.

**Funcionalidades:**

* **Retroalimentación Visual de Errores:** Muestra mensajes de error descriptivos directamente debajo de cada campo que no cumple con las validaciones, resaltando el campo con un borde rojo para una identificación clara.
* **Redirección Tras Éxito:** Después de añadir un producto exitosamente a través del formulario, el usuario es automáticamente redirigido a la página de la lista de productos para visualizar la actualización.

## API Utilizada

Este proyecto frontend interactúa con un API REST a través de los siguientes endpoints:

* `GET /products/all`: Recupera la lista completa de todos los productos almacenados.
* `GET /products?name=<valor>&category=<valor>&inStock=<booleano>`: Permite filtrar productos basándose en su nombre (parcial o exacto), categoría y disponibilidad en stock (true o false).
* `POST /products`: Envía los datos de un nuevo producto al servidor para su almacenamiento.

## Cómo Ejecutar el Proyecto

**Prerrequisitos:**

* Asegúrate de que el backend de la aplicación esté en funcionamiento y accesible en la siguiente dirección: `http://localhost:8080`.

**Pasos para Iniciar la Aplicación Frontend:**

1.  Abre tu terminal o línea de comandos.
2.  Navega hasta el directorio raíz del proyecto frontend.
3.  Ejecuta el comando necesario para iniciar la aplicación (generalmente `npm start` o `yarn start`, dependiendo de tu gestor de paquetes).

Una vez que la aplicación se haya compilado e iniciado correctamente, podrás acceder a ella a través de tu navegador web en la siguiente URL: `http://localhost:3000`.

## Tecnologías Utilizadas

* **React:** La biblioteca de JavaScript fundamental utilizada para construir la interfaz de usuario interactiva y basada en componentes.
* **Bootstrap:** Un framework CSS popular que proporciona estilos predefinidos y un sistema de diseño responsivo para una apariencia consistente y adaptable a diferentes dispositivos.
* **Axios:** Un cliente HTTP basado en promesas para realizar solicitudes asíncronas al API del backend.
* **React Router DOM:** Una biblioteca de enrutamiento para React que permite la navegación entre diferentes vistas o páginas dentro de la aplicación de una sola página (SPA).

## Autor

Desarrollado por Roberto Caamaño como parte de una prueba técnica.