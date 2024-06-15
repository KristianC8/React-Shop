import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}
