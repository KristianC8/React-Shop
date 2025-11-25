# React Online Store

Página de comercio electrónico completamente funcional que incluye un carrito de compras. El proyecto se centra en proporcionar una experiencia de usuario fluida y eficiente, permitiendo a los usuarios navegar, buscar productos y realizar compras con facilidad.

Desarrollada con **React**, **React Router** y **Tailwind CSS**. Los productos se obtienen dinámicamente usando AJAX desde una API externa.

## 🚀 Características

- **Catálogo de Productos**: Visualización de productos con imágenes, precios y descripciones.
- **Carrito de Compras**: Funcionalidad completa para agregar, eliminar y modificar cantidades de productos.
- **Filtros**: Filtrado de productos por categoría, precio, etc.
- **Autenticación**: Sistema de login (simulado o real según implementación).
- **Diseño Responsivo**: Adaptado a dispositivos móviles y de escritorio.
- **Modo Oscuro**: Soporte para cambio de tema.

## 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca principal para la interfaz de usuario.
- **React Router**: Manejo de rutas y navegación.
- **Tailwind CSS**: Framework de utilidades para el diseño.
- **Vite**: Entorno de desarrollo y empaquetador.
- **Context API**: Manejo del estado global (Carrito, Filtros, Autenticación).

## 📦 Estructura del Proyecto

El código fuente se encuentra en la carpeta `src/` y está organizado de la siguiente manera:

- `components/`: Componentes reutilizables de la UI.
- `pages/`: Vistas principales de la aplicación.
- `context/`: Contextos de React para estado global.
- `hooks/`: Hooks personalizados.
- `routes/`: Configuración de rutas.
- `helpers/`: Funciones de utilidad.

## 🔧 Instalación y Ejecución

1.  **Clonar el repositorio**:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd React-Online-Store
    ```

2.  **Instalar dependencias**:

    ```bash
    npm install
    ```

3.  **Ejecutar en desarrollo**:

    ```bash
    npm run dev
    ```

4.  **Construir para producción**:
    ```bash
    npm run build
    ```

## 📚 Documentación Técnica

Para más detalles sobre la implementación, consulta la documentación en la carpeta `docs/`:

- [Arquitectura](docs/Architecture.md)
- [Componentes](docs/Components.md)
- [Hooks](docs/Hooks.md)
- [Contexto](docs/Context.md)
