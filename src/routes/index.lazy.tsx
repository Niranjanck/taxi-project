import BookingTab from '@/components/BookingTabs'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  // const { bears , increase} = useStore()
  return (
    <div className=''>
      {/* banner */}
      <div className='tp-h-[376px] banner-img tp-pt-32 tp-bg-green-400'>
        <BookingTab/>
      </div>
    </div>
  )
}
