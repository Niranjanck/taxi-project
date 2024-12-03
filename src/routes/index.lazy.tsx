import { createLazyFileRoute } from '@tanstack/react-router'
import useStore from '../store/client/taxi-details'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { bears , increase} = useStore()
  return (
  <button onClick={()=>increase(bears+1)}>
    {bears}
  </button>
)
}
