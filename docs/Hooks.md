# Documentación de Hooks

Este documento describe los Custom Hooks utilizados en la aplicación para encapsular lógica reutilizable.

## Hooks de Estado Global

### `useCart`

- **Ruta**: `src/hooks/useCart.js`
- **Descripción**: Provee acceso al contexto del carrito de compras.
- **Retorno**: Objeto del contexto (`cart`, `addToCart`, `removeFromCart`, `clearCart`, etc.).
- **Validación**: Lanza un error si se utiliza fuera de un `CartProvider`.

### `useAuthenticated`

- **Ruta**: `src/hooks/useAuthenticated.js`
- **Descripción**: Provee acceso al contexto de autenticación.
- **Retorno**: Objeto del contexto (`isAuthenticated`, `login`, `logout`, etc.).
- **Validación**: Lanza un error si se utiliza fuera de un `AuthenticatedProvider`.

## Hooks de Lógica de Negocio

### `useFilteredProducts`

- **Ruta**: `src/hooks/useFilteredProducts.js`
- **Descripción**: Maneja la obtención de productos desde la API y la aplicación de filtros.
- **Funcionalidad**:
  - Realiza el fetch a `https://dummyjson.com/products`.
  - Filtra los productos basándose en el estado de `filters` (precio y categoría).
- **Retorno**:
  - `filteredProducts`: Array de productos filtrados.
  - `isLoading`: Booleano indicando estado de carga.
  - `errorApi`: Objeto de error si falla la petición.
  - `filters`: Estado actual de los filtros.
  - `setFilters`: Función para actualizar filtros.

### `useCategories`

- **Ruta**: `src/hooks/useCategories.js`
- **Descripción**: Gestiona la lógica compleja de selección de categorías en el componente de filtros.
- **Funcionalidad**:
  - Maneja el estado de checkboxes individuales y el checkbox "All".
  - Sincroniza la selección visual con el filtro global de categorías.
  - Persiste la selección en `sessionStorage`.
- **Retorno**:
  - `categories`: Array de objetos para renderizar los checkboxes.
  - `handleChangeCheck`: Manejador para cambios en checkboxes individuales.
  - `handleChangeCheckAll`: Manejador para el checkbox "All".

### `useLogin` (Pendiente de análisis profundo)

- **Ruta**: `src/hooks/useLogin.js`
- **Descripción**: Probablemente maneja la lógica del formulario de login y validaciones.

### `useTheme`

- **Ruta**: `src/hooks/useTheme.js`
- **Descripción**: Gestiona el cambio de tema (Claro/Oscuro) y su persistencia.
