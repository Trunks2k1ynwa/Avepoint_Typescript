import { PrimaryButton } from '@gui/fluent-ui-allure'
import { useCountStore } from '~/store/countStore'
const Content = () => {
  const { value, increment, decrement } = useCountStore((state) => state)
  const handleTest = () => {
    increment(3)
  }
  return (
    <div>
      <PrimaryButton onClick={handleTest} iconProps={{ iconName: 'fas-rotate-right' }}>
        {value.count}
      </PrimaryButton>
      <p>{value.type}</p>
    </div>
  )
}

export default Content
