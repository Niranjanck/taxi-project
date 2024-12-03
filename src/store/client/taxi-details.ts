import { create } from 'zustand'
interface StoreState {
  bears: number
}

interface Actions {
  increase: (by: number) => void
}
const useStore = create<StoreState & Actions>((set) => ({
  bears: 0,
  increase: (by: number) => set((state: StoreState) => ({ bears: state.bears + by }))
}))
export default useStore;
