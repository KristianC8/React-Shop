# Documentación de Componentes

Este documento detalla los componentes principales de la aplicación React Online Store.

## Componentes Globales

### `Header`

- **Ruta**: `src/components/Header.jsx`
- **Descripción**: Barra de navegación superior. Contiene el logo, enlaces de navegación, acceso al login, carrito de compras y selector de tema.
- **Dependencias**: `react-router-dom`, `Login`, `ShopCart`, `Theme`, `ButtonMobileMenu`.

### `Footer`

- **Ruta**: `src/components/Footer.jsx`
- **Descripción**: Pie de página de la aplicación.

## Componentes de Producto

### `ProductList`

- **Ruta**: `src/components/ProductList.jsx`
- **Descripción**: Muestra una cuadrícula de productos. Maneja la lógica para agregar productos al carrito y verifica el stock disponible.
- **Props**:
  - `products`: Array de objetos de producto a renderizar.
- **Hooks**: `useCart`, `useAuthenticated`, `useNavigate`.

### `CardProduct`

- **Ruta**: `src/components/CardProduct.jsx`
- **Descripción**: Componente individual para mostrar la información resumida de un producto (usado dentro de listas o destacados).

### `DetailProductPage` (Página/Componente)

- **Ruta**: `src/pages/DetailProductPage.jsx`
- **Descripción**: Vista detallada de un producto específico. Muestra imágenes, descripción completa y opciones de compra.

## Componentes del Carrito

### `Cart`

- **Ruta**: `src/components/Cart.jsx`
- **Descripción**: Componente visual del carrito de compras. Muestra la lista de productos agregados y el total.
- **Funcionalidad**: Permite ver los items y vaciar el carrito.

### `ShopCart`

- **Ruta**: `src/components/ShopCart.jsx`
- **Descripción**: Icono/Botón en el header que despliega el resumen del carrito o navega a la página del carrito.

### `CartItem`

- **Ruta**: `src/components/CartItem.jsx`
- **Descripción**: Representación de un ítem individual dentro del carrito. Permite ajustar la cantidad.

## Filtros y Búsqueda

### `Filters`

- **Ruta**: `src/components/Filters.jsx`
- **Descripción**: Panel lateral o modal para filtrar productos.
- **Funcionalidad**:
  - Filtro por precio (rango).
  - Filtro por categorías (checkboxes).
- **Hooks**: `useCategories`, `useFilteredProducts`.

## Autenticación

### `Login`

- **Ruta**: `src/components/Login.jsx`
- **Descripción**: Formulario o modal para el inicio de sesión de usuarios.
