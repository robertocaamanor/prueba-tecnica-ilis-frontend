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

## Scripts disponibles
En el directorio del proyecto, puedes ejecutar los siguientes comandos:

npm start
Inicia la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verla en tu navegador.

La página se recargará automáticamente si realizas cambios en el código.
También verás errores en la consola si los hay.

npm run build
Construye la aplicación para producción en la carpeta build.
Optimiza el código para el mejor rendimiento.

npm test
Ejecuta las pruebas en modo interactivo.

## Componentes principales
1. ProductList
Descripción: Lista todos los productos disponibles.
Funcionalidades:
Buscar productos por nombre, categoría y disponibilidad en stock.
Mostrar etiquetas de "Sin stock" o "Stock limitado" según la cantidad disponible.
Botón para redirigir al formulario de añadir producto.
Mensaje de alerta si no se encuentran productos.
2. AddProduct
Descripción: Permite añadir un nuevo producto.
Validaciones:
Todos los campos son obligatorios.
El precio y el stock deben ser mayores o iguales a 0.
La URL de la imagen debe contener extensiones válidas (JPG, JPEG, PNG).
Funcionalidades:
Muestra mensajes de error debajo de cada campo con bordes rojos si hay errores.
Redirige a la lista de productos tras añadir un producto exitosamente.
API utilizada
Este proyecto consume un API REST con los siguientes endpoints:

GET /products/all: Obtiene todos los productos.
GET /products?name=&category=&inStock=: Filtra productos por nombre, categoría y disponibilidad.
POST /products: Añade un nuevo producto.
Cómo ejecutar el proyecto
Asegúrate de que el backend esté corriendo en http://localhost:8080.

Inicia la aplicación con:

Abre http://localhost:3000 en tu navegador para interactuar con la aplicación.

Tecnologías utilizadas
React: Biblioteca principal para la construcción de la interfaz de usuario.
Bootstrap: Framework CSS para el diseño responsivo.
Axios: Cliente HTTP para realizar solicitudes al backend.
React Router DOM: Manejo de rutas en la aplicación.
Autor
Desarrollado por Roberto Caamaño como parte de una prueba técnica.

Licencia
Este proyecto está bajo la licencia MIT.