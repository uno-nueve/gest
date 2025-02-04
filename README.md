# 📝 _GEst: Aplicación de Gestión Estudiantil._

![GEst logo](/src/assets/GEst-banner.png)

Aplicación frontend que sirve como cliente de la [API](https://github.com/uno-nueve/gest-api)
realizada en la instancia de backend.

## Características

La aplicaión ofrece un cliente para el control de la API de GEst. Mediante la misma se puede:

-   Obtener todos los registros de estudiantes.
-   Ver detalles de cada estudiante.
-   Crear y editar registros de estudiantes con datos personales, académicos y fotos de estudiante.
-   Eliminar registros de estudiantes.
-   Iniciar sesión con autentícación de Google.
-   Obtener datos de los cursos.

## Tecnologías usadas

-   React con TypeScript y las siguentes librerías:
    -   [React Router](https://reactrouter.com/)
    -   [Tailwind](https://tailwindcss.com/)
    -   [Axios](https://axios-http.com/)
    -   [React Hook Form](https://www.react-hook-form.com/)
    -   [Zod](https://zod.dev/)
    -   [Redux Toolkit](https://redux-toolkit.js.org/)

## Uso

1. Clonar el repositorio.

```bash
git clone git@github.com:uno-nueve/gest.git
cd gest
```

2. Instalar dependencias.

```bash
npm install
```

3. Configurar variables de entorno.

```bash
VITE_BASE_URL = 'enpoint principal'
VITE_ESTUDIANTES = 'endpointestudiantes'
VITE_CLIENT_ID = 'string de id de cliente de Google'
```

3. Ejecuta la aplicación.

```bash
npm run dev
```

Link a aplicación desplegada en Vercel: https://gest-six.vercel.app/

## Créditos

Desarrollado por Luciano Montilla
