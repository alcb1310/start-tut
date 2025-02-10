import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/transacciones/cierre')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/transacciones/cierre"!</div>
}
