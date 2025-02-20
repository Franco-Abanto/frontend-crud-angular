# Frontend CRUD con Angular

Este proyecto es una aplicación frontend desarrollada con Angular que interactúa con una API backend para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar). La aplicación se comunica con un servidor Express que utiliza JWT para la autenticación y una base de datos MySQL para el almacenamiento de datos.

## Características

- **Angular**: Framework de desarrollo de aplicaciones web de una sola página.
- **Interacción con API RESTful**: Comunicación con un backend desarrollado en Express.js.
- **Autenticación JWT**: Manejo de autenticación segura mediante JSON Web Tokens.
- **Operaciones CRUD**: Crear, Leer, Actualizar y Eliminar registros desde la interfaz de usuario.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Angular CLI](https://angular.io/cli) (versión 16.2.0 o superior)
- [Backend del proyecto](https://github.com/Franco-Abanto/backend-crud-express) en funcionamiento

## Instalación

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/Franco-Abanto/frontend-crud-angular.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd frontend-crud-angular
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Configura el entorno:**

   - Crea un archivo `.env` en la raíz del proyecto.
   - Añade la URL de la API backend en el archivo `.env`, por ejemplo:

     ```
     API_URL=http://localhost:3000/api
     ```

5. **Inicia el servidor de desarrollo:**

   ```bash
   ng serve
   ```

   La aplicación estará disponible en `http://localhost:4200`.

## Scripts disponibles

- `ng serve`: Inicia el servidor de desarrollo.
- `ng build`: Compila la aplicación para producción en la carpeta `dist/`.
- `ng test`: Ejecuta las pruebas unitarias utilizando Karma.
- `ng e2e`: Ejecuta las pruebas end-to-end.

## Estructura del proyecto

- `src/app`: Contiene los componentes, servicios y módulos de la aplicación.
- `src/assets`: Recursos estáticos como imágenes y estilos globales.
- `src/environments`: Archivos de configuración para diferentes entornos (desarrollo, producción).

## Contribuciones

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama con tu función o corrección: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza tus cambios y haz commit: `git commit -m 'Agregar nueva funcionalidad'`.
4. Envía tus cambios al repositorio remoto: `git push origin mi-nueva-funcionalidad`.
5. Abre una solicitud de pull en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
