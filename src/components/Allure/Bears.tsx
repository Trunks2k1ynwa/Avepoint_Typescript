import { useBearStore } from '~/store/bearsStore'

type State = {
  bears: number
  addABear: () => void
}
const Bears = () => {
  const { bears, addABear } = useBearStore((state: State) => state)
  return (
    <div>
      <button onClick={() => addABear()}>Add Bear</button>
      <section>bears : {bears}</section>
    </div>
  )
}

export default Bears
