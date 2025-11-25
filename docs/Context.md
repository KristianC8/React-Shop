# Documentación de Contexto (State Management)

Este documento describe cómo se gestiona el estado global de la aplicación utilizando React Context API.

## `CartContext`

- **Archivo**: `src/context/cartContext.jsx`
- **Propósito**: Gestionar el estado del carrito de compras.
- **Implementación**: Utiliza `useReducer` para manejar acciones complejas.
- **Valores Expuestos**:
  - `cart`: Estado actual del carrito (array de productos).
  - `addToCart(product)`: Agrega un producto o incrementa su cantidad.
  - `removeFromCart(product)`: Decrementa la cantidad de un producto.
  - `removeItem(product)`: Elimina un producto del carrito completamente.
  - `clearCart()`: Vacía el carrito.
  - `setCart(cart)`: Establece el estado del carrito manualmente.

## `AuthenticatedContext`

- **Archivo**: `src/context/AuthenticatedContext.jsx`
- **Propósito**: Gestionar la autenticación del usuario y la visibilidad del modal de login.
- **Implementación**: Utiliza `useState`.
- **Valores Expuestos**:
  - `isAuthenticated`: Booleano, indica si el usuario está logueado.
  - `isLoginVisible`: Booleano, controla la visibilidad del modal de login.
  - `actualProduct`: Producto que el usuario intentó agregar antes de loguearse (para flujo de redirección).
  - `handleLogin()`: Inicia sesión.
  - `handleLogout()`: Cierra sesión y limpia `sessionStorage`.
  - `handleOpenModal(id)`: Abre el modal de login.
  - `handleCloseModal()`: Cierra el modal de login.

## `FiltersContext`

- **Archivo**: `src/context/filtersContext.jsx`
- **Propósito**: Gestionar los filtros aplicados al catálogo de productos.
- **Implementación**: Utiliza `useState` y sincroniza con `sessionStorage` para persistencia.
- **Estado Inicial**:
  ```javascript
  {
    price: 0,
    category: ['all']
  }
  ```
- **Valores Expuestos**:
  - `filters`: Objeto con los filtros actuales.
  - `setFilters`: Función para actualizar los filtros.
