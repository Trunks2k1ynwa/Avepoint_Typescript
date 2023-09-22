import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
  value: {
    count: number
    type: string
  }
}
type Actions = {
  increment: (val: number) => void
  decrement: (val: number) => void
}
export const useCountStore = create(
  immer<State & Actions>((set) => ({
    value: { count: 0, type: 'Trung' },
    increment: (val: number) =>
      set((state) => {
        ;(state.value.count += val), (state.value.type = 'increase')
      }),
    decrement: (val: number) =>
      set((state) => {
        ;(state.value.count -= val), (state.value.type = 'decrease')
      })
  }))
)
