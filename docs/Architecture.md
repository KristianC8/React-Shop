# Arquitectura del Proyecto

Este documento describe la arquitectura de alto nivel de la aplicación React Online Store.

## Estructura de Directorios

El proyecto sigue una estructura estándar de React con Vite:

- **`src/`**: Código fuente de la aplicación.
  - **`assets/`**: Recursos estáticos (imágenes, fuentes).
  - **`components/`**: Componentes de React reutilizables.
  - **`context/`**: Definiciones de Context API para el estado global.
  - **`helpers/`**: Funciones auxiliares y de utilidad.
  - **`hooks/`**: Custom Hooks.
  - **`layout/`**: Componentes de diseño (layouts) que envuelven las páginas.
  - **`pages/`**: Componentes que representan páginas completas.
  - **`routes/`**: Configuración de React Router.
  - **`mocks/`**: Datos simulados (si aplica).

## Enrutamiento (Routing)

La aplicación utiliza `react-router-dom` para la navegación. La configuración se encuentra en `src/routes/index.jsx`.

Se utilizan dos layouts principales:

1.  **`AppLayout`**: Utilizado para las páginas principales de navegación.
    - Rutas: `/` (Home), `/products` (Catálogo).
2.  **`Layout`**: Utilizado para páginas de detalle y procesos.
    - Rutas: `/products/:id` (Detalle), `/shop_cart` (Carrito), `/payment` (Pago), `/about` (Acerca de).

## Gestión de Estado (State Management)

El estado global se gestiona a través de React Context API. Los proveedores principales envuelven la aplicación en `src/main.jsx`:

- **`CartProvider`**: Gestiona el estado del carrito de compras (productos agregados, cantidades, total).
- **`AuthenticatedProvider`**: Gestiona el estado de autenticación del usuario.
- **`FiltersProvider`** (si se usa globalmente): Gestiona los filtros aplicados al catálogo de productos.

## Flujo de Datos

1.  **Carga de Productos**: Los productos se obtienen desde una API externa (o mock) y se muestran en `ProductList`.
2.  **Interacción del Usuario**: El usuario interactúa con los productos (agregar al carrito, filtrar).
3.  **Actualización de Estado**: Las acciones del usuario actualizan el contexto correspondiente (`CartContext`, `FiltersContext`).
4.  **Renderizado**: Los componentes suscritos a los contextos se re-renderizan para reflejar los cambios (ej. contador del carrito, lista filtrada).
